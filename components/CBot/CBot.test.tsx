import ReactDOM from 'react-dom'
import { default as CBot } from './CBot'

describe('<CBot />', () => {
    it('renders a command input field', () => {
        const div = document.createElement('div')
        const root = ReactDOM.createRoot(div).render(<CBot placeholder="type a command" />)
        root.unmount(div)
    })
})
