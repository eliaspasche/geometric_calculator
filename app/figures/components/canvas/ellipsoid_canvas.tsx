import { useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { BufferAttribute, BufferGeometry, Mesh } from "three";
import { useMemo, useRef } from "react";
import { Canvas3DProps } from "@/app/types/canvas";

const EllipsoidCanvas = ({ length, width, height, color }: Canvas3DProps) => {
  const scale = 0.3;
  const segmentLines = 8;
  const ref = useRef<Mesh>(null!);

  useFrame((state, delta) => {
    ref.current.rotateY(-delta / 10);
  });

  return (
    <>
      <OrbitControls enableDamping={true} />
      <hemisphereLight intensity={1} />
      <directionalLight position={[1, 1.5, 0.5]} intensity={4} />

      <mesh scale={[length * scale, width * scale, height * scale]} ref={ref}>
        <sphereGeometry
          args={[
            1, // radius
            64, // widthSegments
            32, // heightSegments
            0, // phiStart
            2 * Math.PI, // phiLength
            0, // thetaStart
          ]}
        />
        <meshStandardMaterial color={color} />
        {Array.from({ length: segmentLines }, (_, index) => (
          <LineSegments
            offsetAngle={(index / segmentLines - 0.5) * Math.PI}
            key={`vertical-${index}`}
          />
        ))}
        {Array.from({ length: segmentLines }, (_, index) => (
          <LineSegments
            offsetAngle={(index / segmentLines - 0.5) * Math.PI}
            horizontal
            key={`horizontal-${index}`}
          />
        ))}
      </mesh>
    </>
  );
};

const LineSegments = ({
  offsetAngle,
  horizontal,
}: {
  offsetAngle: number;
  horizontal?: boolean;
}) => {
  const geometry = useMemo(() => {
    const linesGeometry = new BufferGeometry();
    const vertices = [];
    const segments = 128;

    // Calculate lines
    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * Math.PI * 2;
      const x = Math.cos(theta) * Math.cos(offsetAngle);
      const y = Math.sin(theta) * Math.cos(offsetAngle);
      const z = Math.sin(offsetAngle);

      // horizontal or vertical?
      horizontal ? vertices.push(x, y, z) : vertices.push(x, z, y);
    }

    linesGeometry.setAttribute(
      "position",
      new BufferAttribute(new Float32Array(vertices), 3),
    );

    return linesGeometry;
  }, []);

  return (
    <lineSegments geometry={geometry}>
      <lineBasicMaterial color={"white"} />
    </lineSegments>
  );
};

export default EllipsoidCanvas;
