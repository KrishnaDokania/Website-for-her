import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Galaxy from "./Galaxy";
import Moon from "./Moon";

export default function UniverseCanvas(){

return(

<div className="absolute inset-0 -z-10">

<Canvas camera={{position:[0,0,8]}}>

<ambientLight intensity={1}/>

<pointLight position={[5,5,5]} intensity={5}/>

<Galaxy/>

<Moon/>

<OrbitControls

enableZoom={false}

enablePan={false}

autoRotate

autoRotateSpeed={0.08}

/>

</Canvas>

</div>

);

}