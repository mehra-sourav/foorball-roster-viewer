import { Box } from "@mui/material";

export const Image = ({ height, width, alt, imagePath, sx }) => {
  return (
    <Box
      component="img"
      sx={{
        ...sx,
        height,
        width,
      }}
      alt={alt}
      src={imagePath}
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
