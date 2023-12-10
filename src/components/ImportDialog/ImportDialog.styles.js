import { Dialog as DialogBase, styled } from "@mui/material";

export const Dialog = styled(DialogBase)(
  ({ theme, height = "600px", width = "800px" }) => ({
    "& .MuiDialog-paper": {
      borderRadius: "0.5rem",
      padding: "1.5rem",
      backgroundColor: theme.palette.background.secondary,
      color: theme.palette.text.main,
      height: height,
      width: width,
    },
  })
);
