import ReactDOM from 'react-dom'
import { default as Chat } from './Chat'

describe('<Chat />', () => {
    const defaultArgs = {
        noReframe: true,
        handleChatRequest: () => { },
        formProps: {
            onSubmit: () => { }
        },
        loading: false,
    }
    it('renders a list of chat messages and the chat input', () => {
        const initialDate = new Date()

        const chats = [
            { by: 'James', message: 'Some random chat' },
            { by: 'William', message: 'Some random chat' },
            { by: 'James', message: 'Some random chat' },
            { by: 'William', message: 'Some random chat' },
            { by: 'James', message: 'Some random chat' },
            { by: 'William', message: 'Some random chat' },
        ]
        let i = 1
        const chats2 = chats.map((entry) => {
            initialDate.setMinutes(initialDate.getMinutes() + i)
            i++
            return {
                ...entry,
                datetime: initialDate,
                id: i
            }
        })
        const div = document.createElement('div')
        const root = ReactDOM.createRoot(div).render(<Chat chats={chats2} {...defaultArgs} />)
        root.unmount(div)
    })
})
