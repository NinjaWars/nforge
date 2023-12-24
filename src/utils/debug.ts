import config from 'config'

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
        config.debug
    )
}
