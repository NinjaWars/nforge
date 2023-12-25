import logo from './images/nw_bamboo_logo_soft.png'
import Image from 'next/image'

interface ILogoProps {
    className?: string
}

const styles = {
    logo: {
        display: 'inline-block',
    },
}

/**
 * Static public logo component
 */
const Logo = ({ className }: ILogoProps) => {
    return (
        <div className={className} style={styles.logo}>
            <Image src={logo} alt="NinjaWars" width={296} height={150} />
        </div>
    )
}

export default Logo
