import { CardMedia, CardContent, Typography, Divider } from "@mui/material";
import {
  CardContainer,
  JerseyNumberOverlay,
  PlayerInfoOverlay,
} from "./PlayerCard.styles";

const PlayerCard = ({ selectedPlayer }) => {
  return (
    <CardContainer sx={{ position: "relative" }}>
      <CardMedia
        component="img"
        alt={selectedPlayer?.playerName}
        height="450"
        image={selectedPlayer?.playerImage}
        sx={{
          objectFit: "scale-down",
          mb: 3,
          color: "text.main",
          visibility: selectedPlayer ? "initial" : "hidden",
        }}
      />
      <JerseyNumberOverlay sx={{ position: "absolute", zIndex: 1 }}>
        {selectedPlayer?.jerseyNumber}
        <span>{selectedPlayer?.jerseyNumber}</span>
      </JerseyNumberOverlay>

      <PlayerInfoOverlay
        sx={{
          position: "absolute",
          zIndex: 1,
          visibility: selectedPlayer ? "initial" : "hidden",
        }}
      >
        <Typography
          variant="h5"
          component="div"
          sx={{
            color: "text.main",
            fontSize: "1.5rem",
            fontWeight: 500,
            py: 1,
            visibility: selectedPlayer ? "initial" : "hidden",
          }}
        >
          {selectedPlayer?.playerName}
        </Typography>
        <Typography
          variant="h5"
          component="div"
          sx={{
            color: "primary.main",
            fontWeight: 600,
            fontSize: "1.6rem",
            visibility: selectedPlayer ? "initial" : "hidden",
          }}
        >
          {selectedPlayer?.position}
        </Typography>
      </PlayerInfoOverlay>

      <CardContent sx={{ p: 0 }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            color: "text.normal",
            border: "1px solid white",
            mb: 3,
            visibility: selectedPlayer ? "initial" : "hidden",
          }}
        >
          HEIGHT WEIGHT
        </Typography>

        <Divider sx={{ borderColor: "border.main", mb: 3 }} />

        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            color: "primary.main",
            border: "1px solid white",
            mb: 3,
            visibility: selectedPlayer ? "initial" : "hidden",
          }}
        >
          META
        </Typography>
      </CardContent>
    </CardContainer>
  );
};

export default PlayerCard;
