import * as ReactDOM from 'react-dom'
import * as Stories from './index.stories'

describe('AccountSummary', () => {
    it('renders without crashing', () => {
        const Story = Stories.Basic
        const div = document.createElement('div')
        const root = ReactDOM.createRoot(div).render(<Story account={{
            email: 'some-email@example.com',
            name: 'Some account name',
            phone: '+15555555555'
        }} className='some-test-class' />, div)
        root.unmount(div);
    })
})