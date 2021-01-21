import { React, useEffect } from "react";
import "./css/Hero.css";
import logo from "./images/hleb.jpg";
import video from "./video/video.mp4";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div className="container">
      <img
        src={logo}
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        data-aos-once="true"
        className="box2"
      />
      <video
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        data-aos-once="true"
        src={video}
        className="box1"
        autoPlay
        loop
        muted
      ></video>
      <div
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
        data-aos-once="true"
        className="box3"
      >
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
      </div>
    </div>
  );
}
