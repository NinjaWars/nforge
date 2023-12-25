import ReactDOM from 'react-dom'
import Logo from './Logo'

describe('<Logo />', () => {
    it('renders the Logo area', () => {
        const div = document.createElement('div')
        const root = ReactDOM.createRoot(div).render(<Logo />)
        root.unmount(div)
    })
})
