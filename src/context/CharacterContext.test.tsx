import { CharacterProvider, useCharacter } from './CharacterContext'
import ReactDOM from 'react-dom'
import { render, screen } from '@testing-library/react'
import mockCharacter from 'data/mockCharacter'
import { act } from 'react-dom/test-utils'

describe('<CharacterContext />', () => {
    // Simple test to display a user in a context provider
    const CharacterRenderer = () => {
        const { loading, ninja } = useCharacter()
        return (
            <>
                loading: {loading}, ninja identity: {ninja?.identity}
            </>
        )
    }
    it('renders a mock user in context', () => {
        const div = document.createElement('div')
        act(() => {
            ReactDOM.render(
                <>
                    <CharacterProvider
                        value={{ loading: false, ninja: mockCharacter }} mock={true}
                    >
                        <CharacterRenderer />
                    </CharacterProvider>
                </>,
                div
            )
        })
        ReactDOM.unmountComponentAtNode(div)
    })
    it('displays a mock user to the screen', () => {
        act(() => {
            render(
                <CharacterProvider value={{ loading: false, ninja: mockCharacter }} mock={true}>
                    <CharacterRenderer />
                </CharacterProvider>
            )
        })
        expect(screen.getByText(/Wash/i)).toBeTruthy()
    })
})
