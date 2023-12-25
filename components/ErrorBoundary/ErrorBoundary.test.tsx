import { fireEvent, render, screen, act } from '@testing-library/react';
import { createRoot } from 'react-dom/client'
import ErrorBoundary from './ErrorBoundary'
import { composeStory } from '@storybook/react';
import Meta, { Basic } from './ErrorBoundary.stories';
const BasicStory = composeStory(Basic, Meta)

describe('<ErrorBoundary />', () => {
    it('renders the ErrorBoundary area', () => {
        const div = document.createElement('div')
        const root = createRoot(div)
        root.render(<ErrorBoundary areaName='test of error boundary'><p>Some content</p></ErrorBoundary>)
        root.unmount()
    })
    it('renders the ErrorBoundary area', () => {
        render(<BasicStory />)
        expect(screen.getByText(/Error/i)).toBeInTheDocument()
    })
})
