import { Avatar } from '@material-ui/core'
import { UserProvider, useUser } from './UserContext'
import mockProfile from 'data/mockProfile.json'
import avatarImage from 'images/avatar/sample_gravatar.png'
mockProfile.avatarUrl = avatarImage // override avatar for mockProfile
const mockUser = {...mockProfile}

export default {
    title: 'Context/UserContext',
    component: Avatar,
    decorators: [],
}

const UserRenderer = () => {
    const {loading, user} = useUser()
    const initials = user?.username?.substring(0, 2)?.toUpperCase()
    return (
        <>
            <ul>
                <li>Avatar: <Avatar src={!loading ? user?.avatarUrl : ''} alt={initials}>{initials}</Avatar></li>
                <li>username: {user?.username}</li>
                <li>loading: {loading ? 'true' : 'false'}</li>
            </ul>
        </>
    )
}

export const AvatarBasic = (args: any) => {
    return (
        <>
            <Avatar {...args}>{args?.alt}</Avatar>
        </>
    )
}

AvatarBasic.args = {
    src:
        mockUser.avatarUrl,
    alt: mockUser.username
}

export const AvatarContext = (args: any) => {
    const { loading, user, ...rest} = args
    return (
        <>
            <UserProvider value={{loading: loading, user}}>
                <UserRenderer {...rest}/>
            </UserProvider>
        </>
    )
}

AvatarContext.args = {
    src:
        mockUser.avatarUrl,
    alt: mockUser.username,
    loading: false,
    user: mockUser,
}
