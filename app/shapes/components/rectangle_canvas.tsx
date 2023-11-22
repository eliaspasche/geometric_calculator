import { Layer, Rect, Stage } from "react-konva";

interface PropsType {
  width: number;
  height: number;
  maxHeight: number;
  color: string;
}

export const RectangleCanvas = ({
  width,
  height,
  maxHeight,
  color,
}: PropsType) => {
  const scale = 4;

  return (
    <Stage width={width * scale} height={maxHeight}>
      <Layer>
        <Rect
          y={(maxHeight - height * scale) / 2}
          width={width * scale}
          height={height * scale}
          fill={color}
        />
      </Layer>
    </Stage>
  );
};
