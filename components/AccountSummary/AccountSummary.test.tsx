import ReactDOM from 'react-dom'
import AccountSummary from './AccountSummary'

describe('<AccountSummary />', () => {
    it('renders the AccountSummary area', () => {
        const div = document.createElement('div')
        ReactDOM.render(<AccountSummary account={{
            email: 'example@example.com',
            name: 'George Washington III',
            phone: '+15556665555',
        }} />, div)
        ReactDOM.unmountComponentAtNode(div)
    })
})
