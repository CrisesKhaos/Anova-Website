import "./Curve.css";
import ParticleImage from "react-particle-image";
import img from "../../assets/react.svg";
function Curve() {
 
  return (
    <ParticleImage
      src={img}
      scale={0.75}
      entropy={20}
      maxParticles={4200}
      particleOptions={particleOptions}
    />
  );
}

export default Curve;
