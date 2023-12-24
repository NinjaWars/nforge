import { Tile, Logo, LogoArea } from '..'

export default {
    title: 'Components/Logo',
    decorators: [
    ],
    component: Logo
}


export const LogoAreaBasic = () => {
    return (
        <>
            <Logo className='Logo-custom' />
        </>
    )
}

export const IconLogoDarkTile = () => (
    <Tile theme="dark">
        <LogoArea title="NinjaWars" />
    </Tile>
)

IconLogoDarkTile.story = {
    name: 'with a dark tile background',
}

export const IconLogoLightTile = () => (
    <Tile theme="light">
        <LogoArea title="NinjaWars" />
    </Tile>
)

IconLogoLightTile.story = {
    name: 'with a light tile background',
}