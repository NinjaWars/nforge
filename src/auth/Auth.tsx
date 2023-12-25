import { User } from "@/components/models/User"

// mock out an auth class like aws amplify auth
const Auth = {
    currentAuthenticatedUser: async ({ bypassCache }: { bypassCache: boolean }): Promise<User> => {
        return {
            userId: '1234',
            username: 'testuser',
            name: 'Test User',
            token: '1234',
            avatarUrl: 'https://example.com',
            attributes: {
                email: 'example@example.com',
                phone: '123-456-7890',
            },

        }
    },
    signOut: async () => {
        return true
    },
    signIn: async () => {
        return true
    },
    signUp: async () => {
        return true
    },
}



export default Auth;