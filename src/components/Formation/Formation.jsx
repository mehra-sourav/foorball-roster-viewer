import { useContext, lazy, Suspense } from "react";
import { canvasCoordinates } from "constants";
import { AppContext } from "context";
const Canvas = lazy(() => import("components/Canvas/Canvas"));
const PlayerCard = lazy(() => import("components/PlayerCard/PlayerCard"));

const Formation = () => {
  const { playerData } = useContext(AppContext);

  //remove after adding edit player dialog
  const playerList = playerData?.filter((player) => player.starter === "TRUE");

  return (
    <div style={{ display: "flex", height: "100%" }}>
      <Suspense fallback="<div>Loading...</div>">
        <Canvas positionsCoordinates={canvasCoordinates} players={playerList} />
        <PlayerCard />
      </Suspense>
    </div>
  );
};

export default Formation;
