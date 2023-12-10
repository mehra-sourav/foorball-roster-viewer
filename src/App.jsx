import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import AppContextProvider from "context";
import theme from "theme";
import SidePanel from "components/SidePanel/SidePanel";
import MainSection from "components/MainSection/MainSection";

function App() {
  const [rosterSelected, setRosterSelected] = useState(true);

  const changePage = (changeToRoster) => {
    setRosterSelected(changeToRoster);
  };

  return (
    <div style={{ display: "flex", height: "100%" }}>
      <AppContextProvider>
        <ThemeProvider theme={theme}>
          <SidePanel rosterSelected={rosterSelected} changePage={changePage} />
          <MainSection rosterSelected={rosterSelected} />
        </ThemeProvider>
      </AppContextProvider>
    </div>
  );
}

export default App;
