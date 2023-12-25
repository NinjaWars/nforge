

interface ModelShape {
    name: string
    fields: Record<string, unknown>
    [key: string]: unknown
}

/**
 * Puts each field with a get and set on the model
 */
const operateInitialize = (model: ModelShape): void => {
    // loop over the fields and set them as properties on the model instance
    return Object.keys(model.fields).forEach((fieldName) => {
        Object.defineProperty(model.prototype, fieldName, {
            get() {
                return this._data[fieldName];
            },
            set(value) {
                this._data[fieldName] = value;
            },
        });
    });
};

export default operateInitialize;