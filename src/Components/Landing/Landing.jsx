import Spline from "@splinetool/react-spline";
import "./Landing.css";
import { Suspense, useState } from "react";
import useMediaQuery from "../Events/useMediaQuery";

import useSpline from "@splinetool/r3f-spline";

export default function Landing() {
  const [isLoading, setIsLoading] = useState(true);
  const matches = useMediaQuery("(max-width:500px)");

  const { nodes, materials } = useSpline(
    matches
      ? "https://prod.spline.design/dc1euGs1-MkPW3pn/sceneS.splinecode"
      : "https://prod.spline.design/5HucqJ0gLf32PSF8/scene.splinecode"
  );
  return (
    <div>
      <group clsdispose={null}>
        <mesh
          name="Rectangle"
          geometry={nodes.Rectangle.geometry}
          material={materials["Rectangle Material"]}
        />
      </group>
    </div>
  );
}
