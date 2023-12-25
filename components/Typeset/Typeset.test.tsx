import { ThemeProvider } from '@material-ui/core/styles'
import { createRoot } from 'react-dom/client'
import theme from '@/theme'
import Typeset from './Typeset'

describe('<Typeset />', () => {
    it('renders the Typeset area', () => {
        const div = document.createElement('div')
        const root = createRoot(div)
        root.render(<ThemeProvider theme={theme}><Typeset><div>Some random contents</div><div>Here are some more</div></Typeset></ThemeProvider>)
        root.unmount()
    })
})
