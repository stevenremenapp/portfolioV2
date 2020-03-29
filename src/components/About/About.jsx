import React, { Component } from "react";
import "./About.css";

class About extends Component {
  render() {
    return (
      <main className="about-container">
        <h1>Hello.</h1>
        <p>
          My name is Steve, and I&apos;m a front-end developer. I am using this
          as a learning and publishing experiment. I mainly work in Vue and
          haven&apos;t worked with React in about a year. In addition to jumping back into React, I&apos;m also curious
          about Gatsby, and generally want to document things I&apos;m learning.
        </p>
        <p>
          The goal of this experiment is to work and
          {" "}
          <a
            href="https://www.swyx.io/writing/learn-in-public/"
            target="_blank"
            rel="noopener noreferrer"
          >
            learn in public
          </a>
          . I figure that if I put out unfinished projects into the world, I&apos;ll want to work more efficiently to finish and document them. 😁
        </p>
      </main>
    );
  }
}

export default About;
