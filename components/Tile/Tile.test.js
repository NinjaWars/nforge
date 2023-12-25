import ReactDOM from 'react-dom'
import { default as Tile } from './Tile'

describe('<Tile />', () => {
    it('renders a site tile area', () => {
        const div = document.createElement('div')
        const root = ReactDOM.createRoot(div).render(<Tile>No content</Tile>)
        root.unmount(div)
    })
})
