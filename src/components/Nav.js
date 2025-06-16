import React, { useState } from "react";
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { links } from "../utils/dataPages";

function Nav() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const toggle = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  const handleLogoClick = () => {
    closeMenu();

    if (window.location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleClick = (text) => {
    const sectionId = text.toLowerCase();

    closeMenu();

    if (window.location.pathname !== "/") {
      navigate("/");

      // Delay to let page render before scrolling
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <NavContainer>
      <div className="nav-center">
        <div className="container">
          <div className="nav-header">
            <div onClick={handleLogoClick} style={{ cursor: "pointer" }}>
              <a href="/">
                <img src={logo} alt="logo" />
              </a>
            </div>

            <div
              className={`nav-toggle ${open ? "open" : ""}`}
              onClick={toggle}
              aria-label="Toggle navigation"
              role="button"
              tabIndex="0"
            >
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
            <ul className={`nav-links ${open ? "nav-active" : ""}`}>
              {links.map(({ id, text, url }) => (
                <li
                  key={id}
                  className="nav-link"
                  onClick={() => handleClick(text)}
                >
                  <NavLink
                    to={url}
                    className={({ isActive }) =>
                      isActive ? "link-active" : ""
                    }
                  >
                    {text}
                  </NavLink>
                  {/* )} */}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </NavContainer>
  );
}

export default Nav;

const NavContainer = styled.nav`
  position: fixed;
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  z-index: 999;

  .nav-center {
    width: 100%;
    margin: 0 auto;
    max-width: var(--max-width);
  }

  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: 80px;
      margin-left: -5px;
    }
  }

  .nav-toggle {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 30px;

    div {
      width: 26px;
      height: 2px;
      background-color: #ffffff;
      margin: 3px;
      transition: all 0.4s ease;
      border-radius: 10px;
    }

    &.open .line1 {
      transform: rotate(45deg) translate(3px, 5px);
    }
    &.open .line2 {
      opacity: 0;
    }
    &.open .line3 {
      transform: rotate(-45deg) translate(6px, -8px);
    }
  }

  .nav-links {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 67px;
    right: 0;
    width: 100%;
    background-color: #000000;
    height: calc(100vh - 80px);
    text-align: center;
    justify-content: space-evenly;
    text-transform: uppercase;
    letter-spacing: 2px;
    transform: translateY(-200%);
    transition: transform 0.4s ease-in-out;
  }

  .nav-active {
    transform: translateY(0%);
    padding-left: 0;
  }

  .nav-links a {
    color: rgb(240, 237, 237);
    text-transform: uppercase;
    font-size: 15px;
  }

  .link-active {
    color: #34badc;
    font-weight: bold;
  }

  @media screen and (max-width: 768px) {
    .nav-center {
      width: 100%;
      padding-left: 25px;
      padding-right: 25px;
    }
  }

  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }

    .container {
      margin-right: 0 !important;
      margin-left: 0 !important;
    }

    .nav-center {
      width: 1200px !important;
    }

    .nav-links {
      flex-direction: row;
      position: relative;
      background: transparent;
      height: auto;
      transform: none;
      top: 6px;
      align-items: center;
      justify-content: flex-end;

      li {
        /* margin: 0 0.5rem; */
        padding-left: 50px;
      }

      a {
        padding: 0.5rem;
        letter-spacing: var(--spacing);
        transition: scale 0.3s ease;

        &:hover {
          scale: 1.3;
        }
      }
    }
  }
`;
