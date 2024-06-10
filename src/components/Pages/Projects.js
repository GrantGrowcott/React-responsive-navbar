import React from "react";
import "../css/projects.css";
import { FaGithub, FaFolder } from "react-icons/fa";


export const Projects = () => {
  return (
    <div>
      <h2>My Projects</h2>
      <div class="projects__content">
        <div class="project project1">
          <a
            href="https://github.com/GrantGrowcott/Water-Project"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="project__container">
              <div class="project__inner">
                <FaFolder className="icon" />
                <FaGithub className="icon" />
              </div>
              <div className="project__title">
                <h1>Water Intake Application with Native React</h1>
              </div>
              <h5>
                Water consumption tracker using react native that records data
                in a calendar to view over time
              </h5>
              <div className="project__stack">
                <h5 className="word">Typescript</h5>
                <h5 className="word">Firebase</h5>
              </div>
            </div>
          </a>
        </div>
        <div class="project project2">
          <a
            href="https://github.com/GrantGrowcott/Pomodoro-Project"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="project__container">
              <div class="project__inner">
                <FaFolder className="icon" />
                <FaGithub className="icon" />
              </div>
              <div className="project__title">
                <h1>Pomodoro App</h1>
              </div>
              <h5>
                Interval based productivity application used to increase
                efficiently
              </h5>
              <div className="project__stack">
                <h5 className="word">Typescript</h5>
                <h5 className="word">React Native</h5>
              </div>
            </div>
          </a>
        </div>
        <div class="project project3">
          <a
            href="https://github.com/GrantGrowcott/Sound-Project"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="project__container">
              <div class="project__inner">
                <FaFolder className="icon" />
                <FaGithub className="icon" />
              </div>
              <div className="project__title">
                <h1>Ear Elite </h1>
              </div>
              <h5>
                Hearing application used to test the users hearing ability and
                compete with friends and family
              </h5>
              <div className="project__stack">
                <h5 className="word">Typescript</h5>
                <h5 className="word">Firebase</h5>
                <h5 className="word"> React Native</h5>
              </div>
            </div>
          </a>
        </div>
        <div class="project project4">
        <a
            href="https://github.com/GrantGrowcott/weather"
            target="_blank"
            rel="noopener noreferrer"
          >
          <div class="project__container">
            <div class="project__inner">
              <FaFolder className="icon" />
              <FaGithub className="icon" />
            </div>
            <div className="project__title">
              <h1>Weather App</h1>
            </div>
            <h5>
              Displays current weather in global locations using weather API
            </h5>
            <div className="project__stack">
              <h5 className="word">Typescript</h5>
              <h5 className="word">Firebase</h5>
              <h5 className="word">React Native </h5>
            </div>
          </div>
          </a>
        </div>
        <div class="project project5">
        <a
            href="https://github.com/GrantGrowcott/Calculator-Native-React"
            target="_blank"
            rel="noopener noreferrer"
          >
          <div class="project__container">
            <div class="project__inner">
              <FaFolder className="icon" />
              <FaGithub className="icon" />
            </div>
            <div className="project__title">
              <h1>Calculator</h1>
            </div>
            <h5>Simple Calculator in Typescript</h5>
            <div className="project__stack">
              <h5 className="word">Typescript</h5>
              <h5 className="word">React Native</h5>
            </div>
          </div>
          </a>
        </div>
        <div class="project project6">
        <a
            href="https://github.com/GrantGrowcott/Banner-Project"
            target="_blank"
            rel="noopener noreferrer"
          >
          <div class="project__container">
            <div class="project__inner">
              <FaFolder className="icon" />
              <FaGithub className="icon" />
            </div>
            <div className="project__title">
              <h1>Banner Application</h1>
            </div>
            <h5>
               React Native application that uses special effect on scrolling text for concerts and other venues. Includes unique animations produced in Rive.
            </h5>
            <div className="project__stack">
              <h5 className="word">Typescript</h5>
              <h5 className="word">Firebase</h5>
            </div>
          </div>
          </a>
        </div>
      </div>
    </div>
  );
};
