import { createRoot } from 'react-dom/client'
import Counter from './Counter'

describe('<Counter />', () => {
    it('renders a feedback area', () => {
        const div = document.createElement('div')
        const root = createRoot(div)
        root.render(<Counter count={434} />)
        root.unmount()
    })
})
