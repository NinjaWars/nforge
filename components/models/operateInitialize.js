
export const operateInitialize = (model) => {
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
