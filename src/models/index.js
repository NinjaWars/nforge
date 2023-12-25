// @ts-check
//import { initSchema } from '@aws-amplify/datastore'

import { schema } from './schema'

const operateInitialize = (model) => {
    // loop over the fields and set them as properties on the model instance
    return Object.keys(model.fields).forEach((fieldName) => {
        Object.defineProperty(model.prototype, fieldName, {
            get() {
                return this._data[fieldName]
            },
            set(value) {
                this._data[fieldName] = value
            },
        })
    })
}

/**
 * @typedef {Object} Model
 * @property {string} name
 * @property {unknown} fields
 * @property {unknown} [key]
 */

/** inferred return type
 * @param {schema} schema
 * @returns {Record<string, Model>}
 */
export const initSchema = (schema) => {
    // Gather the model classes.
    const models = Object.keys(schema).reduce((acc, modelName) => {
        const modelInit = schema[modelName]
        // use the model init function to create the model class
        const model = operateInitialize(modelInit)
        return { ...acc, [modelName]: model }
    }, {})
    return models
}

const {
    Skill,
    Physical,
    Totem,
    Account,
    Character,
    CharProfile,
    Chat,
    News,
    PrivateNote,
} = initSchema(schema)

export {
    Skill,
    Physical,
    Totem,
    Account,
    Character,
    CharProfile,
    Chat,
    News,
    PrivateNote,
}
