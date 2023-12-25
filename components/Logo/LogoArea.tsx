import styles from './logoarea.module.css'
import Image from 'next/image'
import svgLogo from './images/shuriken.svg'
import { Box } from '@material-ui/core'
import { PropsWithChildren } from "react";

interface LogoAreaProps {
    className?: string,
    title?: string,
    shrinkable?: Boolean,
}

/**
 * LogoArea for displaying svg plus text tile in a constrained way
 * @param {*} props
 */
const LogoArea = ({ className, shrinkable, title }: PropsWithChildren<LogoAreaProps>) => {
    const titleText = (
        <>{' '}<span className={styles.title}>{title}</span></>
    )
    return (
        <>
            <div className={`${styles.logoarea} ${className}`} >
                <Image src={svgLogo} alt='✵' width={32} height={32} className={styles.logo} />
                {shrinkable ?
                    <Box component="span" display={{ xs: 'none', md: 'inline' }}>{titleText}</Box> :
                    titleText
                }
            </div>
        </>
    )
}

export default LogoArea
