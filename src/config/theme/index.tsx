import {Theme} from "@mui/system";
import {createTheme} from "@mui/material/styles";


const themeLight: Theme = createTheme(
    {
        palette: {
            mode: 'light',
        },
    }
);

const themeDark: Theme = createTheme(
    {
        palette: {
            mode: 'dark',
        },
    }
);

export const theme : Theme = themeDark;




