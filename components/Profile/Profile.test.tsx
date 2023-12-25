import { fireEvent, render, screen, act } from '@testing-library/react';
import { ThemeProvider } from '@material-ui/core/styles'
import mockPerson from '../mocks/mockPerson'
//import { createRoot } from 'react-dom/client'
import theme from '@/theme'
import Profile from './Profile'
import { composeStory } from '@storybook/react';
import Meta, { Basic, Multi } from './Profile.stories';

const BasicStory = composeStory(Basic, Meta)


describe('<Profile />', () => {
    it('renders the basic profile story', () => {
        render(<ThemeProvider theme={theme}><BasicStory /></ThemeProvider>)
        expect(screen.getByText(mockPerson.charName)).toBeInTheDocument()

    })

    it('renders a profile with a username', () => {
        render(<ThemeProvider theme={theme}>
            <Profile person={mockPerson} />
        </ThemeProvider>)
        expect(screen.getByText(mockPerson.charName ?? 'shouldNotMatchaskjsdf')).toBeInTheDocument()

    })


})
