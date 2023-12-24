import { Component } from 'react'
import { TextField, Button } from '@material-ui/core'

import ChatMessage from './ChatMessage'
import styles from './chat.module.css'
import FChat from './FChat'
import { Skeleton } from '@material-ui/lab'

// React hook form: https://react-hook-form.com/get-started#IntegratingwithUIlibraries

export interface SChatMessage {
    id: React.Key | null | undefined,
    by: string,
    datetime: string | Date,
    message: string | number | boolean | {} | React.ReactNode
}

export interface SendChat {
    message: string | null,
    untrustedChatSender: number | string | null,
}

export interface ChatProps {
    handleChatRequest: (data: SendChat) => void,
    className?: string,
    noReframe: boolean,
    formProps: any,
    untrustedChatSender?: number | string,
    chats: SChatMessage[],
    loading: boolean,
}

/**
 * An overall Chat display, use noReframe=false for iframe-based chat system
 * @param { handleSubmission, handleChatRequest } props
 */
class Chat extends Component<ChatProps, {}> {
    constructor(props: ChatProps) {
        super(props)
        this.handleSubmission = this.handleSubmission.bind(this)
        this.handleChatRequest = this.handleChatRequest.bind(this)
    }

    handleSubmission(e: React.MouseEvent<HTMLFormElement>) {
        e.preventDefault()
        const messageField = e.currentTarget.querySelector('input[name=chat-message]') as HTMLInputElement
        const senderField = e.currentTarget.querySelector('input[name=untrusted-chat-sender]') as HTMLInputElement
        this.handleChatRequest({
            message: messageField ? messageField.value : null,
            untrustedChatSender: senderField ? senderField.value as unknown as number : null
        })
        e.currentTarget.reset()
        return false
    }

    // Just pass through the prop onEvent handler
    handleChatRequest(data: SendChat) {
        return this.props.handleChatRequest(data)
    }

    /* display a list of chats and a send area */
    render() {
        // eslint-disable-next-line no-unused-vars
        const { className, noReframe, chats, formProps, untrustedChatSender, handleChatRequest, loading, ...rest } = this.props
        // eslint-disable-next-line no-unused-vars
        const { onSubmit, ...restFormProps } = formProps || {}
        // To ignore the passed-in onSubmit for now
        return (
            <div className={`${className} ${styles.chat}`} {...rest}>
                {noReframe && (untrustedChatSender ? (
                    <div className={styles['send-area']}>
                        <form onSubmit={this.handleSubmission} {...restFormProps}>
                            <TextField required inputProps={{ maxLength: 250 }} name="chat-message" className={styles['message-field']} label='Chat Message' />
                            <div>
                                <input type='hidden' name="untrusted-chat-sender" value={untrustedChatSender} />
                                <Button type='submit' size='large' color='primary' className={styles.send}>Chat</Button>
                            </div>
                        </form>
                    </div>
                ) : null
                )} {/* Send only if no iframe*/}
                {!noReframe ? <FChat /> :
                    chats && <>
                        <section className={styles['chat-messages-area']}>
                            {loading && <>
                                {Array(10).map((_, index) => (<Skeleton key={index}>{'...................'}</Skeleton>))}
                            </>}
                            {!loading && chats.map((chat) => (
                                <ChatMessage className={styles['chat-message']} key={chat.id} by={chat.by} datetime={chat.datetime}>{chat.message}</ChatMessage>
                            ))}
                        </section>
                        <small style={{ color: 'lightgray' }}>{chats.length} chats found.</small>
                    </>
                }
            </div>
        )
    }
}

export default Chat
