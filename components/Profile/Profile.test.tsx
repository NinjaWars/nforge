import { ThemeProvider } from '@material-ui/styles'
import mockPerson from 'mocks/mockPerson'
import ReactDOM from 'react-dom'
import theme from 'theme'
import Profile from './Profile'

describe('<Profile />', () => {
    it('renders the Profile area', () => {
        const div = document.createElement('div')
        ReactDOM.render(<ThemeProvider theme={theme}>
            <Profile person={mockPerson} />
        </ThemeProvider>, div)
        ReactDOM.unmountComponentAtNode(div)
    })
})
