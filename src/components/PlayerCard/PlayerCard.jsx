import { CardMedia, CardContent, Typography, Divider } from "@mui/material";
import {
  CardContainer,
  JerseyNumberOverlay,
  PlayerInfoOverlay,
  PhysicalStatsContainer,
  PhysicalStatsText,
  CareerStatsContainer,
  CareerStatsText,
  Grid,
} from "./PlayerCard.styles";
import { Image } from "components/Image/Image";
import { convertToCamelCase } from "utils";

const PlayerCard = ({ selectedPlayer }) => {
  const isPlayerGoalKeeper = () =>
    selectedPlayer?.position?.toLowerCase() === "goalkeeper";

  const playerKeys = isPlayerGoalKeeper()
    ? ["Clean Sheets", "Saves"]
    : ["Goals", "Assists"];

  return (
    <CardContainer sx={{ position: "relative" }}>
      <div style={{ border: "0px solid green", height: "100%" }}>
        <CardMedia
          component="img"
          alt={selectedPlayer?.playerName}
          height="350"
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
              fontSize: "2rem",
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
              fontSize: "1.5rem",
              visibility: selectedPlayer ? "initial" : "hidden",
            }}
          >
            {selectedPlayer?.position}
          </Typography>
        </PlayerInfoOverlay>

        <CardContent sx={{ p: 0, border: "0px solid red" }}>
          {/* Player physical statistics */}
          <PhysicalStatsContainer show={!!selectedPlayer}>
            {/* Height Container */}
            <div style={{ border: "0px solid white" }}>
              <PhysicalStatsText variant="h5" component="div" header>
                Height
              </PhysicalStatsText>
              <PhysicalStatsText variant="h5" component="div">
                {selectedPlayer?.height / 100}m
              </PhysicalStatsText>
            </div>

            {/* Weight Container */}
            <div style={{ border: "0px solid white" }}>
              <PhysicalStatsText variant="h5" component="div" header>
                Weight
              </PhysicalStatsText>
              <PhysicalStatsText variant="h5" component="div">
                {selectedPlayer?.weight}kg
              </PhysicalStatsText>
            </div>

            {/* Nationality Container */}
            <div style={{ border: "0px solid white" }}>
              <PhysicalStatsText variant="h5" component="div" header>
                Nationality
              </PhysicalStatsText>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  position: "relative",
                  bottom: "5px",
                }}
              >
                <Image
                  alt={selectedPlayer?.playerName}
                  height="35px"
                  weight="35px"
                  imagePath={selectedPlayer?.flagImage}
                  sx={{ mr: 2, position: "relative" }}
                />
                <PhysicalStatsText variant="h5" component="div" image>
                  {selectedPlayer?.nationality}
                </PhysicalStatsText>
              </span>
            </div>
          </PhysicalStatsContainer>

          <Divider sx={{ borderColor: "border.main", mb: 3 }} />

          {/* Player career statistics */}
          <CareerStatsContainer show={!!selectedPlayer}>
            <Grid>
              {/* Appearances Container */}
              <div style={{ border: "0px solid white" }}>
                <CareerStatsText variant="h5" component="div" metric>
                  {selectedPlayer?.appearances}
                </CareerStatsText>
                <CareerStatsText variant="h5" component="div">
                  Appearances
                </CareerStatsText>
              </div>

              {/* Played time Container */}
              <div style={{ border: "0px solid white" }}>
                <CareerStatsText variant="h5" component="div" metric>
                  {selectedPlayer?.minutesPlayed}
                </CareerStatsText>
                <CareerStatsText variant="h5" component="div">
                  Minutes Played
                </CareerStatsText>
              </div>

              {/* Player specific Container */}
              <div style={{ border: "0px solid white" }}>
                <CareerStatsText variant="h5" component="div" metric>
                  {selectedPlayer?.[convertToCamelCase(playerKeys[0])]}
                </CareerStatsText>
                <CareerStatsText variant="h5" component="div">
                  {playerKeys[0]}
                </CareerStatsText>
              </div>
              <div style={{ border: "0px solid white" }}>
                <CareerStatsText variant="h5" component="div" metric>
                  {selectedPlayer?.[convertToCamelCase(playerKeys[1])]}
                </CareerStatsText>
                <CareerStatsText variant="h5" component="div">
                  {playerKeys[1]}
                </CareerStatsText>
              </div>
            </Grid>
          </CareerStatsContainer>
        </CardContent>
      </div>
    </CardContainer>
  );
};

export default PlayerCard;
