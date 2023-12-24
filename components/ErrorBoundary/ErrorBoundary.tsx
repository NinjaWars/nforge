import { Component } from 'react'
import logger from '@/utils/logger'
import styles from './ErrorBoundary.module.css'

interface ErrorBoundaryProps {
    className?: string,
    children: React.ReactNode,
    areaName: string,
}

/**
 *  An error boundary to catch errors within it without killing the UI
 * @property {string} areaName problem occurred in the [areaName]
 */
class ErrorBoundary extends Component<ErrorBoundaryProps, { hasError: boolean }> {
    constructor(props: ErrorBoundaryProps) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error: any) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true }
    }

    componentDidCatch(error: any, errorInfo: any) {
        // You can also log the error to an error reporting service
        logger().log(error, errorInfo)
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <aside className={styles.errorboundary}>
                <div>
                    <span><svg style={{ width: '1rem', height: '1rem' }} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="exclamation-triangle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="svg-inline--fa fa-exclamation-triangle fa-w-18"><path fill="currentColor" d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path></svg></span>{' '}
                    <strong>A problem occurred in the {this.props.areaName}</strong></div>
                <p>You can try again, go to <a href='/'>the homepage</a> or <a href='.'>refresh this page</a>.</p>
            </aside >

        }

        return this.props.children
    }
}

export default ErrorBoundary