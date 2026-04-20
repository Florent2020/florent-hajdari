import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Row, Col, Form } from "react-bootstrap";
import {
  FiPhone,
  FiMail,
  FiGlobe,
  FiCheckCircle,
  FiAlertCircle,
  FiX,
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

function Contact({ id }) {
  const [status, setStatus] = useState(null); // "success" | "error" | null
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!status) return;

    const timer = setTimeout(() => {
      setStatus(null);
    }, 3500);

    return () => clearTimeout(timer);
  }, [status]);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const formData = new FormData(e.target);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch(
        "https://florent-hajdari.com/store/wp-json/custom/v1/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      setStatus("success");
      e.target.reset();
    } catch (error) {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Wrapper id={id}>
      <AnimatePresence>
        {status && (
          <Toast
            as={motion.div}
            $type={status}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <ToastIcon>
              {status === "success" ? <FiCheckCircle /> : <FiAlertCircle />}
            </ToastIcon>

            <ToastText>
              {status === "success"
                ? "Message sent successfully."
                : "Something went wrong. Please try again."}
            </ToastText>

            <ToastClose
              type="button"
              onClick={() => setStatus(null)}
              aria-label="Close notification"
            >
              <FiX />
            </ToastClose>
          </Toast>
        )}
      </AnimatePresence>

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
              <span>contact@florent-hajdari.com</span>
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
            <Form onSubmit={sendEmail}>
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
                type="submit"
                disabled={isSubmitting}
                whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {isSubmitting ? "Sending..." : "Contact Me"}
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
  position: relative;

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

  button:disabled {
    opacity: 0.7;
    cursor: not-allowed;
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

const Toast = styled.div`
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;

  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 320px;
  max-width: 420px;
  padding: 14px 16px;

  background-color: ${({ $type }) =>
    $type === "success" ? "#0e2d33" : "#4a1f24"};
  color: white;

  border-left: 4px solid
    ${({ $type }) => ($type === "success" ? "#4ade80" : "#f87171")};

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);

  @media screen and (max-width: 768px) {
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% - 40px);
    min-width: auto;
  }
`;

const ToastIcon = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  flex-shrink: 0;
`;

const ToastText = styled.div`
  flex: 1;
  font-size: 0.95rem;
  font-weight: 400;
`;

const ToastClose = styled.button`
  background: transparent !important;
  color: white !important;
  border: none !important;
  padding: 0 !important;
  font-size: 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  flex-shrink: 0;

  &:hover {
    opacity: 0.8;
    background: transparent !important;
    color: white !important;
  }
`;
