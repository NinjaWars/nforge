import { Button, TextField } from '@material-ui/core'
import { ComponentMeta } from '@storybook/react'
import { Tile } from '../components'


export default {
    title: 'General',
    component: Tile,
} as ComponentMeta<typeof Tile>

// Since this file doesn't use args destructuring, don't use this file as a template for others

const TemplateL = (args: any) => <>
    <Tile theme="dark">
        <Button variant="outlined">
            LOGIN
        </Button>{' '}
        <Button variant="outlined">
            SIGNUP
        </Button>{' '}
        <a href="#forgot">Forgot password?</a>
    </Tile>
</>

export const LoginSignup = TemplateL.bind({})

const TemplateT = (args: any) =>
    <>
        <div>
            <TextField label="Email or Ninja Name" margin="normal" />{' '}
        </div>
        <div>
            <TextField
                label="Password"
                type="password"
                autoComplete="current-password"
                margin="normal"
            />
        </div>
    </>
export const TextFieldStandard = TemplateT.bind({})

const TemplateTD = (args: any) =>
    <Tile theme="dark">
        <div>
            <TextField label="Email or Ninja Name" margin="normal" />{' '}
        </div>
        <div>
            <TextField
                label="Password"
                type="password"
                autoComplete="current-password"
                margin="normal"
            />
        </div>
    </Tile>

export const TextFieldDarkTheme = TemplateTD.bind({})

const TemplateSignupMockup = (args: any) =>
    <Tile theme="dark">
        <div>
            <TextField label="Email or Ninja Name" margin="normal" />{' '}
        </div>
        <div>
            <TextField
                label="Password"
                type="password"
                autoComplete="current-password"
                margin="normal"
            />
        </div>
        <div>
            <Button type="submit">LOGIN</Button>
        </div>
        <div>
            <a href="#assistance">Forgot password?</a>
        </div>
    </Tile>

export const TextFieldSignupMockup = TemplateSignupMockup.bind({})