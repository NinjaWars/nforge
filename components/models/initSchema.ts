import operateInitialize from './operateInitialize';

interface Model {
    fields: Record<string, unknown>
    name: string
    [key: string]: unknown
}

export const initSchema = (schema: Record<string, Model>): Record<string, Model> => {
    // Gather the model classes.
    const modelBlank: Record<string, Model> = {};
    const models = Object.keys(schema).reduce((acc, modelName) => {
        const modelInit = schema[modelName];
        // use the model init function to create the model class
        operateInitialize(modelInit);
        return { ...acc, [modelName]: modelInit };
    }, modelBlank);
    return models;
};
