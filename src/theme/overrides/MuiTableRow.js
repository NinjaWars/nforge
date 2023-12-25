import palette from '../palette'

const MuiTableRowOverrides = {
    root: {
        '&$selected': {
            backgroundColor: palette.background.default,
        },
        '&$hover': {
            '&:hover': {
                backgroundColor: palette.background.default,
            },
        },
    },
}

export default MuiTableRowOverrides;
