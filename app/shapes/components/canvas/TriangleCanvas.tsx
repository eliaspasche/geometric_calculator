import { Canvas2DProps } from "@/app/types/Canvas";
import { useMemo } from "react";
import { Shape } from "three";

const TriangleCanvas = ({ width, height, color }: Canvas2DProps) => {
  const path = useMemo(() => {
    const shape = new Shape();

    shape.lineTo(width, 0);
    shape.lineTo(0, height);

    return shape;
  }, [width, height]);

  return (
    <>
      <hemisphereLight intensity={1} />
      <directionalLight position={[0, 0, 2]} intensity={1} />

      <mesh
        scale={[0.65, 0.65, 0.65]}
        position={[-width / Math.PI, -height / Math.PI, 0]}
      >
        <shapeGeometry args={[path]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </>
  );
};

export default TriangleCanvas;
