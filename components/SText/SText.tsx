import { Skeleton } from "@material-ui/lab"
import { PropsWithChildren } from "react";

interface STextProps{
    children: React.ReactNode,
    loading: boolean,
    p?: number,
}

// Skeletonize the text
const SText = ({ children, loading, p = 0, ...rest }: PropsWithChildren<STextProps>) => {
    return loading ? <Skeleton style={{display:'inline'}} {...rest}>{(p > 0) ? '\u0020'.repeat(p) : ''}{children}</Skeleton> : <>{children}</>
}

export default SText