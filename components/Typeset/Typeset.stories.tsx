import { ReactNode } from 'react'
import Typeset from './Typeset'
import { PropsWithChildren } from "react";

const typesetConfig = {
    title: 'Components/Typeset',
    decorators: [
    ],
    argTypes: {
    }
}

export default typesetConfig;

interface ColorProps {
    color: string,
}

export const TypesetBasic = (args: any) => {
    const Color = ({ color, children }: PropsWithChildren<ColorProps>) => (
        <div style={{ background: color }}>
            {children}
        </div>
    )
    return (
        <>
            <Typeset {...args}>
                <Color color='red'>{args.lorem}</Color>
                <Color color='green'>{args.lorem}</Color>
                <Color color='purple'>{args.lorem}</Color>
                <Color color='teal'>{args.lorem}</Color>
                <Color color='orange'>{args.lorem}</Color>
            </Typeset>
        </>
    )
}

TypesetBasic.args = {
    className: 'Typeset-custom',
    variant: '1fr 2fr',
    lorem: "Why do we use it? There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
}

export const TypesetAlt = (args: any) => (<TypesetBasic {...args} />)

TypesetAlt.args = {
    ...TypesetBasic.args,
    variant: '2fr 1fr'
}

export const TypesetAlt2 = (args: any) => (<TypesetBasic {...args} />)

TypesetAlt2.args = {
    ...TypesetBasic.args,
    variant: '1fr 1fr 1fr'
}