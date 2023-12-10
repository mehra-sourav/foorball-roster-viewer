import { Typography, Container, styled } from "@mui/material";

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
