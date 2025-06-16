import React from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import { FaPencilRuler, FaLaptopCode, FaSearch } from "react-icons/fa";
import { motion } from "framer-motion"; // ✅ NEW

function Services({ id }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.3,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <Wrapper id={id}>
      <div className="container">
        <h2>My Services</h2>
        <Row>
          {[
            // Wrap columns in an array for index control
            {
              icon: <FaPencilRuler />,
              title: "Web Design",
              text: "I create visually appealing and responsive web designs that deliver great user experiences across all modern devices and screen sizes.",
            },
            {
              icon: <FaLaptopCode className="web-dev" />,
              title: "Web Development",
              text: "I develop robust, fast-loading websites with clean, maintainable code, ensuring strong performance and smooth user interaction.",
            },
            {
              icon: <FaSearch />,
              title: "SEO",
              text: "I improve website visibility on search engines through smart SEO strategies, helping your business attract more organic traffic and leads.",
            },
          ].map((service, i) => (
            <Col xs={12} md={4} key={i}>
              <motion.div
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {service.icon}
                <h4>{service.title}</h4>
                <p>{service.text}</p>
              </motion.div>
            </Col>
          ))}
        </Row>
      </div>
    </Wrapper>
  );
}

export default Services;

const Wrapper = styled.section`
  padding: 5rem 0;
  background-color: #01181d;

  .container {
    width: 100%;
    margin: 0 auto;
  }

  .row {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }

  h2 {
    text-align: center;
    margin-bottom: 50px;
    color: #f3f3f3;
  }

  .col-md-4,
  .col-12 {
    background-color: #f3f3f3;
    max-width: 31%;
    margin-right: 3.333333%;
    padding: 30px;
    border-radius: 10px;
    transition: transform 0.3s ease, box-shadow 0.3s ease; /* ✅ NEW */
    cursor: pointer;

    &:hover {
      transform: translateY(-8px); /* ✅ subtle lift on hover */
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15); /* ✅ soft shadow */
    }
  }

  .col-md-4:last-of-type,
  .col-12:last-of-type {
    margin-right: 0;
  }

  svg {
    font-size: 50px;
    color: #1e7f62;
    transition: transform 0.3s ease; /* ✅ NEW */
  }

  .col-md-4:hover svg,
  .col-12:hover svg {
    transform: scale(1.15); /* ✅ icon grows slightly on hover */
  }

  .web-dev {
    font-size: 58px;
  }

  h4 {
    font-size: 22px;
    margin: 30px 0;
  }

  p {
    font-size: 18px;
  }

  // === Tablet (2 columns) ===
  @media screen and (max-width: 992px) {
    .container {
      width: 100% !important;
      padding: 0 25px;
    }
  }

  @media screen and (max-width: 768px) {
    .container {
      width: 100%;
      max-width: 100% !important;
      margin: 0;
      padding-left: 25px;
      padding-right: 25px;
    }

    .col-md-4,
    .col-12 {
      max-width: 100%;
      margin-bottom: 25px;
      margin-right: 0;
    }
  }

  @media screen and (min-width: 992px) and (max-width: 1199px) {
    /* Example adjustments for medium-large tablets and small laptops */

    .container {
      width: 100% !important;
      padding: 0 25px;
    }

    .title {
      font-size: 1.75rem;
    }

    /* .col-md-4 {
      flex: 0 0 33.3333%;
      max-width: 33.3333%;
      padding: 0.75rem;
    } */

    .project-card img {
      height: 220px; /* Adjust image height for tighter space */
    }

    h5 {
      font-size: 1rem;
    }
  }
`;
