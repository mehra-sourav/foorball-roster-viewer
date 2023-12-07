import { useRef, useEffect } from "react";
import { CanvasContainer } from "./Canvas.styles";
import { getSortedPlayers } from "utils";
import theme from "theme";

const Canvas = ({
  selectedPlayer,
  positionsCoordinates,
  players,
  handlePlayerChange,
}) => {
  const canvasRef = useRef(null);

  const isPlayerCircleClicked = (context, event, { clientX, clientY }) => {
    const sortedPlayers = getSortedPlayers(players);
    Object.entries(sortedPlayers).forEach(([position, players]) => {
      players.forEach((player, idx) => {
        const [circleX, circleY] = positionsCoordinates[position][idx];

        const circle = getCanvasCircle(circleX, circleY);

        // console.log("CLICKC COORD", getxy(event, canvasRef.current));
        // if (context.isPointInPath(circle, clientX, clientY)) {
        //   alert("you are inside the circle");
        // }
      });
    });
  };

  const getCanvasCircle = (x, y, radius = 20) => {
    const circle = new Path2D();
    circle.arc(x, y, radius, 50, 1, 90);
    return circle;
  };

  const drawPositionCircles = (context, positionsCoordinates) => {
    const sortedPlayers = getSortedPlayers(players);
    Object?.entries(positionsCoordinates)?.forEach(([p, coord]) => {
      coord?.forEach(([x, y], positionIdx) => {
        let currentPlayer = sortedPlayers[p][positionIdx];

        const circleRadii = [17, 20];

        // Drawing Base Circle
        const baseCircle = getCanvasCircle(x, y, circleRadii[1]);

        context.fillStyle =
          selectedPlayer?.playerName == currentPlayer?.playerName ||
          p?.toLowerCase() === "goalkeeper"
            ? theme.palette.primary.main
            : theme.palette.text.normal;
        context.fill(baseCircle);

        // Drawing inner circle for non-selected players
        if (selectedPlayer?.playerName !== currentPlayer?.playerName) {
          const innerCircle = getCanvasCircle(x, y, circleRadii[0]);
          context.fillStyle = theme.palette.background.secondary;
          context.fill(innerCircle);
        }

        context.fillStyle = theme.palette.text.main;
        context.textAlign = "center";

        // Drawing player jersey number
        context.font = "15px Poppins";
        context.fillText(currentPlayer?.jerseyNumber ?? "", x, y + 5);

        // Drawing player name
        context.fillText(currentPlayer?.playerName ?? "", x + 2, y + 40);
      });
    });

    // canvasRef.current.addEventListener("mousedown", function (event) {
    //   if (isPlayerCircleClicked(context, event, event)) {
    //     alert("you are inside the circle");
    //   }
    // });
  };

  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    const image = new Image();
    image.src = require("assets/field.png");

    image.onload = () => {
      context.canvas.width = image.width;
      context.canvas.height = image.height;
      context.drawImage(image, 0, 0, image.width, image.height);

      if (players) drawPositionCircles(context, positionsCoordinates);
    };
  }, [selectedPlayer]);

  return <CanvasContainer ref={canvasRef} />;
};

export default Canvas;
