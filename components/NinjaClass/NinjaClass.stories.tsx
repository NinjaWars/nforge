import NinjaClass, { NinjaClassList, NinjaClassOption } from './NinjaClass'

const NinjaClassStory = {
    title: 'Components/NinjaClass',
    decorators: [
    ]
}

export default NinjaClassStory;

export const NinjaClassAll = (args: any) => {
    return (
        <>
            {args.classes.map((nin:NinjaClassOption)=>(
                <p key={nin}>
                    <NinjaClass ninjaClass={nin}>{nin}</NinjaClass>
                </p>
            ))}

        </>
    )
}

NinjaClassAll.args = {
    classes: NinjaClassList
}


export const NinjaClassBasic = (args: any) => {
    return (
        <>
            <NinjaClass {...args}>{args.ninjaClass}</NinjaClass>
        </>
    )
}

NinjaClassBasic.args = {
    ninjaClass: 'crane' as NinjaClassOption,
    className: 'custom',
}

NinjaClassBasic.argTypes = {
    ninjaClass: { control: { type: "select", options: NinjaClassList } },
}



