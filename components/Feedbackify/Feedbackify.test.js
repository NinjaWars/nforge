import { fireEvent, render, screen, act } from '@testing-library/react';
import { createRoot } from 'react-dom/client'
import Feedbackify from './Feedbackify'
import { composeStory } from '@storybook/react';
import Meta, { FeedbackifyBasic } from './Feedbackify.stories';

const BasicStory = composeStory(FeedbackifyBasic, Meta)

describe('<Feedbackify />', () => {
    it('renders a feedback area', () => {
        const div = document.createElement('div')
        const root = createRoot(div)
        act(() => {
            root.render(<Feedbackify up={44} down={23} />)
            root.render(<Feedbackify up={0} down={1} />)
            root.render(<Feedbackify up={5} down={0} />)
            root.render(<Feedbackify up={0} down={0} />)
            root.render(<Feedbackify up={9999} down={9999} />)
            root.unmount()
        })
    })

    it('can display the basic story', () => {
        render(<BasicStory />)
        expect(screen.getByLabelText('arrow-up')).toBeInTheDocument()
        expect(screen.getByLabelText('arrow-down')).toBeInTheDocument()
        expect(screen.getAllByRole('button').length).toBe(2)
    })
})
