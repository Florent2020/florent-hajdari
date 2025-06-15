import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import styled from "styled-components";
import projects from "./dataProjects";

function Projects({ id }) {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <Wrapper id={id}>
      <div className="container">
        <h2 className="title">My Projects</h2>
        <Row>
          {visibleProjects.map((project) => (
            <Col key={project.id} xs={12} sm={6} md={4}>
              <ProjectCard onClick={() => window.open(project.url, "_blank")}>
                <img src={project.image} alt={project.project} />
                <div className="overlay">
                  <h5>{project.project}</h5>
                </div>
              </ProjectCard>
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

// Styled Components
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
    padding: 0.75rem 0.75rem;
  }

  // === Tablet (2 columns) ===
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

  // === Mobile (1 column) ===
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

    /* .col-md-4 {
      margin-bottom: 25px;
    } */
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

    .col-md-4 {
      flex: 0 0 50%;
      max-width: 50%;
      padding: 0.75rem;
    }

    .project-card img {
      height: 220px; /* Adjust image height for tighter space */
    }

    h5 {
      font-size: 1rem;
    }
  }
`;

const ProjectCard = styled.div`
  position: relative;
  cursor: pointer;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  .overlay {
    position: absolute;
    bottom: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
    color: white;
    width: 100%;
    padding: 1rem;
    transition: background 0.3s ease;
    display: flex;
    align-items: flex-end;
    height: 100%;
  }

  h5 {
    margin: 0;
    font-size: 1.25rem;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);

    img {
      transform: scale(1.05);
    }

    h5 {
      opacity: 1;
      transform: translateY(0);
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
  transition: background 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #01181d;
    border: 2px solid #01181d;
  }
`;
