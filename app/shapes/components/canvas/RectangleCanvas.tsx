import { Canvas2DProps } from "@/app/types/Canvas";

const RectangleCanvas = ({ width, height, color }: Canvas2DProps) => {
  return (
    <>
      <hemisphereLight intensity={1} />
      <directionalLight position={[0, 0, 2]} intensity={1} />

      <mesh scale={[0.6, 0.6, 0.6]} position={[0, 0, 0]}>
        <boxGeometry args={[width, height]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </>
  );
};

export default RectangleCanvas;
