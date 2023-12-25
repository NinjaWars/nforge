import schema from "@/components/models/index.js"
import { initSchema } from "@/components/models/initSchema";


/**
 * 
 * The overall goal of this file is to collect 
 * the model (e.g. a User) and it's data
 * (e.g. the user's name, email, etc.) as fields
 * and store them in the same single object
 */

const fromStorage = (key: string) => {
    const data = localStorage.getItem(key)
    return JSON.parse(data ?? '') || undefined
}

const toStorage = (key: string, data: Record<string, unknown>) => {
    localStorage.setItem(key, JSON.stringify(data))
}

const fetchDataByModel = async (modelType: string, id: string, schema: unknown) => {
    const idKey = `${modelType}-${id}`
    // fetch the model data from cache or from the api
    const cachedData = fromStorage(`${modelType}-${id}`)
    if (cachedData) {
        return new Promise(cachedData)
    } else {
        let fetchedData = undefined
        try {
            const fetchResult = await fetch(`/api/${modelType}/${id}`)
            fetchedData = await fetchResult.json()
            toStorage(idKey, fetchedData)
        } catch (e) {
            console.error(`Error fetching ${modelType} ${id}:`)
            console.error(e)
        }
        return fetchedData
    }
}

interface ModelInfo {
    name: string
    fields: Record<string, unknown>
    [key: string]: unknown
}

interface ModelInstance {
    _data: Record<string, unknown>
    name: string
    fields: Record<string, unknown>
    [key: string]: unknown
}

interface SchemaShape {
    models: {
        [key: string]: ModelInfo
    }
}

const initializeDataByModel = (modelType: string, schema: SchemaShape): ModelInstance => {
    const model = schema.models[modelType] as ModelInfo
    const fields = model.fields
    const data: Record<string, unknown> = {}
    Object.keys(fields).forEach((fieldName) => {
        data[fieldName] = null
    })
    const modelInstance = initSchema(model)
    modelInstance._data = data
    return modelInstance
}

const collateDataFields = (model: ModelInfo, data: Record<string, unknown>) => {
    const fields = model.fields as string[]; // Cast model.fields to string[]
    const collatedData: Record<string, unknown> = {}
    Object.keys(fields).forEach((fieldName) => {
        collatedData[fieldName] = data[fieldName]
    })
    return collatedData
}


const DataStore = {
    query: async (storeType: unknown, id: string) => {
        const allModels = { models: schema } // using global schema
        const namedStoreType = storeType as string
        const emptyModel = initializeDataByModel(namedStoreType, allModels)
        const data = await fetchDataByModel(namedStoreType, id, allModels)
        return collateDataFields(emptyModel, data)
    }

}

export default DataStore