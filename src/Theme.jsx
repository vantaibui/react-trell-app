import { cyan, deepOrange, orange, teal } from '@mui/material/colors';
import { experimental_extendTheme as extendTheme } from '@mui/material/styles';

const theme = extendTheme({
    palette: {
        mode: 'dark',
    },
    trelloCustom: {
        appBarHeight: "48px",
        boardBarHeight: "58px"
    },
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    main: teal[500],
                    secondary: deepOrange[500]
                },
            }
        },
        dark: {
            palette: {
                primary: {
                    main: cyan[500],
                    secondary: orange[500]
                },
            }
        },
    },
    // typography: {
    //     fontSize: 50,
    //     fontFamily: "Raleway, Arial",
    //     fontWeight: 700
    // }
});

export default theme;