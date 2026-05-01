import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import styled from "styled-components";
import projects from "./dataProjects";
import { motion } from "framer-motion";
import {
  FiExternalLink,
  FiCode,
  FiLayers,
  FiDatabase,
  FiZap,
} from "react-icons/fi";
import { FaReact, FaWordpress } from "react-icons/fa";
import { SiStyledcomponents, SiSass, SiFramer } from "react-icons/si";
import { TbApi } from "react-icons/tb";

function Projects({ id }) {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  const techIcons = {
    react: {
      icon: <FaReact />,
      label: "React",
    },
    styled: {
      icon: <SiStyledcomponents />,
      label: "Styled-components",
    },
    sass: {
      icon: <SiSass />,
      label: "Sass",
    },
    wordpress: {
      icon: <FaWordpress />,
      label: "WordPress",
    },
    api: {
      icon: <TbApi />,
      label: "API",
    },
    design: {
      icon: <FiLayers />,
      label: "Design",
    },
    animation: {
      icon: <SiFramer />,
      label: "Animation",
    },
    database: {
      icon: <FiDatabase />,
      label: "Data",
    },
    code: {
      icon: <FiCode />,
      label: "Code",
    },
    performance: {
      icon: <FiZap />,
      label: "Performance",
    },
  };

  const cardVariants = {
    hidden: (i) => ({
      opacity: 0,
      x: i % 2 === 0 ? -50 : 50,
      rotate: i % 2 === 0 ? -3 : 3,
      scale: 0.95,
    }),
    visible: (i) => ({
      opacity: 1,
      x: 0,
      rotate: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const openProject = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Wrapper id={id}>
      <div className="container">
        <h2 className="title">My Projects</h2>

        <Row>
          {visibleProjects.map((project, i) => (
            <Col key={project.id} xs={12} sm={6} md={4}>
              <motion.div
                layout
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <ProjectCard
                  type="button"
                  onClick={() => openProject(project.url)}
                  aria-label={`Open ${project.project}`}
                >
                  <img src={project.image} alt={project.project} />

                  <div className="overlay">
                    <div className="overlay-content">
                      <h5>{project.project}</h5>
                      <p>{project.description}</p>

                      <div className="tech-icons">
                        {project.tech?.map((item) => {
                          const tech = techIcons[item];

                          if (!tech) return null;

                          return (
                            <span
                              key={item}
                              className="tech-icon"
                              title={tech.label}
                            >
                              {tech.icon}
                            </span>
                          );
                        })}
                      </div>

                      <span className="view-btn">
                        View Project <FiExternalLink />
                      </span>
                    </div>
                  </div>
                </ProjectCard>
              </motion.div>
            </Col>
          ))}
        </Row>

        {projects.length > 6 && (
          <div className="text-center mt-4">
            <StyledButton onClick={() => setShowAll(!showAll)}>
              {showAll ? "View Less" : "View More"}
            </StyledButton>
          </div>
        )}
      </div>
    </Wrapper>
  );
}

export default Projects;

const Wrapper = styled.section`
  padding: 5rem 0;
  background-color: #f3f3f3;

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0;
  }

  .title {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 3rem;
    font-weight: bold;
    color: #222;
  }

  .row {
    display: flex;
    flex-wrap: wrap;
    margin-left: 0;
    margin-right: 0;
  }

  .col-6,
  .col-md-4 {
    padding: 0.75rem;
  }

  @media screen and (max-width: 992px) {
    .container {
      width: 100% !important;
      padding: 0 13px;
      margin-left: 0 !important;
      margin-right: 0 !important;
    }

    .col-md-4 {
      flex: 0 0 50%;
      max-width: 50%;
    }
  }

  @media screen and (max-width: 576px) {
    .container {
      width: 100% !important;
    }

    .col-md-4,
    .col-6 {
      flex: 0 0 100%;
      max-width: 100%;
    }

    .row {
      flex-direction: column;
    }
  }

  @media screen and (min-width: 992px) and (max-width: 1199px) {
    .container {
      width: 100% !important;
      padding: 0 25px;
    }

    .title {
      font-size: 1.75rem;
    }

    .col-md-4 {
      flex: 0 0 50%;
      max-width: 50%;
      padding: 0.75rem;
    }
  }
`;

const ProjectCard = styled.button`
  position: relative;
  width: 100%;
  min-height: 200px;
  padding: 0;
  border: 0;
  border-radius: 14px;
  overflow: hidden;
  cursor: pointer;
  background: #111;
  text-align: left;
  box-shadow:
    0 6px 18px rgba(0, 0, 0, 0.08),
    0 2px 6px rgba(0, 0, 0, 0.05);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 14px;
    pointer-events: none;
    border: 1px solid rgba(255, 255, 255, 0.06);
  }

  img {
    width: 100%;
    height: 210px;
    object-fit: cover;
    display: block;
    transition: transform 0.45s ease;
  }

  .overlay {
    position: absolute;
    inset: 0;
    color: white;
    padding: 1rem;
    display: flex;
    align-items: flex-end;
    opacity: 0;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.78),
      rgba(0, 0, 0, 0.28),
      rgba(0, 0, 0, 0.05)
    );
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    transition: opacity 0.35s ease;
  }

  .overlay-content {
    width: 100%;
    padding: 1rem;
    border-radius: 14px;
    background: rgba(0, 0, 0, 0.35);
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.25);
    transform: translateY(20px);
    transition: transform 0.35s ease;
  }

  h5 {
    margin: 0 0 0.45rem;
    font-size: 1.08rem;
    font-weight: 700;
    color: #fff;
  }

  p {
    margin: 0;
    max-width: 95%;
    font-size: 0.82rem;
    line-height: 1.45;
    color: rgba(255, 255, 255, 0.9);
  }

  .tech-icons {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin-top: 10px;
  }

  .tech-icon {
    width: 30px;
    height: 30px;
    border-radius: 999px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.12);
    border: 1px solid rgba(255, 255, 255, 0.22);

    svg {
      font-size: 1rem;
      color: #fff;
    }
  }

  .view-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    margin-top: 12px;
    font-size: 0.82rem;
    font-weight: 700;
    color: #fff;
    border-bottom: 1px solid rgba(255, 255, 255, 0.7);
    width: fit-content;
    transition:
      color 0.3s ease,
      border-color 0.3s ease;

    svg {
      font-size: 0.9rem;
    }
  }

  &:hover {
    transform: translateY(-6px) scale(1.02);
    box-shadow:
      0 20px 40px rgba(0, 0, 0, 0.18),
      0 8px 16px rgba(0, 0, 0, 0.12);

    img {
      transform: scale(1.06);
    }

    .overlay {
      opacity: 1;
    }

    .overlay-content {
      transform: translateY(0);
    }

    .view-btn {
      color: #5eead4;
      border-color: #5eead4;
    }
  }

  &:focus-visible {
    outline: 3px solid #5eead4;
    outline-offset: 4px;
  }

  @media (hover: none) and (pointer: coarse) {
    .overlay {
      opacity: 1;
      padding: 0.85rem;
      background: linear-gradient(to top, rgba(0, 0, 0, 0.82), transparent);
      backdrop-filter: blur(2px);
      -webkit-backdrop-filter: blur(2px);
    }

    .overlay-content {
      padding: 0.85rem;
      transform: translateY(0);
      background: rgba(0, 0, 0, 0.35);
    }

    h5 {
      font-size: 1rem;
    }

    p {
      font-size: 0.76rem;
      line-height: 1.35;
    }

    .tech-icons {
      margin-top: 8px;
    }

    .tech-icon {
      width: 26px;
      height: 26px;

      svg {
        font-size: 0.88rem;
      }
    }

    .view-btn {
      font-size: 0.75rem;
      margin-top: 8px;
    }
  }
`;

const StyledButton = styled(Button)`
  padding: 0.75rem 1.5rem;
  font-size: 0.875rem;
  border: 2px solid #12353c;
  border-radius: 0;
  background-color: #12353c;
  text-transform: uppercase !important;
  letter-spacing: 1px;
  color: white;
  transition:
    background 0.3s ease,
    border-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #01181d;
    border: 2px solid #01181d;
  }
`;
