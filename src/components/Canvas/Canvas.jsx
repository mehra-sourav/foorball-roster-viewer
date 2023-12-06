import { useRef, useEffect } from "react";
import { CanvasContainer } from "./Canvas.styles";
const Canvas = ({
  selectedPlayer,
  positionsCoordinates,
  handlePlayerChange,
}) => {
  const canvasRef = useRef(null);

  const drawPositionCircles = (context, x, y) => {
    const circle = new Path2D();
    const radius = 15;
    circle.arc(x, y, radius, 50, 0, 1);
    context.fillStyle = "white";
    context.fill(circle);
  };

  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    const image = new Image();
    image.src = require("assets/field.png");

    image.onload = () => {
      context.canvas.width = image.width;
      context.canvas.height = image.height;
      context.drawImage(image, 0, 0, image.width, image.height);

      Object.entries(positionsCoordinates).forEach(([p, coord]) => {
        coord.forEach(([x, y]) => {
          drawPositionCircles(context, x, y);
        });
      });
    };
  }, []);

  return <CanvasContainer ref={canvasRef} />;
};

export default Canvas;
