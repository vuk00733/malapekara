import React from "react";
import Info from "../components/Info";
import "../components/css/Info.css";
import { homeObjOne, homeObjTwo, homeObjThree } from "../components/Data";

export default function Contact() {
  return (
    <>
      <Info {...homeObjOne} />
      <Info {...homeObjTwo} />
      <Info {...homeObjThree} />
    </>
  );
}
