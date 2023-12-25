import { createRoot } from 'react-dom/client'
import { default as Search, SearchCompact } from './Search'

describe('<Search />', () => {
    it('renders a search field', () => {
        const div = document.createElement('div')
        const root = createRoot(div)
        root.render(<Search />)
        root.unmount()
    })
})

describe('<SearchCompact />', () => {
    it('renders a search icon, that can expand into a search', () => {
        const div = document.createElement('div')
        const root = createRoot(div)
        root.render(<SearchCompact />)
        root.unmount()
    })
})
