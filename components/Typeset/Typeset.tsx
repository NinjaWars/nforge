import { Theme, useMediaQuery } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import { ReactChild, ReactFragment, ReactPortal } from 'react'

export type TypesetVariant = '1fr 2fr' | '2fr 1fr' | '1fr 1fr 1fr' | '1fr 1fr' | '1fr 1fr 1fr 1fr';


interface TypesetProps {
    className?: string,
    children: ReactChild | ReactFragment | ReactPortal,
    variant?: TypesetVariant,
    style?: React.CSSProperties | undefined,
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {},
    container: {
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridRowGap: '0.5em',
        gridColumnGap: '1em',
        [theme?.breakpoints?.up('md') ?? 'ignore']: {
            gridTemplateColumns: '1fr 2fr',
        },
    }
}))

/**
 * Allow for simple typesetting like:
 * [_][____]
 * [_][_][_]
 * [____][_]
 * [__][__]
 * [_][_][_][_]
 */
const Typeset: React.FC<TypesetProps> = ({ className, children, variant = '1fr 2fr', style = {}, ...rest }: TypesetProps) => {
    const classes = useStyles()
    const matches = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'))
    // Provide extra styles for certain breakpoints only, and provide it dynamically.
    const extraStyle = matches ? {
        ...style,
        gridTemplateColumns: variant
    } : style
    return (
        <div className={`typeset-area ${classes.container} ${className}`} style={extraStyle} {...rest}>
            {children}
        </div>
    )
}

export default Typeset
