import styles from './logoarea.module.css'
import Image from 'next/image'
import svgLogo from './images/shuriken.svg'
import Hidden from '@material-ui/core/Hidden'

interface LogoAreaProps {
    className?: string,
    title?: string,
    shrinkable?: Boolean,
}

/**
 * LogoArea for displaying svg plus text tile in a constrained way
 * @param {*} props
 */
const LogoArea = ({ className, shrinkable, title }: LogoAreaProps) => {
    const titleText = (
        <>
            {' '}<span className={styles.title}>{title}</span>
        </>
    )
    return (
        <>
            <div className={`${styles.logoarea} ${className}`} >
                <Image src={svgLogo} alt='✵' width={32} height={32} className={styles.logo} />
                {shrinkable ?
                    <Hidden mdDown>{titleText}</Hidden> :
                    titleText
                }
            </div>
        </>
    )
}

export default LogoArea
