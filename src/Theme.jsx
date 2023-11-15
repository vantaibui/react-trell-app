import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

const APP_BAR_HEIGHT = "58px";
const BOARD_BAR_HEIGHT = "60px";
const BOARD_CONTENT_HEIGHT = `calc(100vh - ${APP_BAR_HEIGHT} - ${BOARD_BAR_HEIGHT})`;
const COLUMN_HEADER_HEIGHT = "50px";
const COLUMN_FOOTER_HEIGHT = "56px";

const theme = extendTheme({
  palette: {
    mode: "light",
  },
  trelloCustom: {
    appBarHeight: APP_BAR_HEIGHT,
    boardBarHeight: BOARD_BAR_HEIGHT,
    boardContentHeight: BOARD_CONTENT_HEIGHT,
    columnHeaderHeight: COLUMN_HEADER_HEIGHT,
    columnFooterHeight: COLUMN_FOOTER_HEIGHT
  },
  colorSchemes: {
    // light: {
    //     palette: {
    //         primary: {
    //             main: teal[500],
    //             secondary: deepOrange[500]
    //         },
    //     }
    // },
    // dark: {
    //     palette: {
    //         primary: {
    //             main: cyan[500],
    //             secondary: orange[500]
    //         },
    //     }
    // },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          // scrollbarColor: "blue red",
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            width: "8px",
            height: "8px",
            // backgroundColor: "#dcdde1",
          },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            borderRadius: 8,
            backgroundColor: "#dcdde1",
          },
          "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#fff",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderWidth: "0.5px",
          fontSize: "0.75rem",
          "&:hover": {},
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: { fontSize: "0.875rem" },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          "&:MuiTypography-body1": { fontSize: "0.875rem" },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => {
          return {
            color: "blue",
            fontSize: "0.875rem",
            ".MuiOutlinedInput-notchedOutline": {
              // borderColor: theme.palette.primary.light
            },
            "&:hover": {
              ".MuiOutlinedInput-notchedOutline": {
                // borderColor: theme.palette.primary.light
              },
            },
            "& fieldset": {
              borderWidth: "0.5px !important",
            },
            "&:hover fieldset": {
              borderWidth: "1px !important",
            },
            "&.Mui-focused fieldset": {
              borderWidth: "1px !important",
            },
          };
        },
      },
    },
  },
  // typography: {
  //     fontSize: 50,
  //     fontFamily: "Raleway, Arial",
  //     fontWeight: 700
  // }
});

export default theme;
