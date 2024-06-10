import React from "react";
import "../css/reads.css";
import {
  story,
  time,
  dhando,
  principles,
  charlie,
  rule,
  rich,
  outlive,
  ultra,
  storytelling,
  makeTime,
  dhandoBook,
  principlesBook,
  charlieBook,
  ruleBook,
  richerBook,
  outliveBook,
  learningBook,
} from "../../constants";

export const Reads = () => {
  return (
    <div className="reads">
      <div className="reads__title">
        <h2 className="reads__heading">My Reads</h2>
      </div>
      <div className="reads__outerContainer">
        <div className="reads__container">
          <div>
            <div className="reads__content">
              <a href={storytelling}>Storytelling with Data</a>
              <div class="reads__link">
                <h5>By:Cole Knaflic</h5>
              </div>
            </div>
            <p>
              This book has been crucial to my understanding of graph representation. Each chapter adds to the next as I
              gained a greater understanding for where a persons eyes attract and what aspects of a visualization can
              take away from the ultimate conclusion. This is a staple for any beginners data analyst interested in
              honing their data visualization skills.
            </p>
          </div>
          <div className="reads__image">
            <img className="image-size" src={story} alt="storytelling book cover" />
          </div>
        </div>
        <div className="reads__container">
          <div>
            <div class="reads__content">
              <a href={makeTime}>Make Time</a>
              <div class="reads__link">
                <h5>By: Jake Knapp and John Zeratsky</h5>
              </div>
            </div>
            <p>
              Being efficient with your time is important, whether you are working for a business or you are self
              employed. This book will give you small tips and entire systems to reduce distraction, while still
              allowing you to have a well rounded life outside of work.
            </p>
          </div>
          <div className="reads__image">
            <img className="image-size" src={time} alt="make time book cover" />
          </div>
        </div>
        <div className="reads__container">
          <div>
            <div class="reads__content">
              <a href={dhandoBook}>The Dhando Investor</a>
              <div class="reads__link">
                <h5>By: Mohnish Pabrai</h5>
              </div>
            </div>
            <p>
              Arguably one of the greatest investment books I have read in my life. Through a combination of anecdotes
              and real world calculations, Mohnish Pabrai creates the ideal framework for investors to maximize returns
              while simultaneously reducing the probability of capital loss. A staple of any investors library.
            </p>
          </div>
          <div className="reads__image">
            <img className="image-size" src={dhando} alt="The dhando investor book cover" />
          </div>
        </div>
        <div className="reads__container">
          <div>
            <div class="reads__content">
              <a href={principlesBook}>Principles</a>
              <div class="reads__link">
                <h5>By: Ray Dalio</h5>
              </div>
            </div>
            <p>
              This book starts out with the path Ray Dalio takes to create the behemoth that is now Bridgewater
              Associates and yet it is so much more than macroeconomic theory and stock advise. This book gives a person
              the tools to solve small and large problems of life in a format that allows the reader to connect complex
              mental models together. A must read for anyone, no matter your stage of life to find true happiness.
            </p>
          </div>
          <div className="reads__image">
            <img className="image-size" src={principles} alt="principles book cover" />
          </div>
        </div>
        <div className="reads__container">
          <div>
            <div class="reads__content">
              <a href={charlieBook}>Poor Charlie's Almanack</a>
              <div class="reads__link">
                <h5>By: Charlie Munger</h5>
              </div>
            </div>
            <p>
              Written by one of the greatest investors and thinker of the 20th and 21st century, Charlie takes the
              reader through his life lessons as a meteorologist, lawyer and eventual legendary investor. His mental
              models are a key part of every decision I make today for investing, but also for major life decisions.
            </p>
          </div>
          <div className="reads__image">
            <img className="image-size" src={charlie} alt="Poor Charlie's Almanack book cover" />
          </div>
        </div>
        <div className="reads__container">
          <div>
            <div class="reads__content">
              <a href={ruleBook}>Rule #1</a>
              <div class="reads__link">
                <h5>By: Phil Town</h5>
              </div>
            </div>
            <p>
              A riverboat guide turned fund manager, Phil Town summarizes the core tenants of the great Warren Buffet
              into four simple categories: Meaning, Moat, Management and Margin of Safety. I base my entire investment
              philosophy on this book and commend Phil Town for his powerful insights. I would reccommend this book to any
              novice investor looking to start their journey, or expert investor seeking a fresh perspective.
            </p>
          </div>
          <div className="reads__image">
            <img className="image-size" src={rule} alt="Rule #1 book cover" />
          </div>
        </div>
        <div className="reads__container">
          <div>
            <div class="reads__content">
              <a href={richerBook}>Richer, Wiser, Happier</a>
              <div class="reads__link">
                <h5>By: William Green</h5>
              </div>
            </div>
            <p>
              Journalist William Green interviews some of the greatest investors of the last 100 years to see what makes
              them tick and how they generate returns that significantly exceed the market. From John Templeton doing
              aerobics in the Bahamas to the stoic Charlie Munger, William brings an exciting take on the mundane habits
              of the greats. A must read for investors at any stage.
            </p>
          </div>
          <div className="reads__image">
            <img className="image-size" src={rich} alt="Richer Wiser Happier book cover" />
          </div>
        </div>
        <div className="reads__container">
          <div>
            <div class="reads__content">
              <a href={outliveBook}>Outlive: The Science and Art of Longevity</a>
              <div class="reads__link">
                <h5>By: Peter Attia</h5>
              </div>
            </div>
            <p>
              In an age of rampant chronic disease, the average person seeks answers to staying healthy throughout their
              life in a vast sea of information. Dr. Attia addresses these concerns through lifestyle changes that
              include: exercise tips, proper dietary habits and the correct conditons for restful sleep. I have
              integrated his teachings into my own lifestyle in the hopes of improving/mainting my health for the
              longterm.
            </p>
          </div>
          <div className="reads__image">
            <img className="image-size" src={outlive} alt="Richer Wiser Happier book cover" />
          </div>
        </div>
        <div className="reads__container">
          <div>
            <div class="reads__content">
              <a href={learningBook}>Ultralearning</a>
              <div class="reads__link">
                <h5>By: Scott H. Young</h5>
              </div>
            </div>
            <p>
              As a person that prides myself on independent learning, this book allowed me to step up the efficiency
              of my learning process significantly. Through anecdotes and data,Scott create an inspiring framework to
              learn anything you could want. I have begun using these techniques while learning software engineering and
              Spanish with tremendous results.
            </p>
          </div>
          <div className="reads__image">
            <img className="image-size" src={ultra} alt="Richer Wiser Happier book cover" />
          </div>
        </div>
      </div>
    </div>
  );
};
