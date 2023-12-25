import { createRoot } from 'react-dom/client'
import NinjaLevel from './NinjaLevel'

describe('<NinjaLevel />', () => {
    it('renders the NinjaLevel area', () => {
        const div = document.createElement('div')
        const root = createRoot(div).render(<NinjaLevel level={99} />)
        root.unmount()
    })
})
