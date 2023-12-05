import { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "theme";
import SidePanel from "components/SidePanel/SidePanel";
import MainSection from "components/MainSection/MainSection";

function App() {
  const [rosterSelected, setRosterSelected] = useState(true);

  const changePage = (changeToRoster) => {
    setRosterSelected(changeToRoster);
  };
  useEffect(() => {
    console.log("In useeff");
  });
  return (
    <div style={{ display: "flex", height: "100%" }}>
      <ThemeProvider theme={theme}>
        <SidePanel rosterSelected={rosterSelected} changePage={changePage} />
        <MainSection rosterSelected={rosterSelected} />
      </ThemeProvider>
    </div>
  );
}

export default App;
