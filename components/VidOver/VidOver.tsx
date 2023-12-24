/* eslint jsx-a11y/media-has-caption: 0 */
import { makeStyles } from '@material-ui/core/styles'
import styles from './video-overlay.module.css'

interface VidOverProps extends React.ComponentPropsWithoutRef<"div"> {
    sourcePairs: { source: string, type: string }[],
    poster: string,
    className?: string,
    autoPlay: boolean,
    muted: boolean,
    children: React.ReactNode,
}

// Currently using the css module for all these
const useStyles = makeStyles(theme=>({
    root: {}
}))

/**
 * A video overlay area to put a video background with content on top.
 * @param {*} props
 */
const VidOver = ({ sourcePairs, poster, className, children, ...rest }: VidOverProps) => {
    const classes = useStyles()
    return ( // eslint-disable-next-line jsx-a11y/media-has-caption
        <div className={`${styles.banner} ${classes.root} ${className}`} {...rest}>
            <video autoPlay={rest.autoPlay ? rest.autoPlay : false} loop muted={rest.muted ? rest.muted : true} poster={poster} className={styles['banner-video']}>
                {sourcePairs && sourcePairs.map((vid) => (
                    <source key={vid.source} src={vid.source} type={vid.type} />
                ))}
                Cannot play video.
            </video>
            {children}
        </div>
    )
}

export default VidOver
