import operateInitialize from './operateInitialize';

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
        const modelInit = schema[modelName];
        // use the model init function to create the model class
        const model = operateInitialize(modelInit);
        return { ...acc, [modelName]: model };
    }, {});
    return models;
};
