import UniverseCanvas from "../../components/scene/UniverseCanvas";

export default function UniverseScene(){

return(

<div className="absolute inset-0">

<UniverseCanvas/>

<div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#020617]" />

</div>

);

}