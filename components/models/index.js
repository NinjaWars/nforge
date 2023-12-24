// @ts-check
import { initSchema } from '@aws-amplify/datastore'
import { schema } from './schema'

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
