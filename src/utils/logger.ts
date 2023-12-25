type LoggerEntity =
    | typeof console
    | {
          log: () => void
          info: () => void
          error: () => void
          warn: () => void
          debug: () => void
      }

/**
 *
 * @usage logger().log('Some log message')
 * @returns an object to log against
 */
const logger = (): LoggerEntity => {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        return console
    } else {
        return {
            log: () => {},
            info: () => {},
            error: () => {},
            warn: () => {},
            debug: () => {},
        }
    }
}

export default logger
