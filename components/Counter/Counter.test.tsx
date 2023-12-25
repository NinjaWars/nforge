import ReactDOM from 'react-dom'
import Counter from './Counter'

describe('<Counter />', () => {
    it('renders a feedback area', () => {
        const div = document.createElement('div')
        const root = ReactDOM.createRoot(div).render(<Counter count={434} />)
        root.unmount(div)
    })
})
