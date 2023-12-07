import { useEffect, useState, useRef } from "react";
import Canvas from "components/Canvas/Canvas";
import PlayerCard from "components/PlayerCard/PlayerCard";
import { canvasCoordinates } from "constants";

const Formation = ({ playerData }) => {
  const playerList = playerData?.filter((player) => player.starter === "TRUE");
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const positionsCoordinates = useRef(canvasCoordinates);

  useEffect(() => {
    const goalkeeper = playerList?.find(
      (p) => p.position.toLowerCase() === "goalkeeper"
    );

    if (goalkeeper) setSelectedPlayer(goalkeeper);
  }, []);

  return (
    <div style={{ display: "flex", height: "100%" }}>
      <Canvas
        positionsCoordinates={positionsCoordinates.current}
        selectedPlayer={selectedPlayer}
        players={playerList}
      />
      <PlayerCard selectedPlayer={selectedPlayer} />
    </div>
  );
};

export default Formation;
