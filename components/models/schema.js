export const schema = {
    models: {
        Skill: {
            name: 'Skill',
            fields: {
                id: {
                    name: 'id',
                    isArray: false,
                    type: 'ID',
                    isRequired: true,
                    attributes: [],
                },
                identity: {
                    name: 'identity',
                    isArray: false,
                    type: 'String',
                    isRequired: true,
                    attributes: [],
                },
                name: {
                    name: 'name',
                    isArray: false,
                    type: 'String',
                    isRequired: true,
                    attributes: [],
                },
            },
            syncable: true,
            pluralName: 'Skills',
            attributes: [
                {
                    type: 'model',
                    properties: {},
                },
                {
                    type: 'auth',
                    properties: {
                        rules: [
                            {
                                allow: 'private',
                                operations: [
                                    'create',
                                    'update',
                                    'delete',
                                    'read',
                                ],
                            },
                        ],
                    },
                },
            ],
        },
        Physical: {
            name: 'Physical',
            fields: {
                id: {
                    name: 'id',
                    isArray: false,
                    type: 'ID',
                    isRequired: true,
                    attributes: [],
                },
                identity: {
                    name: 'identity',
                    isArray: false,
                    type: 'String',
                    isRequired: true,
                    attributes: [],
                },
                health: {
                    name: 'health',
                    isArray: false,
                    type: 'Int',
                    isRequired: true,
                    attributes: [],
                },
                strength: {
                    name: 'strength',
                    isArray: false,
                    type: 'Int',
                    isRequired: false,
                    attributes: [],
                },
                speed: {
                    name: 'speed',
                    isArray: false,
                    type: 'Int',
                    isRequired: false,
                    attributes: [],
                },
                stamina: {
                    name: 'stamina',
                    isArray: false,
                    type: 'Int',
                    isRequired: false,
                    attributes: [],
                },
                energy: {
                    name: 'energy',
                    isArray: false,
                    type: 'Int',
                    isRequired: false,
                    attributes: [],
                },
            },
            syncable: true,
            pluralName: 'Physicals',
            attributes: [
                {
                    type: 'model',
                    properties: {},
                },
                {
                    type: 'auth',
                    properties: {
                        rules: [
                            {
                                provider: 'userPools',
                                ownerField: 'owner',
                                allow: 'owner',
                                operations: ['read'],
                                identityClaim: 'cognito:username',
                            },
                            {
                                groupClaim: 'cognito:groups',
                                provider: 'userPools',
                                allow: 'groups',
                                groups: ['Administrators'],
                                operations: [
                                    'read',
                                    'update',
                                    'create',
                                    'delete',
                                ],
                            },
                            {
                                groupClaim: 'cognito:groups',
                                provider: 'userPools',
                                allow: 'groups',
                                groups: ['Players'],
                                operations: ['read'],
                            },
                        ],
                    },
                },
            ],
        },
        Totem: {
            name: 'Totem',
            fields: {
                id: {
                    name: 'id',
                    isArray: false,
                    type: 'ID',
                    isRequired: true,
                    attributes: [],
                },
                identity: {
                    name: 'identity',
                    isArray: false,
                    type: 'String',
                    isRequired: true,
                    attributes: [],
                },
                name: {
                    name: 'name',
                    isArray: false,
                    type: 'String',
                    isRequired: true,
                    attributes: [],
                },
                theme: {
                    name: 'theme',
                    isArray: false,
                    type: 'String',
                    isRequired: false,
                    attributes: [],
                },
                active: {
                    name: 'active',
                    isArray: false,
                    type: 'Boolean',
                    isRequired: true,
                    attributes: [],
                },
                description: {
                    name: 'description',
                    isArray: false,
                    type: 'String',
                    isRequired: true,
                    attributes: [],
                },
            },
            syncable: true,
            pluralName: 'Totems',
            attributes: [
                {
                    type: 'model',
                    properties: {},
                },
                {
                    type: 'auth',
                    properties: {
                        rules: [
                            {
                                provider: 'userPools',
                                ownerField: 'owner',
                                allow: 'owner',
                                operations: ['read', 'update', 'delete'],
                                identityClaim: 'cognito:username',
                            },
                            {
                                groupClaim: 'cognito:groups',
                                provider: 'userPools',
                                allow: 'groups',
                                groups: ['Administrators'],
                                operations: [
                                    'read',
                                    'create',
                                    'update',
                                    'delete',
                                ],
                            },
                            {
                                allow: 'private',
                                operations: ['read'],
                            },
                        ],
                    },
                },
            ],
        },
        Account: {
            name: 'Account',
            fields: {
                id: {
                    name: 'id',
                    isArray: false,
                    type: 'ID',
                    isRequired: true,
                    attributes: [],
                },
                name: {
                    name: 'name',
                    isArray: false,
                    type: 'String',
                    isRequired: true,
                    attributes: [],
                },
                identity: {
                    name: 'identity',
                    isArray: false,
                    type: 'String',
                    isRequired: true,
                    attributes: [],
                },
                type: {
                    name: 'type',
                    isArray: false,
                    type: 'Int',
                    isRequired: false,
                    attributes: [],
                },
                operational: {
                    name: 'operational',
                    isArray: false,
                    type: 'Boolean',
                    isRequired: false,
                    attributes: [],
                },
                lastLogin: {
                    name: 'lastLogin',
                    isArray: false,
                    type: 'AWSDateTime',
                    isRequired: true,
                    attributes: [],
                },
                lastLoginFailure: {
                    name: 'lastLoginFailure',
                    isArray: false,
                    type: 'AWSDateTime',
                    isRequired: false,
                    attributes: [],
                },
                karmaTotal: {
                    name: 'karmaTotal',
                    isArray: false,
                    type: 'Int',
                    isRequired: false,
                    attributes: [],
                },
                lastIp: {
                    name: 'lastIp',
                    isArray: false,
                    type: 'String',
                    isRequired: true,
                    attributes: [],
                },
                confirmed: {
                    name: 'confirmed',
                    isArray: false,
                    type: 'Boolean',
                    isRequired: false,
                    attributes: [],
                },
                verificationCode: {
                    name: 'verificationCode',
                    isArray: false,
                    type: 'String',
                    isRequired: true,
                    attributes: [],
                },
                chars: {
                    name: 'chars',
                    isArray: true,
                    type: {
                        model: 'Character',
                    },
                    isRequired: false,
                    attributes: [],
                    isArrayNullable: true,
                    association: {
                        connectionType: 'HAS_MANY',
                        associatedWith: 'accountID',
                    },
                },
            },
            syncable: true,
            pluralName: 'Accounts',
            attributes: [
                {
                    type: 'model',
                    properties: {},
                },
                {
                    type: 'auth',
                    properties: {
                        rules: [
                            {
                                allow: 'private',
                                operations: [
                                    'create',
                                    'update',
                                    'delete',
                                    'read',
                                ],
                            },
                        ],
                    },
                },
            ],
        },
        Character: {
            name: 'Character',
            fields: {
                id: {
                    name: 'id',
                    isArray: false,
                    type: 'ID',
                    isRequired: true,
                    attributes: [],
                },
                identity: {
                    name: 'identity',
                    isArray: false,
                    type: 'String',
                    isRequired: true,
                    attributes: [],
                },
                health: {
                    name: 'health',
                    isArray: false,
                    type: 'Int',
                    isRequired: true,
                    attributes: [],
                },
                accountID: {
                    name: 'accountID',
                    isArray: false,
                    type: 'ID',
                    isRequired: true,
                    attributes: [],
                },
                CharProfile: {
                    name: 'CharProfile',
                    isArray: false,
                    type: {
                        model: 'CharProfile',
                    },
                    isRequired: false,
                    attributes: [],
                    association: {
                        connectionType: 'BELONGS_TO',
                        targetName: 'characterCharProfileId',
                    },
                },
            },
            syncable: true,
            pluralName: 'Characters',
            attributes: [
                {
                    type: 'model',
                    properties: {},
                },
                {
                    type: 'key',
                    properties: {
                        name: 'byAccount',
                        fields: ['accountID'],
                    },
                },
                {
                    type: 'auth',
                    properties: {
                        rules: [
                            {
                                allow: 'private',
                                operations: [
                                    'create',
                                    'update',
                                    'delete',
                                    'read',
                                ],
                            },
                        ],
                    },
                },
            ],
        },
        CharProfile: {
            name: 'CharProfile',
            fields: {
                id: {
                    name: 'id',
                    isArray: false,
                    type: 'ID',
                    isRequired: true,
                    attributes: [],
                },
                identity: {
                    name: 'identity',
                    isArray: false,
                    type: 'String',
                    isRequired: true,
                    attributes: [],
                },
                fallbackName: {
                    name: 'fallbackName',
                    isArray: false,
                    type: 'String',
                    isRequired: false,
                    attributes: [],
                },
                avatarUrl: {
                    name: 'avatarUrl',
                    isArray: false,
                    type: 'String',
                    isRequired: false,
                    attributes: [],
                },
            },
            syncable: true,
            pluralName: 'CharProfiles',
            attributes: [
                {
                    type: 'model',
                    properties: {},
                },
                {
                    type: 'auth',
                    properties: {
                        rules: [
                            {
                                allow: 'private',
                                operations: [
                                    'create',
                                    'update',
                                    'delete',
                                    'read',
                                ],
                            },
                        ],
                    },
                },
            ],
        },
        Chat: {
            name: 'Chat',
            fields: {
                id: {
                    name: 'id',
                    isArray: false,
                    type: 'ID',
                    isRequired: true,
                    attributes: [],
                },
                text: {
                    name: 'text',
                    isArray: false,
                    type: 'String',
                    isRequired: true,
                    attributes: [],
                },
                AuthorCharProfile: {
                    name: 'AuthorCharProfile',
                    isArray: false,
                    type: {
                        model: 'CharProfile',
                    },
                    isRequired: false,
                    attributes: [],
                    association: {
                        connectionType: 'BELONGS_TO',
                        targetName: 'chatAuthorCharProfileId',
                    },
                },
            },
            syncable: true,
            pluralName: 'Chats',
            attributes: [
                {
                    type: 'model',
                    properties: {},
                },
                {
                    type: 'auth',
                    properties: {
                        rules: [
                            {
                                allow: 'private',
                                operations: ['read'],
                            },
                            {
                                provider: 'userPools',
                                ownerField: 'owner',
                                allow: 'owner',
                                operations: ['read', 'create', 'delete'],
                                identityClaim: 'cognito:username',
                            },
                        ],
                    },
                },
            ],
        },
        News: {
            name: 'News',
            fields: {
                id: {
                    name: 'id',
                    isArray: false,
                    type: 'ID',
                    isRequired: true,
                    attributes: [],
                },
                title: {
                    name: 'title',
                    isArray: false,
                    type: 'String',
                    isRequired: true,
                    attributes: [],
                },
                content: {
                    name: 'content',
                    isArray: false,
                    type: 'String',
                    isRequired: true,
                    attributes: [],
                },
                tags: {
                    name: 'tags',
                    isArray: false,
                    type: 'String',
                    isRequired: false,
                    attributes: [],
                },
                author: {
                    name: 'author',
                    isArray: false,
                    type: 'String',
                    isRequired: true,
                    attributes: [],
                },
            },
            syncable: true,
            pluralName: 'News',
            attributes: [
                {
                    type: 'model',
                    properties: {},
                },
                {
                    type: 'auth',
                    properties: {
                        rules: [
                            {
                                allow: 'private',
                                operations: [
                                    'create',
                                    'update',
                                    'delete',
                                    'read',
                                ],
                            },
                        ],
                    },
                },
            ],
        },
        PrivateNote: {
            name: 'PrivateNote',
            fields: {
                id: {
                    name: 'id',
                    isArray: false,
                    type: 'ID',
                    isRequired: true,
                    attributes: [],
                },
                content: {
                    name: 'content',
                    isArray: false,
                    type: 'String',
                    isRequired: true,
                    attributes: [],
                },
                category: {
                    name: 'category',
                    isArray: false,
                    type: 'String',
                    isRequired: false,
                    attributes: [],
                },
            },
            syncable: true,
            pluralName: 'PrivateNotes',
            attributes: [
                {
                    type: 'model',
                    properties: {},
                },
                {
                    type: 'auth',
                    properties: {
                        rules: [
                            {
                                allow: 'private',
                                operations: [
                                    'create',
                                    'update',
                                    'delete',
                                    'read',
                                ],
                            },
                        ],
                    },
                },
            ],
        },
    },
    enums: {},
    nonModels: {},
    version: 'b387c0da3dd4b5a0a4cbc6259465798c',
}
