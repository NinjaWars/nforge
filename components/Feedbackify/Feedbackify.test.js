import ReactDOM from 'react-dom'
import Feedbackify from './Feedbackify'

describe('<Feedbackify />', () => {
    it('renders a feedback area', () => {
        const div = document.createElement('div')
        const root = ReactDOM.createRoot(div).render(<Feedbackify up={44} down={23} />)
        root.unmount(div)
    })
})
