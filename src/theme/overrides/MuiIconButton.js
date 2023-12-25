import palette from '../palette'

const MuiIconButtonOverrides = {
    root: {
        color: palette.icon,
        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.03)',
        },
    },
}

export default MuiIconButtonOverrides;
