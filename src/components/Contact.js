import React, { useRef } from "react";
import styled from "styled-components";
import { Row, Col, Form } from "react-bootstrap";
import { FiPhone, FiMail, FiGlobe } from "react-icons/fi";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

function Contact({ id }) {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <Wrapper id={id}>
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Row>
          <Col sm={12} md={5} className="left-info">
            <h3>Let’s Connect</h3>
            <p>
              Feel free to reach out via phone, email, or through the form. I
              look forward to hearing from you!
            </p>
            <InfoItem>
              <FiPhone className="icon" />
              <span>+47 930 77 286</span>
            </InfoItem>
            <InfoItem>
              <FiMail className="icon" />
              <span>florent.hajdari@hotmail.com</span>
            </InfoItem>
            <InfoItem>
              <FiGlobe className="icon" />
              <a
                href="https://florent-hajdari.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                florent-hajdari.com
              </a>
            </InfoItem>
          </Col>

          <Col sm={12} md={7} className="contact-form">
            <Form ref={formRef} onSubmit={sendEmail}>
              <Form.Group controlId="formName" className="mb-3">
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formPhone" className="mb-3">
                <Form.Control
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formMessage" className="mb-3">
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="message"
                  placeholder="Your Message"
                  required
                />
              </Form.Group>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Contact Me
              </motion.button>
            </Form>
          </Col>
        </Row>
      </motion.div>
    </Wrapper>
  );
}

export default Contact;

const Wrapper = styled.section`
  padding: 5rem 0;
  background-color: #061f24;
  color: white;

  h3 {
    color: white;
    margin-bottom: 1rem;
    font-weight: 500;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .row {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }

  .left-info {
    padding-right: 2rem;
    padding-left: 0;

    @media screen and (min-width: 769px) {
      p {
        width: 315px !important;
      }
    }
  }

  .contact-form {
    padding-right: 0;
  }

  form input,
  form textarea {
    background-color: #0e2d33;
    color: white;
    border: none;
    border-radius: 0;
    padding: 0.75rem;
  }

  form input {
    height: 46px;
  }

  form input::placeholder,
  form textarea::placeholder {
    color: #ccc;
  }

  form input:focus,
  form textarea:focus {
    outline: none;
    box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.2);
  }

  button {
    background-color: white;
    color: #061f24;
    border: none;
    padding: 0.75rem 1.5rem;
    font-weight: bold;
    border-radius: 0;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: all 0.3s ease;
  }

  button:hover {
    background-color: #e0e0e0;
    color: #061f24;
  }

  @media screen and (max-width: 768px) {
    .container {
      width: 100%;
      max-width: 100% !important;
      margin: 0;
      padding-left: 25px;
      padding-right: 25px;
    }

    .col-md-5,
    .col-md-7,
    .col-12 {
      max-width: 100%;
      margin-bottom: 25px;
      margin-right: 0;
      padding-left: 0;
      padding-right: 0;
    }

    button {
      width: 100%;
    }
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 1rem;

  p {
    width: 76%;
    font-size: 16px;
    margin: 30px 0;
    font-weight: 100;
  }

  .icon {
    color: white;
    margin-right: 0.75rem;
    font-size: 1.2rem;
  }

  span {
    font-weight: 300;
  }

  a {
    color: white;
    text-decoration: none;
    font-weight: 300;

    &:hover {
      text-decoration: underline;
    }
  }
`;
