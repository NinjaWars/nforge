import { CharacterProvider, useCharacter } from './CharacterContext'
import ReactDOM from 'react-dom'
import { render, screen } from '@testing-library/react'
import mockCharacter from '@/data/mockCharacter'
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
    xit('renders a mock user in context', () => {
        const div = document.createElement('div')
        const root = ReactDOM.createRoot(div)
        act(() => {
            root.render(

                <CharacterProvider
                        value={{ loading: false, ninja: mockCharacter }} mock={true}
                    >
                        <CharacterRenderer />
                </CharacterProvider>)
            root.unmount(div)
        })
    })
    xit('displays a mock user to the screen', () => {
        const div = document.createElement('div')
        const root = ReactDOM.createRoot(div)
        act(() => {
            root.render(

                <CharacterProvider
                    value={{ loading: false, ninja: mockCharacter }} mock={true}
                >
                    <CharacterRenderer />
                </CharacterProvider>)
        })
        expect(screen.getByText(/Wash/i)).toBeTruthy()
        root.unmount(div)
    })
})
