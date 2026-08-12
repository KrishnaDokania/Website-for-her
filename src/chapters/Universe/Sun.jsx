import { useRef } from "react";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import * as THREE from "three";

export default function Sun({ progress = 0 }) {
  const sunRef = useRef(null);

  const { camera } = useThree();

  const texture = useLoader(
    THREE.TextureLoader,
    "/textures/sun/sun_surface.jpeg"
  );

  useFrame(() => {
    if (!sunRef.current) return;

    /*
     * =========================================
     * VIEWPORT
     * =========================================
     */

    const distance = 18;

    const height =
      2 *
      Math.tan(
        THREE.MathUtils.degToRad(
          camera.fov / 2
        )
      ) *
      distance;

    const width =
      height * camera.aspect;


    /*
     * =========================================
     * SUN TIMELINE
     *
     * Moon fades while Sun begins appearing.
     * =========================================
     */

    const start = 0.38;
    const end = 0.92;

    const raw = THREE.MathUtils.clamp(
      (progress - start) /
        (end - start),
      0,
      1
    );

    /*
     * Smooth movement.
     */

    const t =
      raw *
      raw *
      (3 - 2 * raw);


    /*
     * =========================================
     * RIGHT → LEFT
     * =========================================
     */

    const rightEdge =
      width / 2 + 1.5;

    const leftEdge =
      -(width / 2 + 1.5);

    const x =
      THREE.MathUtils.lerp(
        rightEdge,
        leftEdge,
        t
      );


    /*
     * =========================================
     * CURVED PATH
     * =========================================
     */

    const lowestY =
      -height * 0.30;

    const arcHeight =
      height * 0.72;

    const y =
      lowestY +
      Math.sin(t * Math.PI) *
        arcHeight;


    sunRef.current.position.set(
      x,
      y,
      -18
    );


    /*
     * =========================================
     * CONSTANT SIZE
     * =========================================
     */

    sunRef.current.scale.setScalar(1.2);


    /*
     * =========================================
     * SUN FADE IN
     * =========================================
     */

    const fadeInStart = 0.38;
    const fadeInEnd = 0.55;

    let opacity = 0;

    if (progress >= fadeInStart) {
      const fade =
        THREE.MathUtils.clamp(
          (progress - fadeInStart) /
            (fadeInEnd - fadeInStart),
          0,
          1
        );

      /*
       * Smooth fade.
       */

      opacity =
        fade *
        fade *
        (3 - 2 * fade);
    }


    /*
     * =========================================
     * SUN FADE OUT
     *
     * Only after reaching the left side.
     * =========================================
     */

    const fadeOutStart = 0.95;

    if (progress > fadeOutStart) {
      const fade =
        THREE.MathUtils.clamp(
          (progress - fadeOutStart) /
            (1 - fadeOutStart),
          0,
          1
        );

      const smoothFade =
        fade *
        fade *
        (3 - 2 * fade);

      opacity *=
        1 - smoothFade;
    }


    sunRef.current.material.opacity =
      opacity;


    /*
     * =========================================
     * 3D SURFACE ROTATION
     *
     * Extremely slow.
     *
     * This makes the texture feel like a
     * real spherical surface.
     * =========================================
     */

    sunRef.current.rotation.y +=
      0.00025;
  });


  return (
   <mesh
  ref={sunRef}
  position={[20, -10, -18]}
>
  <sphereGeometry
    args={[1.5, 128, 128]}
  />

  <meshStandardMaterial
    map={texture}
    roughness={0.8}
    metalness={0}

    emissiveMap={texture}
    emissive="#FFD36A"
    emissiveIntensity={20}

    transparent
    opacity={0}

    toneMapped={false}
  />
</mesh>
  );
}