import { createRoot } from 'react-dom/client'
import Health from './Health'

describe('<Health />', () => {
    it('renders the Health area', () => {
        const div = document.createElement('div')
        const root = createRoot(div)
        root.render(<Health char={{
            health: 50,
            totalHealth: 100
        }} />)
        root.unmount()
    })
})
