import Reframe from '../../components/Reframe/Reframe'

const meta = {
    title: 'Components/Reframe',
}

export default meta

export const withRemoteIntroPage = () => (
    <>
        <Reframe
            src="https://www.ninjawars.net/intro"
            title="The Intro page area"
        />
    </>
)

export const withRemoteFightPage = () => (
    <>
        <Reframe
            src="https://www.ninjawars.net/enemies"
            title="The enemies page"
        />
    </>
)

export const withRemoteNinjaListPage = () => (
    <>
        <Reframe src="https://www.ninjawars.net/list" title="The ninjas list" />
    </>
)
