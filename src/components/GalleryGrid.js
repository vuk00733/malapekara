import React from "react";
import "../components/css/GalleryGrid.css";
import pic1 from "../components/images/grid1.jpg";
import pic2 from "../components/images/grid2.jpg";
import pic3 from "../components/images/grid3.jpg";
import pic4 from "../components/images/grid4.jpg";
import pic5 from "../components/images/grid5.jpg";
import pic6 from "../components/images/grid6.jpg";
import pic7 from "../components/images/grid7.jpg";
import pic8 from "../components/images/grid8.jpg";

function GalleryGrid() {
  return (
    <div className="photo-grid">
      <img className="cd card-tall card-wide" src={pic1}></img>
      <img className="cd card-tall " src={pic2}></img>
      <img className="cd " src={pic8}></img>
      <img className="cd " src={pic3}></img>
      <img className="cd " src={pic4}></img>
      <img className="cd " src={pic5}></img>
      <img className="cd card-wide" src={pic6}></img>
      <img className="cd " src={pic7}></img>
      <img className="cd card-tall" src={pic8}></img>
      <img className="cd card-tall" src={pic6}></img>
      <img className="cd " src={pic3}></img>
      <img className="cd " src={pic2}></img>
      <img className="cd " src={pic1}></img>
    </div>
  );
}

export default GalleryGrid;
