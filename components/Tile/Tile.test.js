import { createRoot } from 'react-dom/client'
import { default as Tile } from './Tile'

describe('<Tile />', () => {
    it('renders a site tile area', () => {
        const div = document.createElement('div')
        const root = createRoot(div)
        root.render(<Tile>No content</Tile>)
        root.unmount()
    })
})
