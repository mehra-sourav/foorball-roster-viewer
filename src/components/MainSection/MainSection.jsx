import { useState, useRef, useContext } from "react";
import { Typography } from "@mui/material";
import {
  MainSectionContainer,
  TeamName,
  DetailsContainer,
} from "./MainSection.styles";
import Formation from "components/Formation/Formation";
import Roster from "components/Roster/Roster";
import ImportDialog from "components/ImportDialog/ImportDialog";
import { PrimaryButton } from "components/Button/Button";
import { AppContext } from "context";
import { csvToArrayParser } from "utils";
import { canvasCoordinates } from "constants";

const MainSection = ({ rosterSelected }) => {
  const { setPlayerData, setSelectedPlayer } = useContext(AppContext);
  const [dialogOpen, setDialogOpen] = useState(false);
  const inputFileRef = useRef();

  const setInitialPlayer = (playerData) => {
    const startingPlayers = playerData?.filter(
      (player) => player.starter === "TRUE"
    );

    const initialPlayer = startingPlayers?.find(
      (p) => p.position.toLowerCase() === "goalkeeper"
    );

    if (initialPlayer) {
      initialPlayer.canvasPosition = canvasCoordinates["goalkeeper"][0];
      setSelectedPlayer(initialPlayer);
    }
  };

  const handleFileImport = (file) => {
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = (event) => {
      const csvdata = event.target.result;

      let { columns, ...playerList } = csvToArrayParser(csvdata);
      let playerData = [columns, ...Object.values(playerList)];

      setInitialPlayer(playerData);
      setPlayerData(playerData);
    };
  };

  const toggleDialog = () => setDialogOpen(!dialogOpen);

  const handleFileUpload = () => {
    let uploadedFile = inputFileRef.current.files[0];
    handleFileImport(uploadedFile);
  };

  return (
    <MainSectionContainer>
      <div
        style={{
          display: "flex",
          marginBottom: "1.5rem",
        }}
      >
        <div style={{ marginRight: "auto" }}>
          <Typography component="h6" color="primary">
            Roster Details
          </Typography>

          {/* Team Name */}
          <TeamName component="span">My Team</TeamName>
        </div>
        {rosterSelected && (
          <PrimaryButton
            sx={{ px: 1 }}
            height="auto"
            width="200px"
            onClick={toggleDialog}
          >
            Import Team
          </PrimaryButton>
        )}
      </div>

      <DetailsContainer maxWidth={false} disableGutters>
        {rosterSelected ? <Roster /> : <Formation />}
      </DetailsContainer>

      {rosterSelected && (
        <ImportDialog
          isOpen={dialogOpen}
          toggleDialog={toggleDialog}
          inputFileRef={inputFileRef}
          handleFileImport={handleFileUpload}
        />
      )}
    </MainSectionContainer>
  );
};

export default MainSection;
