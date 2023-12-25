import { Tile } from '..'

const tileStory = {
    title: 'Components/Tile',
    argTypes: {
        theme: { control: { type: 'select', options: ['light', 'dark'] } },
    },
}

export default tileStory;

export const basic = (args) => (
    <>
        <Tile {...args}>{args.theme} themed</Tile>
    </>
)
basic.args = {
    theme: 'light',
    whitespace: true,
}

export const withAlternatingThemes = (args) => (
    <>
        <Tile {...args}>{args.theme} themed</Tile>
        <Tile {...args} theme="dark">
            Dark themed
        </Tile>
        <Tile {...args} theme="light">
            Light themed
        </Tile>
    </>
)

withAlternatingThemes.args = basic.args
