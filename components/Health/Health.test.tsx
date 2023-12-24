import ReactDOM from 'react-dom'
import Health from './Health'

describe('<Health />', () => {
    it('renders the Health area', () => {
        const div = document.createElement('div')
        ReactDOM.render(<Health char={{
            health: 50,
            totalHealth: 100
        }} />, div)
        ReactDOM.unmountComponentAtNode(div)
    })
})
