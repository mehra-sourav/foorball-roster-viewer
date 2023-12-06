import { styled } from "@mui/material";

export const SidePanelContainer = styled("aside")(({ theme }) => ({
  boxSizing: "border-box",
  width: "3vw",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: theme.palette.side.main,
  padding: "1rem",
}));

export const ButtonContainer = styled("div")(() => ({
  marginTop: "3rem",
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
}));
