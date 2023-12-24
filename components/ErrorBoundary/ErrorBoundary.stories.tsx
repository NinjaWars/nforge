import { Button } from '@material-ui/core'
import { useEffect } from 'react'
import ErrorBoundary from './ErrorBoundary'

export default {
    title: 'Components/ErrorBoundary',
    decorators: [
    ],
    argTypes: {
        onClick: {
            action: 'ErrorBoundary clicked'
        }
    }
}

const ErrorThrower = () => {
    useEffect(() => {
        throw new Error('Sample error triggered errorboundary')
    })
    return (
        <>
            You should not see this, because an error should be thrown.
        </>
    )
}


export const Basic = (args: any) => {
    return (
        <>
            <ErrorBoundary {...args}>
                You should not see this, as an Error will be thrown here: <ErrorThrower />
            </ErrorBoundary>
        </>
    )
}

Basic.args = {
    className: 'ErrorBoundary-custom',
    areaName: 'the name of the area within this errorboundary'
}

export const WithoutError = (args: any) => {
    return (
        <>
            <ErrorBoundary {...args}>
                No Error Success! So will just display <Button variant='contained'>complex children</Button> that are within it.
            </ErrorBoundary>
        </>
    )
}

WithoutError.args = Basic.args