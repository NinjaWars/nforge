import { NinjaClassOption, SelfStatus } from 'components'
import mockCharacter from '@/data/mockCharacter'
import { CharacterProvider, useCharacter } from './CharacterContext'

const storyConfig = {
    title: 'Context/CharacterContext',
    component: CharacterProvider,
    decorators: [],
}

export default storyConfig;

const CharacterRenderer = () => {
    const { loading, ninja } = useCharacter()
    const mergedStats = {
        level: 55,
        class: 'viper' as NinjaClassOption,
        classDisplay: 'Viper' as NinjaClassOption,
        kills: 3,
        ...ninja,
        totalHealth: ninja?.totalHealth(),

    }
    return (
        <>
            Loading: {loading ? <progress /> : 'Done'}
            {ninja && <SelfStatus loading={loading} stats={mergedStats} />}
        </>
    )
}


export const MockedContext = (args: any) => {
    const { loading, ninja, ...rest } = args
    return (
        <>
            <CharacterProvider value={{ loading: loading, ninja }}>
                <CharacterRenderer {...rest} />
            </CharacterProvider>
        </>
    )
}

MockedContext.args = {
    loading: false,
    character: mockCharacter,
}
