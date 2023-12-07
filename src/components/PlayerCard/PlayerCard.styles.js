import { Card, Typography, styled } from "@mui/material";

export const CardContainer = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.main,
  borderRadius: "0.5rem",
  padding: "1.5rem",
  maxHeight: "100%",
  marginLeft: "auto",
  "&.MuiCard-root": {
    border: "1px solid white",
    width: "20vw",
  },
}));

export const JerseyNumberOverlay = styled(Typography)(({ theme }) => ({
  zIndex: -1,
  color: theme.palette.primary.main,
  fontSize: "5rem",
  position: "relative",
  top: "90px",
  left: "60px",

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
  marginTop: "-110px",
}));

export const PhysicalStatsContainer = styled("div")(({ theme, show }) => ({
  display: "flex",
  visibility: show ? "initial" : "hidden",
  gap: "2rem",
  marginBottom: "2rem",
}));

export const PhysicalStatsText = styled(Typography)(({ theme, header }) => {
  return {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    flexDirection: "column",
    color: theme.palette.text.normal,
    marginBottom: header ? "1rem" : 0,
    fontSize: header ? "1rem" : "1.3rem",
    fontWeight: header ? 400 : 500,
  };
});

export const CareerStatsContainer = styled("div")(({ theme, header, show }) => {
  return {
    display: "flex",
    visibility: show ? "initial" : "hidden",
  };
});

export const CareerStatsText = styled(Typography)(
  ({ theme, header, metric }) => {
    return {
      display: "flex",
      flexDirection: "row",
      alignContent: "center",
      flexDirection: "column",
      color: metric ? theme.palette.primary.main : theme.palette.text.normal,
      marginBottom: header ? "1rem" : 0,
      fontSize: metric ? "2rem" : "1.1rem",
      fontWeight: header ? 400 : 500,
    };
  }
);

export const Grid = styled("div")(() => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridGap: "3.5rem",
}));
