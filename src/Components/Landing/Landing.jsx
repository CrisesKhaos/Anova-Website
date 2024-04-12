import Spline from "@splinetool/react-spline";
import "./Landing.css";
import { forwardRef, useState } from "react";
import useMediaQuery from "../Events/useMediaQuery";

const Landing = forwardRef(function Landing(props, ref) {
  const [isLoading, setIsLoading] = useState(true);
  const matches = useMediaQuery("(max-width:500px)");
  return (
    <div ref={ref} id="landID">
      <div className={isLoading ? "loader-container" : "hide-div"}>
        <div class="loader">
          <span className="orb"></span>
        </div>
      </div>
      <Spline
        scene={
          matches
            ? "https://prod.spline.design/dc1euGs1-MkPW3pn/scene.splinecode"
            : "https://prod.spline.design/5HucqJ0gLf32PSF8/scene.splinecode"
        }
        onLoad={() => {
          setIsLoading(false);
        }}
      />
    </div>
  );
});

export default Landing;
