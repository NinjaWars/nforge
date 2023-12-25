import { createRoot } from 'react-dom/client'
import { default as ChatMessage } from './ChatMessage'

describe('<ChatMessage />', () => {
    it('renders a single chat message with by and datetime', () => {
        const div = document.createElement('div')
        const root = createRoot(div)
        root.render(<ChatMessage by={'James'} datetime={new Date()}>
            This would contain an actual message
        </ChatMessage>)
        root.unmount()
    })
})
