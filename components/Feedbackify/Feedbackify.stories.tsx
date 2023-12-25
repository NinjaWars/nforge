import { makeStyles } from "@material-ui/core/styles"
import { Feedbackify } from ".."

const feedbackifyConfig = {
    title: 'Components/Feedbackify',
    decorators: [
    ]
}

export default feedbackifyConfig;

const useStyles = makeStyles(() => ({
    feedbackify: {
        color: 'rgb(86, 124, 86)',
        '& .btn': {
            color: 'rgb(86, 124, 86)',
        },
        '& .btn.active': {
            fontWeight: 'bold',
        }
    }
}
))


export const FeedbackifyBasic = (args: any) => {
    return (
        <>
            <Feedbackify {...args}>
                Text for the Feedbackify.
            </Feedbackify>
        </>
    )
}

FeedbackifyBasic.args = {
    className: 'Feedbackify-custom'
}

export const WithInitialData = (args: any) => (
    <Feedbackify up={7} down={88}  {...args} />
)

WithInitialData.argTypes = {
    onChange: {
        action: 'changed input'
    }
}

//argTypes: { onClick: { action: 'clicked' } },

export const WithAnOnchange = (args: any) => (
    <Feedbackify
        up={44444}
        down={66666}
        {...args}
    />
)

WithAnOnchange.argTypes = {
    onChange: {
        action: 'changed input'
    }
}


export const Colored777S = (args: any) => {
    const classes = useStyles()
    return (
        <Feedbackify up={777} down={777} className={classes.feedbackify} {...args} />
    )
}

export const WithCustomToggles = (args: any) => {
    const classes = useStyles()
    return (
        <Feedbackify
            className={classes.feedbackify}
            up={0}
            down={0}
            upToggle="Up"
            downToggle="Down"
            {...args}
        />
    )
}