import { Canvas2DProps } from "@/app/types/Canvas";

const EllipseCanvas = ({ width, height, color }: Canvas2DProps) => {
  const scale = 0.35;
  return (
    <>
      <hemisphereLight intensity={1} />
      <directionalLight position={[0, 0, 2]} intensity={1} />

      <mesh scale={[width * scale, height * scale, 1]} position={[0, 0, 0]}>
        <circleGeometry args={[1, 64]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </>
  );
};

export default EllipseCanvas;
