import logo from './images/nw_bamboo_logo_soft.png'

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
            <img src={logo} alt="NinjaWars" />
        </div>
    )
}

export default Logo
