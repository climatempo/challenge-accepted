import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#0080cd',
        },
        secondary: {
            main: '#004983',
        },
        background: {
            default: '#f7f7f7',
            white: '#fff'
        },
        text: {
            primary: '#707070',
            title: '#004983',
        },
        icon: {
            blue: '#0080cd',
            red: '#d21d1d',
            gray: '#707070'
        }
    }
})

export default theme