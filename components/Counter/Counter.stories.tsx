import { Counter } from '..'
import { useState } from 'react'
import type { Meta } from '@storybook/react';

const CounterState = () => {
    const [count, setCount] = useState(0)
    return (
        <Counter
            count={count}
            onClick={() => {
                setCount(count + 1)
            }}
        />
    )
}

const meta: Meta<typeof Counter> = {
    component: Counter,
    title: 'Components/Counter',
}


export const withNoCounterMemory = () => (
    <Counter count={5} />
)

export const withStateCounter = () => (
    <CounterState />
)

export default meta