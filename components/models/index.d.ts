import {
    ModelInit,
    MutableModel,
    PersistentModelConstructor,
} from '@aws-amplify/datastore'

export declare class Skill {
    readonly id: string
    readonly identity: string
    readonly name: string
    constructor(init: ModelInit<Skill>)
    static copyOf(
        source: Skill,
        mutator: (draft: MutableModel<Skill>) => MutableModel<Skill> | void
    ): Skill
}

export declare class Physical {
    readonly id: string
    readonly identity: string
    readonly health: number
    readonly strength?: number
    readonly speed?: number
    readonly stamina?: number
    readonly energy?: number
    constructor(init: ModelInit<Physical>)
    static copyOf(
        source: Physical,
        mutator: (
            draft: MutableModel<Physical>
        ) => MutableModel<Physical> | void
    ): Physical
}

export declare class Totem {
    readonly id: string
    readonly identity: string
    readonly name: string
    readonly theme?: string
    readonly active: boolean
    readonly description: string
    constructor(init: ModelInit<Totem>)
    static copyOf(
        source: Totem,
        mutator: (draft: MutableModel<Totem>) => MutableModel<Totem> | void
    ): Totem
}

export declare class Account {
    readonly id: string
    readonly name: string
    readonly identity: string
    readonly type?: number
    readonly operational?: boolean
    readonly lastLogin: string
    readonly lastLoginFailure?: string
    readonly karmaTotal?: number
    readonly lastIp: string
    readonly confirmed?: boolean
    readonly verificationCode: string
    readonly chars?: (Character | null)[]
    constructor(init: ModelInit<Account>)
    static copyOf(
        source: Account,
        mutator: (draft: MutableModel<Account>) => MutableModel<Account> | void
    ): Account
}

export declare class Character {
    readonly id: string
    readonly identity: string
    readonly health: number
    readonly accountID: string
    readonly CharProfile?: CharProfile
    constructor(init: ModelInit<Character>)
    static copyOf(
        source: Character,
        mutator: (
            draft: MutableModel<Character>
        ) => MutableModel<Character> | void
    ): Character
}

export declare class CharProfile {
    readonly id: string
    readonly identity: string
    readonly fallbackName?: string
    readonly avatarUrl?: string
    constructor(init: ModelInit<CharProfile>)
    static copyOf(
        source: CharProfile,
        mutator: (
            draft: MutableModel<CharProfile>
        ) => MutableModel<CharProfile> | void
    ): CharProfile
}

export declare class Chat {
    readonly id: string
    readonly text: string
    readonly AuthorCharProfile?: CharProfile
    constructor(init: ModelInit<Chat>)
    static copyOf(
        source: Chat,
        mutator: (draft: MutableModel<Chat>) => MutableModel<Chat> | void
    ): Chat
}

export declare class News {
    readonly id: string
    readonly title: string
    readonly content: string
    readonly tags?: string
    readonly author: string
    constructor(init: ModelInit<News>)
    static copyOf(
        source: News,
        mutator: (draft: MutableModel<News>) => MutableModel<News> | void
    ): News
}

export declare class PrivateNote {
    readonly id: string
    readonly content: string
    readonly category?: string
    constructor(init: ModelInit<PrivateNote>)
    static copyOf(
        source: PrivateNote,
        mutator: (
            draft: MutableModel<PrivateNote>
        ) => MutableModel<PrivateNote> | void
    ): PrivateNote
}
