import { createRoot } from 'react-dom/client'
import { default as CBot } from './CBot'

describe('<CBot />', () => {
    it('renders a command input field', () => {
        const div = document.createElement('div')
        const root = createRoot(div)
        root.render(<CBot placeholder="type a command" />)
        root.unmount()
    })
})
