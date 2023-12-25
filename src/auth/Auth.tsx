
// mock out an auth class like aws amplify auth
const Auth = {
    currentAuthenticatedUser: async ({ bypassCache }: { bypassCache: boolean }) => {
        return {
            username: 'testuser',
            attributes: {
                email: 'example@example.com',
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