import { Button, ButtonProps } from '@material-ui/core'
import styles from './counter.module.css'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'

interface CounterProps extends ButtonProps{
    count: number,
    className?: string,
    [key:string]: any,
}

/**
 * Simple upvoter
 */
const Counter = ({ count, className, ...rest }:CounterProps)=>{
    return (
        <Button className={`${styles.counter} ${className}`} {...rest}>
            {count}
            {' '}
            <Icon icon={faArrowUp} />
        </Button>
    )
}

export default Counter