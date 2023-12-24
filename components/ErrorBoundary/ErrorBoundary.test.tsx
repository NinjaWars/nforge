import ReactDOM from 'react-dom'
import ErrorBoundary from './ErrorBoundary'

describe('<ErrorBoundary />', () => {
    it('renders the ErrorBoundary area', () => {
        const div = document.createElement('div')
        ReactDOM.render(<ErrorBoundary areaName='test of error boundary'><p>Some content</p></ErrorBoundary>, div)
        ReactDOM.unmountComponentAtNode(div)
    })
})
