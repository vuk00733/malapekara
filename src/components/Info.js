import React, { useEffect } from "react";
import "../components/css/Info.css";
import AOS from "aos";
import "aos/dist/aos.css";
function Info({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  img,
  alt,
  imgStart,
  tilt,
}) {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div
        className={
          lightBg ? "home__hero-section light" : "home__hero-section darkBg"
        }
      >
        <div className="cnt">
          <div
            className="row home__hero-row"
            style={{
              display: "flex",
              flexDirection: imgStart === "start" ? "row-reverse" : "row",
            }}
          >
            <div className="col">
              <div className="home__hero-text-wrapper">
                <div className="top-line">{topLine}</div>
                <h1
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                  data-aos-once="true"
                  className={lightText ? "heading" : "heading dark"}
                >
                  {headline}
                </h1>
                <p
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                  data-aos-once="true"
                  className={
                    lightTextDesc
                      ? "home__hero-subtitle"
                      : "home__hero-subtitle dark"
                  }
                >
                  {description}
                </p>
              </div>
            </div>
            <div className="col">
              <div data-aos="flip-left" className="home__hero-img-wrapper">
                <img src={img} alt={alt} className="home__hero-img" />
              </div>
            </div>
          </div>
        </div>
        <div className="cont">
          <div  data-aos="flip-right"className="about-headline">{headline}</div>
          <div data-aos="flip-right" className="about-description">{description}</div>
          <img data-aos="flip-left" src={img} alt={alt} className="about-img" />
        </div>
      </div>
    </>
  );
}

export default Info;
