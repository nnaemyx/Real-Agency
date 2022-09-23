import React from "react";
import { hero } from "../data";

const Hero = () => {
  const { title, subtitle, buttonText1, buttonText2, image } = hero;
  return (
    <div className="pl-[2.5rem] mx-auto">
        <div className="flex">
            <div>
                <h1>{title}</h1>
                <p>{subtitle}</p>
                <button>{buttonText1}</button>
                <button>{buttonText2}</button>
            </div>
            <div>
                <img src={image.type} alt="hero" />
            </div>
        </div>
    </div>
  );
};

export default Hero;
