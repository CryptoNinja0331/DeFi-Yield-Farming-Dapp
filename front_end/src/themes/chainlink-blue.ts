import { responsiveFontSizes } from "@material-ui/core"
import { createTheme } from "@material-ui/core";
import { green, purple } from '@material-ui/core/colors';

export default responsiveFontSizes(createTheme({
    palette: {
        primary: {
            main: "#000000",
        },
        secondary: {
            main: "#fffffff"
        }
    },
    typography: {
        fontFamily: "'Montserrat', sans-serif"
    }
}))
