import ReactDOM from 'react-dom'
import ErrorBoundary from './ErrorBoundary'

describe('<ErrorBoundary />', () => {
    it('renders the ErrorBoundary area', () => {
        const div = document.createElement('div')
        const root = ReactDOM.createRoot(div).render(<ErrorBoundary areaName='test of error boundary'><p>Some content</p></ErrorBoundary>)
        root.unmount(div)
    })
})
