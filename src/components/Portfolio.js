import React from "react";
import styled from "styled-components";

import Banner from "./Banner";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import Projects from "./Projects";
import Logos from "./Logos";

function Portfolio() {
  return (
    <Wrapper>
      <Banner id="home" />
      <About id="about" />
      <Services id="services" />
      <Projects id="projects" />
      <Logos />
      <Contact id="contact" />
    </Wrapper>
  );
}

export default Portfolio;

const Wrapper = styled.div`
  .container {
    width: 100%;
    margin: 0 auto;
    /* max-width: var(--max-width); */
  }
`;
