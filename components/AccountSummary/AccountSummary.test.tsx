import { createRoot } from 'react-dom/client'
import AccountSummary from './AccountSummary'

import { composeStory } from '@storybook/react';
import Meta, { Basic } from './AccountSummaries.stories';
const BasicStory = composeStory(Basic, Meta)

describe('<AccountSummary />', () => {
    it('renders the AccountSummary area', () => {
        const div = document.createElement('div')
        const root = createRoot(div)
        root.render(<AccountSummary account={{
            email: 'example@example.com',
            name: 'George Washington III',
            phone: '+15556665555',
        }} />)
        root.unmount()
    })

    it('renders the story without crashing', () => {
        const div = document.createElement('div')
        const root = createRoot(div)
        root.render(<BasicStory />)
        root.unmount();
    })
})
