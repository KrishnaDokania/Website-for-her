import { useMemo } from "react";

export default function StarField() {

    const stars = useMemo(() => {

        const vertices = [];

        for(let i=0;i<12000;i++){

            vertices.push(

                (Math.random()-0.5)*300,
                (Math.random()-0.5)*300,
                (Math.random()-0.5)*300

            );

        }

        return new Float32Array(vertices);

    },[]);

    return (

        <points>

            <bufferGeometry>

                <bufferAttribute

                    attach="attributes-position"

                    count={stars.length/3}

                    array={stars}

                    itemSize={3}

                />

            </bufferGeometry>
<pointsMaterial
   size={0.012}
    color="#ffffff"
    transparent
    opacity={0.9}
    sizeAttenuation
/>

        </points>

    );

}