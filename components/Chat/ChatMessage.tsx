import TimeAgo from 'react-timeago'
import styles from './chat.module.css'
import { PropsWithChildren } from "react";


interface ChatMessageProps {
    by: string,
    datetime: Date | string,
    classes?: Record<string, string>,
    className?: string,
    // Also has children from PropsWithChildren
}

/**
 * Display a single message of a chat message with author and time
 * @param {*} props
 */
const ChatMessage = ({ by, datetime, classes, className, children, ...rest }: PropsWithChildren<ChatMessageProps>) => {
    const options = { month: 'long' as 'long', day: 'numeric' as 'numeric', year: 'numeric' as 'numeric', hour: 'numeric' as 'numeric', minute: 'numeric' as 'numeric', }
    const dRender = datetime instanceof Date ? datetime.toLocaleDateString('en-US', options) : datetime
    const utc = datetime instanceof Date ? datetime.toUTCString() : datetime
    return (
        <div className={`${className} ${styles['chat-message']}`} {...rest}>
            <strong>{by}</strong>{' '}
            {children}{' '}
            <TimeAgo date={utc} title={dRender} className='chat-message-time timeago'>{dRender}</TimeAgo>
        </div>
    )
}

export default ChatMessage
