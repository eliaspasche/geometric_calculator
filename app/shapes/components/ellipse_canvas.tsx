import { Ellipse, Layer, Stage } from "react-konva";

interface PropsType {
  width: number;
  height: number;
  maxHeight: number;
  color: string;
}

const EllipseCanvas = ({ width, height, maxHeight, color }: PropsType) => {
  const scale = 2;

  return (
    <Stage width={width * scale * 2} height={maxHeight}>
      <Layer>
        <Ellipse
          radiusX={width * scale}
          radiusY={height * scale}
          offsetY={-height * scale}
          offsetX={-width * scale}
          y={(maxHeight - height * scale * 2) / 2}
          fill={color}
        />
      </Layer>
    </Stage>
  );
};

export default EllipseCanvas;
