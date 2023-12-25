import ReactDOM from 'react-dom'
import { default as Reframe } from './Reframe'

const config = {
    remote: 'https://localhost/',
}

describe('<Reframe />', () => {
    it('renders an iframe of a url', () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <Reframe title="Fight" src={config.remote + 'fight'} />,
            div
        )
        ReactDOM.unmountComponentAtNode(div)
    })
})
