import { createRoot } from 'react-dom/client'
import NinjaClass from './NinjaClass'

describe('<NinjaClass />', () => {
    it('renders the NinjaClass area', () => {
        const div = document.createElement('div')
        const root = createRoot(div).render(<NinjaClass ninjaClass='tiger'>Tiger</NinjaClass>)
    })
})
