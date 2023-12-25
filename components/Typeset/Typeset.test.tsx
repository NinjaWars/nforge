import { ThemeProvider } from '@material-ui/core/styles'
import ReactDOM from 'react-dom'
import theme from '@/theme'
import Typeset from './Typeset'

describe('<Typeset />', () => {
    it('renders the Typeset area', () => {
        const div = document.createElement('div')
        const root = ReactDOM.createRoot(div).render(<ThemeProvider theme={theme}><Typeset><div>Some random contents</div><div>Here are some more</div></Typeset></ThemeProvider>)
        root.unmount(div)
    })
})
