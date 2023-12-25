import { Alert, AlertTitle } from '@material-ui/lab'
import { PropsWithChildren } from "react";

// Excludes children here, though
interface SInfoProps {
    className?: string,
    style?: Record<string, string>,
}

/**
 * Simple component to notate story info that is obviously out of flow
 */
const SInfo = ({ className, children, ...rest }: PropsWithChildren<SInfoProps>) => {
    // eslint-disable-next-line no-unused-vars
    return (
        <Alert className={`sinfo`} severity="info" {...rest}>
            <AlertTitle>Story Info</AlertTitle>
            {children}
        </Alert>
    )
}

export default SInfo
