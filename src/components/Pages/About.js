import React from "react";
import "../css/about.css";
import { html, css, js, ts, react, profile } from "../../constants";

const About = () => {
  return (
    <div className="about">
      <div className="about__section">
        <div className="about__info">
          <div className="about__content">
            <h2>About Me</h2>
            <p>
              I enjoy creating amazing websites and immersive mobile application experiences for you! My interest in web
              development began in 2020 when viewing my brokerage account and deciding that the layout and features
              offered were limited but could be fixed with the proper direction. My main focus today is building mobile
              apps for android and iOS using React Native. I also make simple and inviting websites for restaurants and
              other small businesses. Here are a few languages that I have been working with recently:
            </p>
          </div>
          <div className="about__coding">
            <img src={html} alt=" html logo" />
            <img src={css} alt="css logo" />
            <img src={js} alt=" javascript logo" />
            <img src={ts} alt=" typscript logo" />
            <img src={react} alt=" react logo" />
          </div>
        </div>
      </div>
      <div className="about__image">
        <div className="about__profile">
          <img src={profile} alt="profile of Grant Growcott" />
        </div>
      </div>
    </div>
  );
};

export default About;
