import React from "react";
import "../css/home.css";
import { githubUrl } from "../../constants";

export const Home = () => {
  
  return (
    <div className="home">
      <h1> Hi, my name is </h1>
      <h2>Grant Growcott</h2>
      <h5>I build mobile applications.</h5>
      <p>
        I am a freelance front-end developer with expertise in crafting
        exceptional digital experiences. My focus extends beyond code, as I also
        engage in the creative aspects of design. I am dedicated to delivering
        high-quality and innovative solutions that enhance user interactions and
        create memorable mobile journeys. Currently I am focused on building
        mobile applications in React Native using Expo.
      </p>
      <h6>
        <a href={githubUrl} className="github-btn" rel="noopener noreferrer">
          Check out my Github!
        </a>
      </h6>
    </div>
  );
};
