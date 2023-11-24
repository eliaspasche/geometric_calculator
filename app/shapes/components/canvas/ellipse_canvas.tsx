import { Canvas2DProps } from "@/app/types/canvas";
import { EllipseCurve, Shape } from "three";
import { useMemo } from "react";

const EllipseCanvas = ({ width, height, color }: Canvas2DProps) => {
  const path = useMemo(() => {
    const shape = new Shape();

    const ellipseCurve = new EllipseCurve(
      0,
      0,
      width,
      height,
      0,
      2 * Math.PI,
      false,
      0,
    );

    shape.setFromPoints(ellipseCurve.getPoints(50));

    return shape;
  }, [width, height]);

  return (
    <>
      <hemisphereLight intensity={1} />
      <directionalLight position={[0, 0, 2]} intensity={1} />
      <mesh scale={[0.35, 0.35, 1]} position={[0, 0, 0]}>
        <shapeGeometry args={[path]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </>
  );
};

export default EllipseCanvas;
