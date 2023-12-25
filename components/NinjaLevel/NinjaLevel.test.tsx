import ReactDOM from 'react-dom'
import NinjaLevel from './NinjaLevel'

describe('<NinjaLevel />', () => {
    it('renders the NinjaLevel area', () => {
        const div = document.createElement('div')
        const root = ReactDOM.createRoot(div).render(<NinjaLevel level={99} />)
        root.unmount(div)
    })
})
