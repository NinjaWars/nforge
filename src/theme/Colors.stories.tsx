import {
    Button,
    IconButton,
    useTheme,
    Grid,
} from '@material-ui/core'
import { faRecycle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import SInfo from 'stories/components/SInfo'

export default {
    title: 'Colors/Theme',
    argTypes: {
        color: {
            options: ['primary', 'secondary', 'default', 'error', 'success', 'info', 'warning'],
            control: { type: 'radio' }
        },
        size: {
            options: ['small', 'medium', 'large'],
            control: { type: 'radio' }
        },
        iconButtonSize: {
            options: ['small', 'medium', 'large'],
            control: { type: 'radio' }
        }
    }
}

export const Palette = () => {
    const themeLocal = useTheme()
    const Swatch = ({ text, color }: { text: string; color: string }) => (
        <div
            style={{
                background: color,
                borderRadius: '0.2rem',
                padding: '1rem',
            }}
        >
            {text}
        </div>
    )
    const colorMatches = [
        ['primary.main', themeLocal.palette.primary.main],
        ['primary.dark', themeLocal.palette.primary.dark],
        ['primary.light', themeLocal.palette.primary.light],
        ['secondary.main', themeLocal.palette.secondary.main],
        ['secondary.dark', themeLocal.palette.secondary.dark],
        ['secondary.light', themeLocal.palette.secondary.light],
        ['success.main', themeLocal.palette.success.main],
        ['success.dark', themeLocal.palette.success.dark],
        ['success.light', themeLocal.palette.success.light],
        ['info.main', themeLocal.palette.info.main],
        ['info.dark', themeLocal.palette.info.dark],
        ['info.light', themeLocal.palette.info.light],
        ['error.main', themeLocal.palette.error.main],
        ['error.dark', themeLocal.palette.error.dark],
        ['error.light', themeLocal.palette.error.light],
        ['warning.main', themeLocal.palette.warning.main],
        ['warning.dark', themeLocal.palette.warning.dark],
        ['warning.light', themeLocal.palette.warning.light],
        ['grey.100', themeLocal.palette.grey[100]],
        ['Text: text.primary', themeLocal.palette.text.primary],
        ['Text: text.secondary', themeLocal.palette.text.secondary],
    ]
    return (
        <>
            <SInfo style={{ marginBottom: '1rem' }}>
                This is the current theme of the app
            </SInfo>
            <Grid container spacing={2}>
                {colorMatches.map(([text, color]) => (
                    <Grid item xs={4} key={color}>
                        <Swatch text={text} color={color} />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export const PrimaryAndSecondary = (args: any) => {
    return (
        <>
            <SInfo>Change color type from knobs</SInfo>
            <Button variant="contained" {...args}>
                Primary
            </Button>
            <Button {...args}>
                Primary
            </Button>
            <Button variant="outlined" {...args}>
                Primary
            </Button>
            <IconButton {...args} size={args.iconButtonSize}>
                <Icon icon={faRecycle} />
            </IconButton>
            <div>
                <SInfo>Forced Secondary colors</SInfo>
                <Button variant="contained" {...args} color='secondary'>
                    Secondary
                </Button>
                <Button {...args} color='secondary'>
                    Secondary
                </Button>
                <Button variant="outlined" {...args} color='secondary'>
                    Secondary
                </Button>
                <IconButton size={args.iconButtonSize} color='secondary'>
                    <Icon icon={faRecycle} />
                </IconButton>
            </div>
        </>
    )
}
PrimaryAndSecondary.args = {
    color: 'primary',
    size: 'medium',
    iconButtonSize: 'medium'
}
