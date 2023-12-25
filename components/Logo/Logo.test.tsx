import { createRoot } from 'react-dom/client'
import Logo from './Logo'

describe('<Logo />', () => {
    it('renders the Logo area', () => {
        const div = document.createElement('div')
        const root = createRoot(div)
        root.render(<Logo />)
        root.unmount(div)
    })
})
