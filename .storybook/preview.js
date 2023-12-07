/** @type { import('@storybook/react').Preview } */
import React from "react";
// import { ThemeProvider } from "@material-ui";
import muiTheme from "../src/theme";
// export const decorators = [
//   (Story) => (
//     <ThemeProvider theme={muiTheme}>
//       <Story />
//     </ThemeProvider>
//   ),
// ];

// export const decorators = [
//   withThemeFromJSXProvider({
//     // themes: {
//     //   light: lightTheme,
//     // },
//     // defaultTheme: 'light',
//     Provider: ThemeProvider,
//     // GlobalStyles: CssBaseline,
//   }),
// ];

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
