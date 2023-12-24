/* eslint-disable react/jsx-no-target-blank */
import styles from './reframe.module.css'

interface ReframeProps{
    src: string,
    title: string,
    className?: string,
}

/**
 * Pass through source urls to the rest of the site via iframe
 * @param {*} props
 */
const Reframe = ({ src, title = 'Core', className, ...rest }: ReframeProps) => {
    return (
        <iframe className={`${styles.reframe} ${className}`} frameBorder='0' title={title} name="main" src={src} {...rest}>
            {/* Note the the frameBorder attribute is apparently case sensitive in some versions of ie  */}
            <a href={src} target='_blank' rel='noopener'>Content</a> unable to be loaded.
        </iframe>
    )
}

export default Reframe
