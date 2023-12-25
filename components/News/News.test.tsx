import { createRoot } from 'react-dom/client'
import News from './News'
import mockNews from '../models/mockNews'

describe('<News />', () => {
    it('renders the News area', () => {
        const div = document.createElement('div')
        const root = createRoot(div)
        root.render(<News article={mockNews[0]} />)
        root.unmount()
    })
})
