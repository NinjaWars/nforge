import { faEnvelope, faPhone, faSignature } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'

interface Account {
    email: string
    name?: string
    phone?: string
}

interface AccountSummaryProps {
    className?: string
    account: Account
}

interface Session {
    attributes?: {
        name?: string,
        email?: string,
        phone_number?: string,
    }
}

/**
 * Convert a cognito user to account info
 * @param session
 * @returns
 */
export const convertToAccount = (session: Session): Account => {
    return {
        name: session?.attributes?.name,
        email: session?.attributes?.email as string,
        phone: session?.attributes?.phone_number,
    }
}

/**
 * Display Info about an account, given a cognito account
 */
const AccountSummary = ({
    className,
    account,
    ...rest
}: AccountSummaryProps) => {
    const redactPhone = (phone: string | undefined) => {
        return phone ? phone.slice(-3).padStart(10, '*') : ''
    }
    return (
        <div className={className} {...rest}>
            <ul>
                <li><Icon icon={faSignature} /> <strong>Name:</strong> {account?.name}</li>
                <li><Icon icon={faEnvelope} /> <strong>Email:</strong> {account?.email}</li>
                <li><Icon icon={faPhone} /> <strong>Phone:</strong> {redactPhone(account?.phone)}</li>
            </ul>
        </div>
    )
}

export default AccountSummary
