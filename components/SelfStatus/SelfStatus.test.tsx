import { NinjaClassOption } from '@/components/NinjaClass'
import { createRoot } from 'react-dom/client'
import SelfStatus from './SelfStatus'

describe('<SelfStatus />', () => {
    const mockSelfStats = {
        class: 'tiger' as NinjaClassOption,
        classDisplay: 'tiger' as NinjaClassOption,
        level: 45,
        kills: 2354,
        health: 99,
        totalHealth: 100
    }
    it('renders the SelfStatus area', () => {
        const div = document.createElement('div')
        const root = createRoot(div).render(<SelfStatus stats={mockSelfStats} requirement={55} />)
        root.unmount()
    })
})
