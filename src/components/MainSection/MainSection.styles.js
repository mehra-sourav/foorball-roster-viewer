import {
  Typography,
  Container,
  Dialog as DialogBase,
  styled,
} from "@mui/material";

export const MainSectionContainer = styled("main")(({ theme }) => ({
  backgroundColor: theme.palette.background.main,
  display: "flex",
  flexDirection: "column",
  flex: 1,
  color: "white",
  padding: "2.5rem",
}));

export const TeamName = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.main,
  fontSize: "1.25rem",
  fontWeight: 600,
}));

export const DetailsContainer = styled(Container)(({ theme }) => ({
  backgroundColor: theme.palette.background.secondary,
  height: "100%",
  borderRadius: "8px",
  padding: "2rem",
}));

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
