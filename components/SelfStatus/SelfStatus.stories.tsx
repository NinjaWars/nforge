import { NinjaClassOption, SelfStatus } from '..'
import { NinjaClassList } from '..'

export default {
    title: 'Components/SelfStatus',
    decorators: [
    ]
}

const mockSelfStats = {
    class: 'tiger' as NinjaClassOption,
    classDisplay: 'Tiger',
    level: 45,
    kills: 2354,
    health: 44,
    totalHealth: 400,
}

export const SelfStatusBasic = (args: any) => {
    return (
        <>
            <SelfStatus {...args} />
        </>
    )
}

SelfStatusBasic.args = {
    stats: mockSelfStats,
    requirement: 55,
    className: 'SelfStatus-custom',
    loading: false
}

SelfStatusBasic.argTypes = {
    ninjaClass: { control: { type: "select", options: NinjaClassList } },
}