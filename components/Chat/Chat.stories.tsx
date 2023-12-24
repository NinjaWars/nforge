import { useState } from 'react'
import type { Meta } from '@storybook/react'
import { Button } from '@material-ui/core'

// eslint-disable-next-line no-unused-vars
//import styles from '../../stories/story.module.css'
import Chat, { ChatProps, SChatMessage, SendChat } from './Chat'
import ChatMessage from './ChatMessage'
import Tile from '../Tile/Tile'
import mockChats from '@/data/mockChats.json'
import mockProfile from '@/data/mockProfile.json'
import SInfo from '../../stories/components/SInfo'

const meta: Meta = {
    title: 'Components/Chat',
    argTypes: { onClick: { action: 'clicked' } },
}

/* TODO: make this a storybook action later */
const log = (msg: string) => {
    console.log(msg)
}

export const ChatMessageRawList = () => (
    <>
        {[...mockChats].map((chat, index) => (
            <ChatMessage key={index} by={chat.by} datetime={chat.datetime}>
                {chat.message}
            </ChatMessage>
        ))}
    </>
)

const mockChat = {
    id: 999999,
    by: 'storybook_spam_adder',
    message: 'some message with fake id: ' + 999999,
    datetime: new Date().toUTCString(),
}

// Utility to add lots of chats
const addLotsOfChats = (chatsL: SChatMessage[]): SChatMessage[] => {
    for (let i = 0; i < 6; i++) {
        const fakeId = parseInt(chatsL[chatsL.length - 1].id as string) + i
        chatsL.unshift({
            ...mockChat,
            ...{
                overriding: true,
                id: fakeId,
                by: 'ninja_spammer',
                message: 'some message with fake id: ' + fakeId,
                datetime: new Date().toUTCString(),
            },
        })
    }
    return chatsL
}

/** Fake the server-side information for a chat */
const decorateChat = (chat: SendChat, username: string, datetime: string, id: number) => {
    return ({
        ...chat,
        by: username,
        datetime: datetime,
        id
    })

}

/**
 * Quick state wrapper component to add a lot of chat data
 */
const ChatDataAdder = ({ chats, ...rest }: ChatProps) => {
    const [moreChats, setMoreChats] = useState(chats)
    const onClick = () => {
        setMoreChats(addLotsOfChats(moreChats))
    }
    return (
        <>
            <Button color="primary" variant="contained" onClick={onClick}>
                Story: Add lots of Chats
            </Button>
            <Chat chats={moreChats} {...rest} />
        </>
    )
}

export const withStartingChats = (args: any) => {
    const chats = [...mockChats]
    // Display the result of the chat request in the actions area
    const handleChatRequest = (data: SendChat) => {
        log(`a chat send was requested`)
        log(`Chat data requested was: ${JSON.stringify(data)}`)
    }
    return (
        <>
            <SInfo>This story doesn&apos;t accept chat sending</SInfo>
            <Chat
                chats={chats}
                handleChatRequest={handleChatRequest}
                untrustedChatSender={mockProfile.userId}
                formProps={{
                    action: '#',
                    type: 'POST',
                }}
                {...args}
            />
        </>
    )
}
withStartingChats.args = {
    loading: false,
    reFrame: false,
}

/** Provide chat and allow state to be added by the send component */
const EmptyToFull = ({ chats, ...rest }: any) => {
    const [finalChats, setFinalChats] = useState<SChatMessage[]>(chats)
    const handleChatRequest = (data: SendChat) => {
        log(`Chat data sent was: ${JSON.stringify(data)}`)
        const decoratedChat = decorateChat(data, mockChat.by, mockChat.datetime, Math.ceil(Math.random() * 9999999))
        finalChats.unshift(decoratedChat)
        setFinalChats(finalChats)
    }
    return (
        <>
            <Chat
                chats={finalChats}
                handleChatRequest={handleChatRequest}
                {...rest}
            />
        </>
    )
}

export const canAddChats = (args: any) => {
    return (
        <EmptyToFull
            {...args}
        />
    )
}
canAddChats.args = {
    loading: false,
    noReframe: false,
    chats: mockChats.slice(2) as SChatMessage[],
    untrustedChatSender: mockProfile.userId,
    formProps: {
        action: '#',
        type: 'POST',
    },
}

export const addMassOfChats = (args: any) => {
    const chats = [...mockChats]
    // Display the result of the chat request in the actions area
    const handleChatRequest = (data: SendChat) => {
        log(
            `Chat data from long chat requested was: ${JSON.stringify(data)}`
        )
        return true
    }
    return (
        <>
            <ChatDataAdder
                chats={chats}
                handleChatRequest={handleChatRequest}
                untrustedChatSender={mockProfile.userId}
                formProps={{
                    action: '#',
                    type: 'POST',
                }}
                {...args}
            />
        </>
    )
}
addMassOfChats.args = {
    noReframe: false,
    loading: false,
}

export const withSendAddOfChatState = (args: any) => {
    // Use a state component to wrap state to enable sending more.
    // eslint-disable-next-line react/prop-types
    const ChatsSendable = ({ chats: initialChats, handleChatRequest: handleChatRequestOld, ...rest }: ChatProps) => {
        const [mChats, setMChats] = useState(initialChats)
        const handleChatRequest = (newChat: SendChat) => {
            // Getting the last array element in line's id
            const latestId = mChats[mChats.length - 1].id
            const finalChat = {
                ...newChat,
                by: 'Storybook mock user',
                datetime: new Date().toUTCString(),
                id: parseInt(latestId as string) + 1,
            }
            mChats.unshift(finalChat)
            log('Sent a new chat with message:' + finalChat.message)
            setMChats(mChats)
        }
        return (
            <Chat
                chats={mChats}
                handleChatRequest={handleChatRequest}
                {...rest}
            />
        )
    }
    const chats = mockChats
    return (
        <>
            <ChatsSendable
                chats={chats}
                untrustedChatSender={mockProfile.userId}
                {...args}
            />
        </>
    )
}
withSendAddOfChatState.args = {
    loading: false,
    noReframe: true,
    formProps: {
        action: '#',
        type: 'POST',
    }
}


export const withADarkTileBg = (args: any) => {
    // Display the result of the chat request in the actions area
    const handleChatRequest = (data: SendChat) => {
        log(`a chat send was requested`)
        log(`Chat data requested was: ${JSON.stringify(data)}`)
    }
    return (
        <Tile theme="dark">
            <Chat
                handleChatRequest={handleChatRequest}
                {...args}
            />
        </Tile>
    )
}
withADarkTileBg.args = {
    loading: false,
    noReframe: true,
    mockChats: mockChats,
    formProps: {
        action: '#',
        type: 'POST',
    },
    untrustedChatSender: mockProfile.userId
}


export default meta