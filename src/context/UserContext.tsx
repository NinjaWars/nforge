import { User } from '@/models/User'
import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import logger from '@/utils/logger'
import { AuthDataInfo, useAuth } from './AuthContext'

interface UserInfo {
    loading: boolean
    user: undefined | User
}

/**
 * A simple shell for the user context, with blank defaults
 */
const UserContext = createContext<UserInfo>({
    user: undefined,
    loading: true,
})

/**
 * Just pull the user from useAuth if possible
 * @param props
 * @returns
 */
const UserProvider = (props: any) => {
    const [loading, setLoading] = useState<boolean>(true)
    const [user, setUser] = useState<User | undefined>(undefined)
    const { session } = useAuth()
    const obtainUser = useCallback((sessionI: AuthDataInfo['session']) => {
        try {
            setUser({
                name: sessionI?.name as string,
                username: sessionI?.username as string,
                token: sessionI?.token as string,
                userId: '',
                avatarUrl: '',
                attributes: {
                    email: '',
                    phone: undefined,
                }

            })
            setLoading(false)
        } catch (error) {
            logger().error(error)
            setLoading(false)
        }
    }, [])
    useEffect(() => {
        if (session) {
            obtainUser(session)
        }
    }, [session, obtainUser])
    return < UserContext.Provider value={{ user, loading }} {...props} />
}

const useUser = () => useContext(UserContext)

export { useUser, UserProvider }
