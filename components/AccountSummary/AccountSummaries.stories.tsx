import { ComponentStory, ComponentMeta } from '@storybook/react'

import AccountSummary from './AccountSummary'


const Meta = {
    title: 'Components/AccountSummary',
    component: AccountSummary,
    decorators: [
    ],
    argTypes: {
        onClick: {
            action: 'Clicked'
        }
    },
} as ComponentMeta<typeof AccountSummary>

export default Meta

const Template: ComponentStory<typeof AccountSummary> = (args: any) => (
    <>
        <AccountSummary {...args} />
    </>
)

export const Basic = Template.bind({})

Basic.args = {
    className: 'AccountSummary-custom',
    account: {
        name: 'George Washington',
        email: 'example@example.com',
        phone: '+15554443333'
    },
}
