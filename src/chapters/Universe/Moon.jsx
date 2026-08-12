import { useRef } from "react";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import * as THREE from "three";

export default function Moon({ progress = 0 }) {
  const moonRef = useRef(null);
  const { camera } = useThree();

  const texture = useLoader(
    THREE.TextureLoader,
    "/textures/moon/moon_color.jpg"
  );

  useFrame(() => {
    if (!moonRef.current) return;

    const distance = 20;

    const height =
      2 *
      Math.tan(
        THREE.MathUtils.degToRad(camera.fov / 2)
      ) *
      distance;

    const width =
      height * camera.aspect;

    /*
     * ==========================================
     * MOON MOVEMENT
     * ==========================================
     */

    const start = 0;
    const end = 0.46;

    const raw = THREE.MathUtils.clamp(
      (progress - start) /
        (end - start),
      0,
      1
    );

    const t =
      raw * raw * (3 - 2 * raw);

    /*
     * Right → left.
     */

    const startX =
      width / 2 + 1.7;

    const leftEdge =
      -(width / 2 + 1.55);

    const x =
      THREE.MathUtils.lerp(
        startX,
        leftEdge,
        t
      );

    /*
     * Curved path.
     */

    const startY =
      height * 0.30;

    const arcHeight =
      height * 0.30;

    const y =
      startY +
      Math.sin(t * Math.PI) *
        arcHeight -
      t * height * 0.42;

    moonRef.current.position.set(
      x,
      y,
      -20
    );

    /*
     * ==========================================
     * SLOW MOON FADE
     *
     * Starts fading at 72% of its journey.
     * Completely gone at 100%.
     * ==========================================
     */

    const fadeStart = 0.72;

    let opacity = 1;

    if (raw > fadeStart) {
      const fade =
        (raw - fadeStart) /
        (1 - fadeStart);

      /*
       * Smooth fade.
       */
      const smoothFade =
        fade * fade *
        (3 - 2 * fade);

      opacity =
        1 - smoothFade;
    }

    moonRef.current.material.opacity =
      THREE.MathUtils.clamp(
        opacity,
        0,
        1
      );

    /*
     * Constant size.
     */

    moonRef.current.scale.setScalar(1.5);

    moonRef.current.rotation.y += 0.0003;
  });

  return (
    <mesh
      ref={moonRef}
      position={[0, 0, -20]}
    >
      <sphereGeometry
        args={[1.55, 96, 96]}
      />

      <meshStandardMaterial
        map={texture}
        roughness={1}
        metalness={0}
        transparent
        opacity={1}
      />
    </mesh>
  );
}