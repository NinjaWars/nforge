import Reframe from '../Reframe'

import styles from './fchat.module.css'

interface FChatProps {
    className?: string
    classes?: Record<string, string>,
    url: string,
    remote: string,
}

/**
 * FChat, for frame-based chat area from the main site
 * @param {*} props
 */
const FChat = ({ className, classes, url, remote, ...rest }: FChatProps) => {
    // To avoid dependency on a config for now, FChat must be passed a url and remote
    const fRemote = remote ? remote : window?.location?.href
    const fUrl = url ? url : remote + 'village'
    return (
        <Reframe
            title="Chat"
            src={fUrl}
            className={`${styles.component} ${className}`}
            {...rest}
        />
    )
}

export default FChat
