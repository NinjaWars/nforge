import ReactDOM from 'react-dom'
import NinjaClass from './NinjaClass'

describe('<NinjaClass />', () => {
    it('renders the NinjaClass area', () => {
        const div = document.createElement('div')
        const root = ReactDOM.createRoot(div).render(<NinjaClass ninjaClass='tiger'>Tiger</NinjaClass>)
    })
})
