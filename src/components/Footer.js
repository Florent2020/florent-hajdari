import React from "react";
import { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Update the year when the component mounts
    setYear(new Date().getFullYear());
  }, []);

  return (
    <Wrapper>
      <footer className="footer">
        <div className="container">
          <Row>
            <Col xs={12} md={6} className="all-rights">
              <p>
                <span>©</span> {` ${year}. All Rights Reserved`} <span>| </span>
                Designed & Developed by <span>Florent Hajdari</span>
              </p>
            </Col>
            <Col xs={12} md={6} className="social-media">
              <div>
                <a
                  href="https://www.facebook.com/florent.hajdari.84"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="facebook">
                    <FaFacebook />
                  </span>
                </a>
                <a
                  href="https://github.com/Florent2020"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    <FaGithub />
                  </span>
                </a>
                <a
                  href="https://www.linkedin.com/in/fhajdari/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    <FaLinkedin />
                  </span>
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </footer>
    </Wrapper>
  );
}

export default Footer;

const Wrapper = styled.footer`
  background-color: #01181d;
  color: #f9f9f9;
  padding: 30px 0;
  font-size: 16px;

  .footer {
    /* display: flex;
    flex-direction: row; */
  }

  .row {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }

  .all-rights {
    display: flex;
    align-items: center;
    padding-left: 0;
    padding-right: 0;
  }

  p {
    margin-bottom: 0;
    letter-spacing: 1px;
    color: #c4c4c4;
  }

  span:nth-of-type(1) {
    font-size: 18px;
  }

  span:nth-of-type(2) {
    font-size: 19px;
    color: #5eb88e;
  }

  span:nth-of-type(3) {
    color: #5eb88e;
  }

  .social-media {
    text-align: right;
    padding-left: 0;
    padding-right: 0;

    span {
      background-color: #12353c;
      margin-left: 30px;
      padding: 10px;
      border-radius: 50%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      &:hover {
        background-color: #1e7f62;
        transition: all 0.3s ease;
      }
    }

    svg {
      color: #c4c4c4;
      font-size: 18px;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 35px 25px;
    text-align: center;

    .all-rights {
      justify-content: space-evenly;
    }

    .social-media {
      margin-top: 30px;
      text-align: center;
    }

    .social-media span.facebook {
      margin-left: 0;
    }
  }
`;
