import { Sphere } from "@react-three/drei";

export default function Moon() {

    return (

        <Sphere

            args={[2,64,64]}

            position={[7,4,-8]}

        >

            <meshStandardMaterial

                color="#ffffff"

                emissive="#ffffff"

                emissiveIntensity={1.5}

            />

        </Sphere>

    );

}