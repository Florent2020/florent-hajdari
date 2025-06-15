import React from "react";
import styled from "styled-components";
import bannerImage from "../assets/banner.jpg";
import myself from "../assets/myself.jpg";
import { Col, Row } from "react-bootstrap";

function Banner({ id }) {
  return (
    <Wrapper id={id}>
      <div className="container">
        <Row>
          <Col xs={12} md={6} className="first-col">
            <div className="info">
              <h2>Hi, I'm Florent Hajdari</h2>
              <h1>Freelancer</h1>
              <p>
                I love to design and develop websites. I can <b>code</b> you a
                modern & attractive website. Please don't hesitate to contact me
                below!
              </p>
              <div>
                <a href="#contact">
                  <button type="button">Contact</button>
                </a>
                <a href="#projects">
                  <button type="button">Projects</button>
                </a>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <img src={myself} alt="myself" />
          </Col>
        </Row>
      </div>
    </Wrapper>
  );
}

export default Banner;

const Wrapper = styled.section`
  position: relative;
  padding: 7rem 0 2rem;
  background-image: linear-gradient(rgba(6, 31, 36, 0.9), rgba(6, 31, 36, 0.9)),
    url(${bannerImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  height: 600px;

  .container {
    width: 90%;
    margin: 0 auto;
  }

  .row {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }

  .first-col {
    position: relative;
    padding-left: 0;
    padding-right: 0;
  }

  .info {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(0, -50%);
    box-sizing: border-box;
  }

  /* .banner {

  }  */

  h1,
  h2,
  p {
    color: white;
  }

  h1 {
    font-family: "Rock Salt", cursive;
    font-size: 60px;
    margin: 20px 0;
    letter-spacing: 2.5px;
  }

  h2 {
    font-size: 30px;
    margin-bottom: 0;
    letter-spacing: 1px;
    font-weight: 500;
  }

  p {
    max-width: 630px;
    font-size: 20px;
    margin: 30px 0;
  }

  a:first-child button {
    border: 2px solid #1e7f62;
    background-color: #1e7f62;
  }

  button {
    margin-right: 1rem;
    padding: 0.75rem 1.5rem;
    border: 2px solid #1e7f62;
    border-radius: 0;
    background-color: #1e7f62;
    text-transform: uppercase !important;
    letter-spacing: 1px;
    color: white;
    cursor: pointer;
  }

  button:first-child:hover {
    background-color: #01181d;
    transition: background 0.3s ease;
  }

  button:last-child {
    background-color: transparent;
    border: 2px solid #1e7f62;
  }

  .col-md-6:last-child {
    text-align: center;
    /* align-content: center; */

    img {
      width: 60%;
      border-radius: 50%;
      filter: grayscale(1);
      opacity: 0.7;
    }
  }

  @media screen and (max-width: 768px) {
    height: auto;
    padding-top: 30px;

    .container {
      width: 100%;
      max-width: 100% !important;
      padding-left: 25px;
      padding-right: 25px;
    }

    .row {
      margin-left: 0 !important;
      margin-right: 0 !important;
    }

    .col-12,
    .col-md-6 {
      padding-left: 0;
      padding-right: 0;
      max-width: 100% !important;
      width: 100% !important;
    }

    .info {
      position: relative;
      top: 0;
      left: 0;
      transform: none;
    }

    h1 {
      font-size: 35px;
    }

    .col-md-6:last-child img {
      display: none;
    }
  }

  /* TABLET: 769px–1024px */
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    height: auto;
    padding: 4rem 0;

    .info {
      position: relative;
      transform: none;
      top: 0;
    }

    h1 {
      font-size: 45px;
    }

    h2 {
      font-size: 26px;
    }

    p {
      font-size: 18px;
    }

    .col-md-6:last-child img {
      width: 70%;
    }
  }

  /* SMALL LAPTOPS: 1025px–1200px */
  @media screen and (min-width: 1025px) and (max-width: 1200px) {
    .info {
      h1 {
        font-size: 50px;
      }

      p {
        font-size: 18px;
      }
    }

    .col-md-6:last-child img {
      width: 65%;
    }
  }
`;
