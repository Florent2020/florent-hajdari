import React from "react";
import styled from "styled-components";
import me from "../assets/me.jpg";
import { Col, Row } from "react-bootstrap";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

function About({ id }) {
  return (
    <Wrapper id={id}>
      <div className="container">
        <Row>
          <Col xs={12} md={5}>
            <img src={me} alt="myself" />
          </Col>
          <Col xs={12} md={7}>
            <div className="info">
              <h2>My Bio</h2>
              <h1>A UI Designer & Web Developer based in Norway</h1>
              <p>
                I love to design and develop websites. I can <b>code</b> you a
                modern & attractive website. Please don't hesitate to contact me
                below and we will discuss your projects!
              </p>
              <hr />
              <div className="personal-info">
                <Row>
                  <Col xs={7} md={6}>
                    <h4>
                      <Row>
                        <Col xs={12} md={2}>
                          <h5>
                            <b>Name:</b>
                          </h5>
                        </Col>
                        <Col xs={12} md={6}>
                          <h5>Florent Hajdari</h5>
                        </Col>
                      </Row>
                    </h4>
                  </Col>
                  <Col xs={5} md={6}>
                    <h4>
                      <Row>
                        <Col xs={12} md={2}>
                          <h5>
                            <b>State:</b>
                          </h5>
                        </Col>
                        <Col xs={12} md={6}>
                          <h5>Norway</h5>
                        </Col>
                      </Row>
                    </h4>
                  </Col>
                </Row>
                <Row>
                  <Col xs={7} md={6}>
                    <h4>
                      <Row>
                        <Col xs={12} md={2}>
                          <h5>
                            <b>Email:</b>
                          </h5>
                        </Col>
                        <Col xs={12} md={6}>
                          <h5>florent.hajdari@hotmail.com</h5>
                        </Col>
                      </Row>
                    </h4>
                  </Col>
                  <Col xs={5} md={6}>
                    <h4>
                      <Row>
                        <Col xs={12} md={2}>
                          <h5>
                            <b>Phone:</b>
                          </h5>
                        </Col>
                        <Col xs={12} md={6}>
                          <h5>+47 930 77 286</h5>
                        </Col>
                      </Row>
                    </h4>
                  </Col>
                </Row>
              </div>
              <div className="social-media">
                <p>
                  <b>Follow me on</b>
                </p>
                <FaFacebook />
                <FaGithub />
                <FaLinkedin />
              </div>
              <div>
                <a href="#contact">
                  <button type="button">Contact</button>
                </a>
                <a href="/CV.pdf" target="_blank" rel="noopener noreferrer">
                  <button type="button">Download CV</button>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Wrapper>
  );
}

export default About;

const Wrapper = styled.section`
  position: relative;
  padding: 5rem 0;
  background-color: #f3f3f3;

  .container {
    width: 100%;
    margin: 0 auto;
  }

  .row {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }

  h1,
  h2,
  p {
    color: black;
  }

  h1 {
    font-family: "Rock Salt", cursive;
    font-size: 28px;
    margin: 20px 0;
    letter-spacing: 2.5px;
    line-height: 1.5;
  }

  h2 {
    font-size: 18px;
    text-transform: uppercase;
    margin-bottom: 0;
    letter-spacing: 1px;
    font-weight: 500;
  }

  p {
    max-width: 630px;
    font-size: 20px;
    margin: 30px 0;
    color: rgb(61, 61, 61);
  }

  hr {
    margin-bottom: 30px;
  }

  h4,
  h5 {
    font-family: "Dosis", sans-serif;
    font-size: 18px;
    color: rgb(61, 61, 61);
  }

  .social-media {
    display: flex;
    align-items: center;
    margin-top: -5px;

    p {
      margin-right: 30px;
    }

    svg {
      font-size: 18px;
      color: #1e7f62;
      margin-right: 10px;
      cursor: pointer;
    }
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
    border: 2px solid #1a3034;
    background-color: #1a3034;
  }

  .col-md-5:first-child {
    text-align: left;

    img {
      width: 80%;
      height: 550px;
      object-fit: cover;
      border-radius: 10px;
    }
  }

  .col-md-7 {
    position: relative;

    .info {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  .col-md-7,
  .col-7,
  .col-md-6,
  .col-6,
  .col-md-5,
  .col-5,
  .col-md-2,
  .col-2 {
    padding-left: 0;
    padding-right: 0;
  }

  /* 📱 Mobile: stack layout */
  @media screen and (max-width: 768px) {
    .container {
      width: 100%;
      padding: 0 25px;
    }

    .col-md-5:first-child,
    .col-md-7 {
      text-align: left;
    }

    .col-md-5:first-child img {
      width: 100%;
      height: 300px;
      border-radius: 10px;
      object-position: 50% 15%;
    }

    .col-md-7 .info {
      position: relative;
      top: 0;
      transform: none;
      margin-top: 20px;
    }

    h1 {
      font-size: 22px;
    }

    h5 {
      font-size: 15px;
    }

    .social-media {
      justify-content: left;
    }

    button {
      margin-bottom: 1rem;
      width: 100%;
    }
  }

  /* 🧾 Tablets */
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    .container {
      width: 100%;
    }

    .col-md-5:first-child img {
      width: 100%;
      height: 450px;
    }

    .col-md-7 .info {
      position: relative;
      top: 0;
      transform: none;
      margin-top: 20px;
    }

    h1 {
      font-size: 24px;
    }
  }
`;
