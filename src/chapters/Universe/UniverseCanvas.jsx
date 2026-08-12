import { Canvas } from "@react-three/fiber";
import StarField from "./StarField";
import Moon from "./Moon";
import Sun from "./Sun";

export default function UniverseCanvas({ progress }) {
  return (
    <Canvas
      camera={{
        position: [0, 0, 8],
        fov: 60,
      }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={0.12} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={2}
      />

      <StarField />

      <Moon progress={progress} />

      <Sun progress={progress} />
    </Canvas>
  );
}