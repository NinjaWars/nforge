import { Avatar, makeStyles } from '@material-ui/core'
import { faDice, faHatWizard, faSignature } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import Linkify from 'react-linkify'
import { Typeset } from '..'

interface Author {
    name: string
    title?: string
    avatarUrl?: string
    charName?: string
    socialUrl?: string
    bio?: string
}

interface ProfileProps {
    className?: string,
    children?: React.ReactNode,
    person: Author,
    [key: string]: any,
}

const useStyles = makeStyles((theme) => ({
    centered: {
        display: 'flex',
        justifyContent: 'center',
    },
    rivulet: {
        display: 'flex',
        justifyContent: 'flex-start',
    },
    verticalCentered: {
        display: 'flex',
        alignItems: 'center',
    },
    bio: {
        color: '#666666',
    }
}))


function stringToColor(string: string) {
    let hash = 0
    let i

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash)
    }

    let color = '#'

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff
        color += `00${value.toString(16)}`.substr(-2)
    }
    /* eslint-enable no-bitwise */

    return color
}

function stringAvatar(name: string) {
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    }
}


/**
 * display author/user information, avatar to represent a person
 */
const Profile = ({ className, children, person, ...rest }: ProfileProps) => {
    const classes = useStyles()
    return (
        <>
            <section>
                <Typeset>
                    <div>
                        <Icon icon={faSignature} /> <strong>{person.name}</strong>
                    </div>
                    <div>
                        <div className={classes.rivulet}>
                            <div className={`${classes.centered} ${classes.verticalCentered}`}><Avatar {...stringAvatar(person.name)} src={person.avatarUrl ?? ''} /></div>
                            <ul>
                                {person.title && <li><Icon icon={faHatWizard} /> {person.title}</li>}
                                {person.socialUrl && <li><Linkify>{person.socialUrl}</Linkify></li>}
                                {person.charName && <li><Icon icon={faDice} /> Character name: {person.charName}</li>}
                            </ul>
                        </div>
                        {person.bio && <blockquote className={classes.bio}>{person.bio}</blockquote>}
                    </div>
                </Typeset>
            </section>
        </>
    )
}

export default Profile
