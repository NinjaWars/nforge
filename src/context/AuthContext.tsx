import { PropsWithChildren } from "react";
import { Auth } from '@/auth'
import { User } from '@/components/models/User'
import { useEffect, useState, useMemo } from 'react'
import { createContext, useContext } from 'react'
import logger from '@/utils/logger'


export interface AuthDataInfo {
    loading: boolean
    session: undefined | User
}

interface AuthContextProps {
    loading: boolean,
    session: undefined | User,
    logout: () => void
    mockAuth?: boolean
}

/**
 * Simple default for the authenticated user information
 */
const AuthContext = createContext<AuthContextProps>({
    session: undefined,
    loading: true,
    logout: () => {
        logger().error('Attempt to logout while not logged in.')
    },
    mockAuth: false,
})

interface AuthProviderProps extends Record<string, string | number | boolean | React.ReactNode | symbol> {
    mockAuth?: boolean,
}

/**
 * Passes down Auth to the rest of the app
 * @param param0
 * @returns
 */
const AuthProvider = ({ mockAuth = false, ...rest }: PropsWithChildren<AuthProviderProps>) => {
    const [loading, setLoading] = useState<boolean>(true)
    const [session, setSession] = useState<AuthDataInfo['session']>(undefined)

    /**
     * Logout, the function not handled by the amplify builtin auth usage
     */
    const logout = async (): Promise<void> => {
        try {
            await Auth.signOut()
            setSession(undefined)
            setLoading(false)
        } catch (error) {
            logger().log('error signing out: ', error)
        }
    }

    /**
     * Hit obtain the currently logged in user info if available
     * @param bypassCache
     */
    const obtainAuth = useMemo(() => {
        return (bypassCache = false) => {
            try {
                Auth.currentAuthenticatedUser({
                    bypassCache: bypassCache,
                })
                    .then((withinUser) => {
                        setSession(withinUser)
                        setLoading(false)
                    })
                    .catch((e) => {
                        logger().info('Not yet authenticated.')
                        setLoading(false)
                    })
            } catch (e) {
                logger().info(
                    'Tried to get authenticated user, perhaps not logged in.'
                )
            }
        }
    }, [])
    useEffect(() => {
        if (!mockAuth) {
            obtainAuth()
        }
        return () => { }
    }, [mockAuth, obtainAuth])

    return <AuthContext.Provider value={{ loading, session, logout }} {...rest} />
}

const useAuth = () => useContext(AuthContext)
export { AuthProvider, useAuth }
