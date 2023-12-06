import { useState, useRef } from "react";
import {
  Typography,
  Divider,
  DialogTitle,
  IconButton,
  DialogActions,
  DialogContent,
  Button,
} from "@mui/material";
import {
  MainSectionContainer,
  TeamName,
  Dialog,
  DetailsContainer,
} from "./MainSection.styles";
import CloseIcon from "@mui/icons-material/Close";
import Formation from "components/Formation/Formation";
import Roster from "components/Roster/Roster";
import FilePicker from "components/FilePicker/FilePicker";
import { PrimaryButton } from "components/Button/Button";

const ImportDialog = ({
  isOpen,
  toggleDialog,
  inputFileRef,
  handleFileImport,
}) => (
  <Dialog
    onClose={toggleDialog}
    aria-labelledby="customized-dialog-title"
    open={isOpen}
  >
    <DialogTitle sx={{ p: 0, mb: 2 }} id="customized-dialog-title">
      Importer
      <IconButton
        aria-label="close"
        onClick={toggleDialog}
        sx={{
          position: "absolute",
          right: 24,
          top: 24,
          padding: 0,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
    </DialogTitle>

    <Divider sx={{ borderColor: "border.main", mb: 3 }} />

    <DialogContent sx={{ padding: 0 }}>
      <Typography sx={{ mb: 1 }}>Roster File</Typography>

      <FilePicker sx={{ mb: 2 }} inputFileRef={inputFileRef} />

      <Typography gutterBottom color="text.muted">
        File must be in .csv format
      </Typography>
    </DialogContent>
    <DialogActions>
      <PrimaryButton height="auto" onClick={handleFileImport}>
        Import
      </PrimaryButton>
    </DialogActions>
  </Dialog>
);

const MainSection = ({ rosterSelected, handleFileImport }) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const inputFileRef = useRef();

  const toggleDialog = () => setDialogOpen(!dialogOpen);
  const handleFileUpload = () => {
    let uploadedFile = inputFileRef.current.files[0];
    handleFileImport(uploadedFile);
  };

  return (
    <MainSectionContainer>
      {/* Current View Name */}
      <div
        style={{
          display: "flex",
          marginBottom: "1.5rem",
          border: "1px solid white",
        }}
      >
        <div style={{ marginRight: "auto" }}>
          <Typography component="h6" color="primary">
            Roster Details
          </Typography>

          {/* Team Name */}
          <TeamName component="span">My Team</TeamName>
        </div>

        <PrimaryButton
          sx={{ px: 1 }}
          height="auto"
          width="200px"
          onClick={toggleDialog}
        >
          Import Team
        </PrimaryButton>
        <ImportDialog
          isOpen={dialogOpen}
          toggleDialog={toggleDialog}
          inputFileRef={inputFileRef}
          handleFileImport={handleFileUpload}
        />
      </div>

      <DetailsContainer maxWidth={false} disableGutters>
        {rosterSelected ? <Roster /> : <Formation />}
      </DetailsContainer>
    </MainSectionContainer>
  );
};

export default MainSection;
