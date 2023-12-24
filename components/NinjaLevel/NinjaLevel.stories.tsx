import NinjaLevel from './NinjaLevel'

export default {
    title: 'Components/NinjaLevel',
    decorators: [],
}

export const NinjaLevelBasic = (args: any) => {
    return (
        <>
            <NinjaLevel {...args} />
        </>
    )
}

NinjaLevelBasic.args = {
    className: 'NinjaLevel-custom',
    level: 45,
}

export const NinjaLevelAll = (args: any) => {
    // eslint-disable-next-line no-unused-vars
    const { level, ...rest } = args
    return (
        <>
            {args.levels.map((lLevel: number) => (
                <div key={level}>
                    <NinjaLevel level={lLevel} {...rest} />
                </div>
            ))}
        </>
    )
}

NinjaLevelAll.args = {
    className: 'NinjaLevel-custom',
    levels: [
        ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        ...Array(71)
            .fill(0)
            .map((_, i) => i * 5),
    ],
}
