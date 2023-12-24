import { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import styles from './search.module.css'

interface SearchProps{
    className?: string,
}

/**
 * Simple Search box
 * @param {*} props
 */
const Search = ({ className, ...rest }:SearchProps) => {
    return (
        <TextField margin="dense" className={`${styles.search} ${className}`} {...rest} />
    )
}

interface SearchCompactProps {
    className?: string,
}

/**
 * A toggle-expansion wrapper for a search field
 */
export const SearchCompact = ({ className, ...rest }: SearchCompactProps) => {
    const [ expanded, setExpanded ] = useState(false)
    const onClick = (_:React.MouseEvent)=>{
        // Toggle the expansion
        setExpanded(!expanded)
    }
    return (
        <span className={`${styles['search-compact']} ${className}`}>
            {expanded && (
                <span className={`${expanded ? 'visible' : 'invisible'} ${styles['search-field-area']}`}>
                    <Search {...rest} />
                </span>
            )}
            <span className={styles['search-button-area']}>
                <Button onClick={onClick} type='button'>
                    <Icon className={styles.icon} icon={expanded ? faTimes : faSearch}/>
                </Button>
            </span>
        </span>
    )

}

export default Search
