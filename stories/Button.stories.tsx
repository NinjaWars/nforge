import { Button } from '@material-ui/core'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Tile } from '../components'


export default {
    title: 'Intro/Button',
    component: Button,
    argTypes: {
        backgroundColorNotApplicableExample: { control: 'color' }, // This is actually just to make it simple for
        onClick: {
            action: 'Button clicked'
        },
        variant: {
            options: ['outlined', 'contained', 'text'],
            control: { type: 'radio' }
        }
    },
} as ComponentMeta<typeof Button>

/**
  * @param {any} args Dynamic controls for the component
  * @returns { ReactElement } Button rendered
  */
const Template: ComponentStory<typeof Button> = (args) => <>
    <Button {...args} />
</>

export const Basic = Template.bind({})
Basic.args = {
    variant: 'outlined',
    disabled: false,
    children: 'Click Me',
    disableElevation: false,
    disableRipple: false,
}

export const Emoji = Template.bind({})
Emoji.args = {
    children: <>
        <span role="img" aria-label="so cool">
            😀 😎 👍 💯
        </span>
    </>
}

export const Disabled = Template.bind({})
Disabled.args = {
    ...Basic.args, // Inherit from the default args and override a select few
    disabled: true,
}

const TemplateTile = ({theme, ...rest}: any) => <Tile theme={theme}>
    <Button {...rest}/>
</Tile>

export const DarkTiled = TemplateTile.bind({
    ...Basic.args,
    theme: 'dark',
})