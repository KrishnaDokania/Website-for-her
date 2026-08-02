import { Stars } from "@react-three/drei";

export default function Galaxy() {

    return (

        <Stars

            radius={180}

            depth={80}

            count={8000}

            factor={7}

            saturation={0}

            fade

            speed={0.5}

        />

    );

}