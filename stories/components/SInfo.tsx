import { Alert, AlertTitle } from '@material-ui/lab'

interface SInfoProps {
    className?: string,
    children: React.ReactNode,
    style?: Record<string, string>,
}

/**
 * Simple component to notate story info that is obviously out of flow
 */
const SInfo = ({ className, children, ...rest }: SInfoProps) => {
    // eslint-disable-next-line no-unused-vars
    return (
        <Alert className={`sinfo`} severity="info" {...rest}>
            <AlertTitle>Story Info</AlertTitle>
            {children}
        </Alert>
    )
}

export default SInfo
