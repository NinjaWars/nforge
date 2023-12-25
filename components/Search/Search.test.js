import ReactDOM from 'react-dom'
import { default as Search, SearchCompact } from './Search'

describe('<Search />', () => {
    it('renders a search field', () => {
        const div = document.createElement('div')
        const root = ReactDOM.createRoot(div).render(<Search />, div)
        root.unmount(div)
    })
})

describe('<SearchCompact />', () => {
    it('renders a search icon, that can expand into a search', () => {
        const div = document.createElement('div')
        const root = ReactDOM.createRoot(div).render(<SearchCompact />, div)
        root.unmount(div)
    })
})
