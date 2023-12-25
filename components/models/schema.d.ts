//import { Schema } from '@aws-amplify/datastore'
// https://github.com/aws-amplify/amplify-js/blob/main/packages/datastore/src/datastore/datastore.ts

type Schema = {
    models: {
        [key: string]: {
            name: string,
            fields: unknown
        }
    }
}

export declare const schema: Schema
