import { Card, Typography, styled } from "@mui/material";

export const CardContainer = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.main,
  borderRadius: "0.5rem",
  padding: "1.5rem",
  width: "20%",
  maxHeight: "100%",
  flexGrow: 1,
}));

export const JerseyNumberOverlay = styled(Typography)(({ theme }) => ({
  zIndex: -1,
  color: theme.palette.primary.main,
  fontSize: "5rem",
  position: "relative",
  top: "100px",
  left: "70px",

  "& span": {
    position: "absolute",
    color: theme.palette.text.disabled,
    fontSize: "10rem",
    filter: 'blur("20px")',
    top: "-100px",
    left: "0px",
    zIndex: -1,
  },
}));

export const PlayerInfoOverlay = styled("div")(({ theme }) => ({
  zIndex: -1,
  marginTop: "-100px",

  color: theme.palette.text.main,
  "& span": {
    position: "absolute",
    color: theme.palette.text.disabled,
    fontSize: "10rem",
    filter: 'blur("20px")',
    top: "-100px",
    left: "0px",
    zIndex: -1,
  },
}));
