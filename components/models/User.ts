export interface User {
    userId: string
    username: string
    name: string
    token: string
    avatarUrl: string,
    attributes: {
        email: string,
        phone: string | undefined,
        [key: string]: number | string | boolean | undefined,
    }
}
