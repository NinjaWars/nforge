import { UserProvider, useUser } from './UserContext'
import ReactDOM from 'react-dom'
import { render, screen } from '@testing-library/react'

describe('<UserContext />', () => {
    // Simple test to display a user in a context provider
    const UserRenderer = () => {
        const { user, loading } = useUser()
        return (
            <>
                loading: {loading}, username: {user?.username}
            </>
        )
    }
    it('renders a mock user in context', () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <>
                <UserProvider
                    value={{ user: { username: 'Bob' }, loading: false }}
                >
                    <UserRenderer />
                </UserProvider>
            </>,
            div
        )
        ReactDOM.unmountComponentAtNode(div)
    })
    it('displays a mock user to the screen', () => {
        render(
            <UserProvider value={{ user: { username: 'Bob' }, loading: false }}>
                <UserRenderer />
            </UserProvider>
        )
        expect(screen.getByText(/Bob/i)).toBeTruthy()
    })
})
