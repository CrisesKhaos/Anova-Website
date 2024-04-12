import React, { forwardRef, useState } from "react";
import "./Events.css";
import Slider from "react-slick";
import { useInView } from "react-intersection-observer";
import useMediaQuery from "./useMediaQuery";

const Events = forwardRef(function Hi(props, ref) {
  const matches = useMediaQuery("(max-width:500px)");
  const { ref: headref, inView } = useInView();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: matches ? 1 : 3,
    slidesToScroll: 1,
  };
  const [pastEvents, setpastEvents] = useState(true);

  return (
    <div className="events-container" id="eventsID">
      <div
        className={inView ? "events-heading" : "events-heading-prev"}
        ref={headref}
      >
        //Events
      </div>
      <div ref={ref}>
        <Slider {...settings}>
          <div className="card">
            <div className="card-image"></div>
            <p className="card-title">Upcominggggg</p>
            <p className="card-body">
              Nullam ac tristique nulla, at convallis quam. Integer consectetur
              mi nec magna tristique, non lobortis.
            </p>
            <p className="footer">
              Written by <span className="by-name">John Doe</span> on
              <span className="date">25/05/23</span>
            </p>
          </div>

          <div className="card">
            <div className="card-image"></div>
            <p className="card-title">Card title</p>
            <p className="card-body">
              Nullam ac tristique nulla, at convallis quam. Integer consectetur
              mi nec magna tristique, non lobortis.
            </p>
            <p className="footer">
              Written by <span className="by-name">John Doe</span> on{" "}
              <span className="date">25/05/23</span>
            </p>
          </div>

          <div className="card">
            <div className="card-image"></div>
            <p className="card-title">Card title</p>
            <p className="card-body">
              Nullam ac tristique nulla, at convallis quam. Integer consectetur
              mi nec magna tristique, non lobortis.
            </p>

            <p className="footer">
              Written by <span className="by-name">John Doe</span> on{" "}
              <span className="date">25/05/23</span>
            </p>
          </div>

          <div className="card">
            <div className="card-image"></div>
            <p className="card-title">Card title</p>
            <p className="card-body">
              Nullam ac tristique nulla, at convallis quam. Integer consectetur
              mi nec magna tristique, non lobortis.
            </p>
            ``
            <p className="footer">
              Written by <span className="by-name">John Doe</span> on{" "}
              <span className="date">25/05/23</span>
            </p>
          </div>
        </Slider>
      </div>
    </div>
  );
});

export default Events;
