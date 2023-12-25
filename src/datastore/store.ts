import { Schema } from "@/components/models/schema"

const fromStorage = (key) => {
    const data = localStorage.getItem(key)
    return JSON.parse(data)
}

const toStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data))
}

const fetchDataByModel = async (modelType, id, schema) => {
    const idKey = `${modelType}-${id}`
    // fetch the model data from cache or from the api
    const cachedData = fromStorage(`${modelType}-${id}`)
    if (cachedData) {
        return new Promise(cachedData)
    } else {
        try {
            const fetchResult = await fetch(`/api/${modelType}/${id}`)
            const fetchedData = await fetchResult.json()
            toStorage(idKey, fetchedData)
        } catch (e) {
            console.error(e)
            const fetchedData = undefined
        }
        return fetchedData
    }
}

const collateDataFields = (model, data, schema) => {
    const fields = model.fields
    const collatedData = {}
    Object.keys(fields).forEach((fieldName) => {
        collatedData[fieldName] = data[fieldName]
    })
    return collatedData
}

const initializeDataByModel = (modelType, schema) => {
    const model = schema.models[modelType]
    const fields = model.fields
    const data = {}
    Object.keys(fields).forEach((fieldName) => {
        data[fieldName] = null
    })
    const modelInstance = initSchema(model)
    modelInstance._data = data
    return modelInstance
}


const DataStore = {
    query: async (storeType, id) => {
        const emptyModel = initializeDataByModel(storeType, Schema)
        const data = await fetchDataByModel(storeType, id, Schema)
        return collateDataFields(emptyModel, data, Schema)
    }

}

export default DataStore