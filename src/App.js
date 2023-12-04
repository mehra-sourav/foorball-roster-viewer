import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "theme";
import SidePanel from "components/SidePanel/SidePanel";
import MainSection from "components/MainSection/MainSection";

function App() {
  const [rosterSelected, setRosterSelected] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      <SidePanel rosterSelected={rosterSelected} />
      <MainSection rosterSelected={rosterSelected} />
    </ThemeProvider>
  );
}

export default App;
