import { useRef, useEffect, useContext } from "react";
import { CanvasContainer } from "./Canvas.styles";
import { getSortedPlayers } from "utils";
import theme from "theme";
import { AppContext } from "context";

const Canvas = ({ positionsCoordinates, players }) => {
  const { selectedPlayer, setSelectedPlayer } = useContext(AppContext);
  const canvasRef = useRef(null);
  const localSelectedPlayer = useRef(null);
  const circleRadii = useRef([17, 20]);

  const handleMouseClick = (event) => {
    const selectedPlayer = localSelectedPlayer.current;
    const context = canvasRef.current.getContext("2d");
    let clickedPlayer = isPlayerCircleClicked(context, event);

    // Checking if a player was clicked
    if (
      clickedPlayer &&
      clickedPlayer?.jerseyNumber !== selectedPlayer?.jerseyNumber
    ) {
      // Resetting last selected player's circle
      setCircle(
        ...selectedPlayer.canvasPosition,
        selectedPlayer.jerseyNumber,
        selectedPlayer.playerName,
        "reset"
      );

      // Setting new selected player's circle
      setCircle(
        ...clickedPlayer[1],
        clickedPlayer[0].jerseyNumber,
        clickedPlayer[0].playerName
      );

      const newPlayer = players?.find(
        (p) => p.jerseyNumber === clickedPlayer[0].jerseyNumber
      );

      // Copying coordinates
      newPlayer.canvasPosition = clickedPlayer[1];

      setSelectedPlayer(newPlayer);
    }
  };

  const isPlayerCircleClicked = (context, event) => {
    const sortedPlayers = getSortedPlayers(players);
    let result = null;

    Object.entries(sortedPlayers).forEach(([position, players]) => {
      players.forEach((player, idx) => {
        const [circleX, circleY] = positionsCoordinates[position][idx];
        const circle = getCanvasCircle(circleX, circleY);
        let { x, y } = getMousePos(canvasRef.current, event);

        if (context.isPointInPath(circle, x, y)) {
          result = [player, [circleX, circleY]];
          return;
        }
      });

      if (result) {
        return;
      }
    });
    return result;
  };

  const getCanvasCircle = (x, y, radius = 20) => {
    const circle = new Path2D();
    circle.arc(x, y, radius, 50, 1, 90);
    return circle;
  };

  const getMousePos = (canvas, { clientX, clientY }) => {
    const rectangle = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rectangle.width;
    const scaleY = canvas.height / rectangle.height;

    return {
      x: (clientX - rectangle.left) * scaleX,
      y: (clientY - rectangle.top) * scaleY,
    };
  };

  const drawCircle = (circle, context, color = theme.palette.text.normal) => {
    context.fillStyle = color;
    context.fill(circle);
  };

  const drawText = (
    context,
    x,
    y,
    text = "",
    color = theme.palette.text.main
  ) => {
    context.textAlign = "center";
    context.font = "15px Poppins";
    context.fillStyle = color;

    context.fillText(text, x, y);
  };

  const setCircle = (x, y, jerseyNumber, playerName, mode = null) => {
    const context = canvasRef.current.getContext("2d");
    const circle = getCanvasCircle(x, y, circleRadii.current[1]);
    const innerCircle = getCanvasCircle(x, y, circleRadii.current[0]);
    const color =
      mode !== "reset" ? theme.palette.primary.main : theme.palette.text.normal;

    // Drawing outer circle
    drawCircle(circle, context, color);

    // Drawing inner circle
    if (mode === "reset") {
      drawCircle(innerCircle, context, theme.palette.background.secondary);
    }

    // Drawing player jersey number
    drawText(context, x, y + 5, jerseyNumber);
  };

  const drawPositionCircles = (context, positionsCoordinates) => {
    const sortedPlayers = getSortedPlayers(players);

    Object?.entries(positionsCoordinates)?.forEach(([p, coord]) => {
      coord?.forEach(([x, y], positionIdx) => {
        let currentPlayer = sortedPlayers[p][positionIdx];

        // Getting Base Circle metadata
        const baseCircle = getCanvasCircle(x, y, circleRadii.current[1]);
        const color =
          selectedPlayer?.jerseyNumber === currentPlayer?.jerseyNumber
            ? theme.palette.primary.main
            : theme.palette.text.normal;

        // Drawing Base Circle
        drawCircle(baseCircle, context, color);

        // Drawing inner circle for non-selected players
        if (selectedPlayer?.playerName !== currentPlayer?.playerName) {
          const innerCircle = getCanvasCircle(x, y, circleRadii.current[0]);
          drawCircle(innerCircle, context, theme.palette.background.secondary);
        }

        // Drawing player jersey number
        drawText(context, x, y + 5, currentPlayer?.jerseyNumber);

        // Drawing player name
        drawText(context, x + 2, y + 40, currentPlayer?.playerName);
      });
    });
  };

  // Use effect to update selected player ref
  useEffect(() => {
    localSelectedPlayer.current = selectedPlayer;
  }, [selectedPlayer]);

  // Use effect to draw canvas and circles
  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    const image = new Image();
    image.src = require("assets/field.png");

    image.onload = () => {
      context.canvas.width = image.width;
      context.canvas.height = image.height;
      context.drawImage(image, 0, 0, image.width, image.height);

      canvasRef.current.addEventListener("click", handleMouseClick);

      if (players) drawPositionCircles(context, positionsCoordinates);
    };

    return () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.removeEventListener("click", handleMouseClick);
      }
    };
  }, [players]);

  return <CanvasContainer ref={canvasRef} />;
};

export default Canvas;
