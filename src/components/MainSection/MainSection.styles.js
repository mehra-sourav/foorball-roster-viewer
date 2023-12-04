import { styled } from "@mui/material";

export const MainSectionContainer = styled("main")(({ theme }) => ({
  backgroundColor: theme.palette.background.main,
  display: "flex",
  gap: 8,
  flex: 1,
  color: "white",
  padding: "2.5rem",
}));
