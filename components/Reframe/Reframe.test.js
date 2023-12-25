import ReactDOM from 'react-dom'
import { default as Reframe } from './Reframe'

const config = {
    remote: 'https://localhost/',
}

describe('<Reframe />', () => {
    it('renders an iframe of a url', () => {
        const div = document.createElement('div')
        const root = ReactDOM.createRoot(div).render(<Reframe title="Fight" src={config.remote + 'fight'} />, div)
        root.unmount(div)
    })
})
