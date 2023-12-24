import { ThemeProvider } from '@material-ui/styles'
import ReactDOM from 'react-dom'
import theme from 'theme'
import Typeset from './Typeset'

describe('<Typeset />', () => {
    it('renders the Typeset area', () => {
        const div = document.createElement('div')
        ReactDOM.render(<ThemeProvider theme={theme}><Typeset><div>Some random contents</div><div>Here are some more</div></Typeset></ThemeProvider>, div)
        ReactDOM.unmountComponentAtNode(div)
    })
})
