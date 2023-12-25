import { createRoot } from 'react-dom/client'
import { default as Reframe } from './Reframe'

const config = {
    remote: 'https://localhost/',
}

describe('<Reframe />', () => {
    it('renders an iframe of a url', () => {
        const div = document.createElement('div')
        const root = createRoot(div)
        root.render(<Reframe title="Fight" src={config.remote + 'fight'} />)
        root.unmount()
    })
})
