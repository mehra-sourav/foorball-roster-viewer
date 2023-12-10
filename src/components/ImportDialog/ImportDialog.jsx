import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import {
  Typography,
  Divider,
  DialogTitle,
  IconButton,
  DialogActions,
  DialogContent,
} from "@mui/material";
import FilePicker from "components/FilePicker/FilePicker";
import { PrimaryButton } from "components/Button/Button";
import { Dialog } from "./ImportDialog.styles";

const ImportDialog = ({
  isOpen,
  toggleDialog,
  inputFileRef,
  handleFileImport,
}) => {
  const [isButtonDisabled, setDisabled] = useState(true);

  return (
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

        <FilePicker
          sx={{ mb: 2 }}
          inputFileRef={inputFileRef}
          setDisabled={setDisabled}
        />

        <Typography gutterBottom color="text.muted">
          File must be in .csv format
        </Typography>
      </DialogContent>
      <DialogActions>
        <PrimaryButton
          disabled={isButtonDisabled}
          height="auto"
          onClick={() => {
            handleFileImport();
            toggleDialog();
          }}
        >
          Import
        </PrimaryButton>
      </DialogActions>
    </Dialog>
  );
};

export default ImportDialog;
