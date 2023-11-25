import { useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Mesh } from "three";
import { useRef } from "react";
import { Canvas3DProps } from "@/app/types/canvas";

const PyramidCanvas = ({ length, width, height, color }: Canvas3DProps) => {
  const scale = 0.3;
  const ref = useRef<Mesh>(null!);

  useFrame((state, delta) => {
    ref.current.rotateY(-delta / 10);
  });

  return (
    <>
      <OrbitControls enableDamping={false} />
      <hemisphereLight intensity={1} />
      <directionalLight position={[0.5, 0.5, -0.5]} intensity={1} />

      <mesh
        scale={[length * scale, width * scale, height * scale]}
        ref={ref}
        rotation={[0, 1, 0]}
      >
        <cylinderGeometry
          args={[
            0, // radiusTop
            1, // radiusBottom
            1, // height
            4, // radialSegments
            1, // heightSegments
            false, // openEnded
            (45 * 2 * Math.PI) / 360, // thetaStart
          ]}
        />
        <meshStandardMaterial color={color} />
      </mesh>
    </>
  );
};

export default PyramidCanvas;
