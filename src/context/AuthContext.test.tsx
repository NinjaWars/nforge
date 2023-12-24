import { AuthProvider, useAuth } from './AuthContext'
import ReactDOM from 'react-dom'
import { render, screen } from '@testing-library/react'
const mockSession = {
    username: 'Ulysses'
}

describe('<AuthContext />', () => {
    // Simple test to display auth results in a context provider
    const AuthInfoRenderer = () => {
        const { loading, session, logout } = useAuth()
        return (
            <>
                loading: {loading}, username: {session?.username}
            </>
        )
    }
    it('renders a mock user in context', () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <>
                <AuthProvider
                    mockAuth={true}
                    value={{ session: mockSession, loading: false }}
                >
                    <AuthInfoRenderer />
                </AuthProvider>
            </>,
            div
        )
        ReactDOM.unmountComponentAtNode(div)
    })
    it('displays a mock user to the screen', () => {
        render(
            <AuthProvider mockAuth={true} value={{ session: mockSession, loading: false }}>
                <AuthInfoRenderer />
            </AuthProvider>
        )
        expect(screen.getByText(/Ulysses/i)).toBeTruthy()
    })
})
