import { useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Mesh } from "three";
import { useRef } from "react";
import { Canvas3DProps } from "@/app/types/canvas";

const CuboidCanvas = ({ length, width, height, color }: Canvas3DProps) => {
  const ref = useRef<Mesh>(null!);

  useFrame((state, delta) => {
    // ref.current.rotateX(delta / 10);
    ref.current.rotateY(delta / 10);
    // ref.current.rotateZ(delta / 10);
  });

  return (
    <>
      <OrbitControls enableDamping={false} />
      <hemisphereLight intensity={1} />
      <directionalLight position={[0, 1, 2]} intensity={1} />

      <mesh
        scale={[0.4, 0.4, 0.4]}
        position={[0, 0, 0]}
        rotation={[0.5, -0.5, 0]}
        ref={ref}
      >
        <boxGeometry args={[length, height, width]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </>
  );
};

export default CuboidCanvas;
