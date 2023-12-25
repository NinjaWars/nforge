/* eslint-disable no-unused-vars */
import {
    Button,
    IconButton,
    ThemeProvider,
    useTheme,
    Grid,
    Typography,
} from '@material-ui/core'
import { faRecycle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import theme from '.'
import { Tile } from '../../components'

const typographyTheme = {
    title: 'Typography/Theme',
}

export default typographyTheme;

/* ============= Show Typography for the Site ================= */

export const AllTypography = () => (
    <>
        <Typography variant="h1">H1 Heading</Typography>
        <Typography variant="h2">H2 Heading</Typography>
        <Typography variant="h3">H3 Heading</Typography>
        <Typography variant="h4">H4 Heading</Typography>
        <Typography variant="h5">H5 Heading</Typography>
        <Typography variant="h6">H6 Heading</Typography>
        <Typography variant="subtitle1">subtitle1</Typography>
        <Typography variant="subtitle2">subtitle2</Typography>
        <Typography variant="body1">body1</Typography>
        <Typography variant="body2">body2</Typography>
        <Typography variant="button">button text</Typography>
        <Typography variant="caption">caption text</Typography>
        <span>
            <Typography variant="overline">overline text</Typography>Next to
            non-component text
        </span>
    </>
)

AllTypography.story = {
    name: 'Typography/All',
}

export const AllTypographyOnDarkTile = () => (
    <Tile theme="dark">
        <Typography variant="h1">H1 Heading</Typography>
        <Typography variant="h2">H2 Heading</Typography>
        <Typography variant="h3">H3 Heading</Typography>
        <Typography variant="h4">H4 Heading</Typography>
        <Typography variant="h5">H5 Heading</Typography>
        <Typography variant="h6">H6 Heading</Typography>
        <Typography variant="subtitle1">subtitle1</Typography>
        <Typography variant="subtitle2">subtitle2</Typography>
        <Typography variant="body1">body1</Typography>
        <Typography variant="body2">body2</Typography>
        <Typography variant="button">button text</Typography>
        <Typography variant="caption">caption text</Typography>
        <span>
            <Typography variant="overline">overline text</Typography>Next to
            non-component text
        </span>
    </Tile>
)

AllTypographyOnDarkTile.story = {
    name: 'Typography/on dark tile',
}

export const AllTypographyOnLightTile = () => (
    <Tile theme="light">
        <Typography variant="h1">H1 Heading</Typography>
        <Typography variant="h2">H2 Heading</Typography>
        <Typography variant="h3">H3 Heading</Typography>
        <Typography variant="h4">H4 Heading</Typography>
        <Typography variant="h5">H5 Heading</Typography>
        <Typography variant="h6">H6 Heading</Typography>
        <Typography variant="subtitle1">subtitle1</Typography>
        <Typography variant="subtitle2">subtitle2</Typography>
        <Typography variant="body1">body1</Typography>
        <Typography variant="body2">body2</Typography>
        <Typography variant="button">button text</Typography>
        <Typography variant="caption">caption text</Typography>
        <span>
            <Typography variant="overline">overline text</Typography>Next to
            non-component text
        </span>
    </Tile>
)

AllTypographyOnLightTile.story = {
    name: 'Typography/on light tile',
}
