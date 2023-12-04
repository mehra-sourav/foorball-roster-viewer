import { Box } from "@mui/material";

export const Image = ({ height, width, imagePath }) => {
  return (
    <Box
      component="img"
      sx={{
        height,
        width,
      }}
      alt="Roster Viewer Logo"
      src={require(imagePath)}
    />
  );
};

export const LogoImage = ({ height, width }) => {
  return (
    <Box
      component="img"
      sx={{
        height,
        width,
      }}
      alt="Roster Viewer Logo"
      src={require("assets/icon.png")}
    />
  );
};
