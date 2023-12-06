import { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "theme";
import SidePanel from "components/SidePanel/SidePanel";
import MainSection from "components/MainSection/MainSection";
import { csvToArrayParser } from "utils";

function App() {
  const [rosterSelected, setRosterSelected] = useState(true);
  const [playerData, setPlayerData] = useState(null);

  const changePage = (changeToRoster) => {
    setRosterSelected(changeToRoster);
  };

  const handleFileImport = (file) => {
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = (event) => {
      const csvdata = event.target.result;
      const records = csvToArrayParser(csvdata);

      setPlayerData(records);
    };
  };

  useEffect(() => {
    console.log("In useeff");
  });

  return (
    <div style={{ display: "flex", height: "100%" }}>
      <ThemeProvider theme={theme}>
        <SidePanel rosterSelected={rosterSelected} changePage={changePage} />
        <MainSection
          rosterSelected={rosterSelected}
          handleFileImport={handleFileImport}
          playerData={playerData}
        />
      </ThemeProvider>
    </div>
  );
}

export default App;
