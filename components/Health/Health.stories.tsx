
import { Tile, Health } from '..'
import { Meta } from '@storybook/react'
import SInfo from '../../stories/components/SInfo'

export default {
    title: 'Components/Health',
} as Meta


export const withSmallFraction = (args: any) => {
    return (
        <>
            <SInfo><h1>Healthbar on White:</h1></SInfo>
            <div>
                <Health className='Health-custom' {...args} />
            </div>
        </>
    )
}

withSmallFraction.args = {
    char: {
        health: 44,
        totalHealth: 450
    },
    health: 44,
    totalHealth: 450,
    height: '1rem'
}

export const onDark = (args: any) => {
    return (
        <>
            <SInfo><h1>Healthbar on dark background:</h1></SInfo>
            <div>
                <Tile theme='dark'>
                    <Health className='Health-custom' {...args} />
                </Tile>
            </div>
        </>
    )
}
onDark.args = {
    health: 44,
    totalHealth: 450,
    char: {
        health: 44,
        totalHealth: 450
    },
    height: '1rem'
}
