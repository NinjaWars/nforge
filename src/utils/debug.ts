
const localStorageDebugKey = 'debug'
const checkForLocalStorageDebugKey = () => {
    if (typeof window !== 'undefined') {
        return window.localStorage.getItem(localStorageDebugKey)
    }
    return null
}

/**
 * Check whether in a debuggings mode
 * @returns boolean
 */
export const canDebug = () => {
    let urlDebug = false
    if (window && window.location && window.location.search) {
        const urlParams = new URLSearchParams(window.location.search)
        const debug = urlParams.get('debug')
        urlDebug = debug === '1'
    }
    return (
        (typeof process !== 'undefined' &&
            typeof process.env !== 'undefined' &&
            process.env.NODE_ENV === 'development') ||
        urlDebug ||
        (checkForLocalStorageDebugKey() === '1')
    )
}
