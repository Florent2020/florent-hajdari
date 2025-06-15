import React from "react";
import styled, { keyframes } from "styled-components";

// Logos Array
import html from "../assets/logos/html.png";
import css from "../assets/logos/css.png";
import js from "../assets/logos/js.png";
import sass from "../assets/logos/sass.png";
import react from "../assets/logos/react.png";
import vscode from "../assets/logos/vscode.png";
import xd from "../assets/logos/xd.png";
import figma from "../assets/logos/figma.png";
import bootstrap from "../assets/logos/bootstrap.png";
import github from "../assets/logos/github.png";
import wordpress from "../assets/logos/wordpress.png";
import autocad from "../assets/logos/autocad.png";

// Keyframes must be declared BEFORE use
const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

// Styled SlideTrack for hover-pause
const SlideTrack = styled.div`
  display: flex;
  width: calc(180px * 24);
  animation: ${scroll} 40s linear infinite;
  animation-play-state: running;

  .slider:hover & {
    animation-play-state: paused;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: calc(120px * 24);
  }

  @media (max-width: 480px) {
    width: calc(100px * 24);
  }
`;

const Wrapper = styled.section`
  padding: 1rem 0;
  background-color: #0e2d33;

  .container {
    overflow: hidden;
    width: 100vw;
    max-width: 1200px;
    margin: 0 auto;
  }

  .slider {
    overflow: hidden;
    position: relative;

    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 0;
      width: 120px;
      height: 100%;
      z-index: 2;
      pointer-events: none;
    }

    &::before {
      left: 0;
      background: linear-gradient(to right, #0e2d33, transparent);
    }

    &::after {
      right: 0;
      background: linear-gradient(to left, #0e2d33, transparent);
    }
  }

  .slide {
    width: 180px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .slide img {
    height: 50px;
    width: auto;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    .slide {
      width: 120px;
      height: 100px;
    }

    .slide img {
      height: 60px;
    }
  }

  @media (max-width: 480px) {
    .slide {
      width: 100px;
      height: 80px;
    }

    .slide img {
      height: 50px;
    }
  }
`;

const logos = [
  html,
  css,
  js,
  sass,
  react,
  vscode,
  xd,
  figma,
  bootstrap,
  github,
  wordpress,
  autocad,
];

// Duplicate for infinite scroll
const loopLogos = [...logos, ...logos];

function Logos({ id }) {
  return (
    <Wrapper id={id}>
      <div className="container">
        <div className="slider">
          <SlideTrack>
            {loopLogos.map((logo, index) => (
              <div className="slide" key={index}>
                <img src={logo} alt={`logo-${index}`} />
              </div>
            ))}
          </SlideTrack>
        </div>
      </div>
    </Wrapper>
  );
}

export default Logos;
