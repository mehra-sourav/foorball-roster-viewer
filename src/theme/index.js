import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  // palette: {
  //   primary: {
  //     main: "var(--color-primary-orange)",
  //     hover: "var(--color-primary-orange-hover)",
  //   },
  //   secondary: {
  //     main: "var(--color-primary-red)",
  //   },
  //   background: {
  //     main: "var(--color-neutral-background-1)",
  //     secondary: "var(--color-neutral-background-2)",
  //   },
  //   text: {
  //     main: "var(--color-text-heading)",
  //     normal: "var(--color-text-normal)",
  //     muted: "var(--color-text-muted)",
  //     disabled: "var(--color-text-disabled)",
  //   },
  //   border: {
  //     main: "var(--color-border-default)",
  //   },
  // },
  palette: {
    primary: {
      main: "#fea013",
      hover: "#ba4a0c",
      muted: "#69563A",
    },
    secondary: {
      main: "#d23131",
    },
    background: {
      main: "#222222",
      secondary: "#2d2d2d",
    },
    text: {
      main: "#f8f8f8",
      normal: "#cbcbcb",
      muted: "#999999",
      disabled: "#707070",
    },
    border: {
      main: "#494949",
    },
    side: {
      main: "#111111",
    },
  },
  typography: {
    fontFamily: "Poppins, Roboto",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { minWidth: 0 },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontWeight: 400,
        },
      },
    },
  },
});

export default theme;
