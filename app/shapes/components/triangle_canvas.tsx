import { Layer, Line, Stage } from "react-konva";

interface PropsType {
  width: number;
  height: number;
  maxHeight: number;
  color: string;
}

const TriangleCanvas = ({ width, height, maxHeight, color }: PropsType) => {
  const scale = 4;

  return (
    <Stage width={width * scale} height={maxHeight}>
      <Layer>
        <Line
          points={[0, 0, width * scale, 0, width * scale, height * scale]}
          strokeWidth={1}
          closed={true}
          fill={color}
          y={(maxHeight - height * scale) / 2}
        />
      </Layer>
    </Stage>
  );
};

export default TriangleCanvas;
