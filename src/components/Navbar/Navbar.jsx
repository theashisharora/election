// Imports
import React from "react";
import { Link } from "react-router-dom";
import {
  MenuButton,
  NavbarWrapper,
  NavDropdown,
  NavL,
  NavListItem,
} from "./styles";
import { svgs } from "../../assets/svgs";
import { logo } from "../../assets/pngs";

const { MenuIcon, Close } = svgs;
const Navbar = ({ date, page }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <NavbarWrapper
        className="container"
        darkMode={isOpen}
        // open={isOpen}
      >
        <section className="container__sub subb">
          <Link to="/" className="home">
            <img className="nav__logo logo" src={logo} />
          </Link>
          <nav className="nav__nav">
            <ul className="nav__nav-list">
              <NavListItem>
                <NavL to="/">
                  <span>Home</span>
                  <div className="line"></div>
                </NavL>
              </NavListItem>

              <NavListItem>
                <a
                  href="https://arashish.dev.fast.sheridanc.on.ca/dist/"
                  target="_blank"
                  rel="noreferrer"
                  className="nav__link"
                >
                  <span>About Me</span>
                  <div className="line"></div>
                </a>{" "}
              </NavListItem>

              <NavListItem>
                <NavL to="/profile">
                  <span>Meet Ashish</span>
                  <div className="line"></div>
                </NavL>
              </NavListItem>
            </ul>
          </nav>

          <section className="nav__buttons">
            {page === "donate" ? (
              <a
                className="btn btn__filled"
                href="mailto:asharo360@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                Contact
              </a>
            ) : (
              <a
                className="btn btn__filled md-show"
                href="mailto:asharo360@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                Contact
              </a>
            )}

            <a
              className="btn btn__outline md-show"
              href="https://www.instagram.com/vote4ash/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <MenuButton
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              {!isOpen ? (
                <img src={MenuIcon} alt="Menu" />
              ) : (
                <img src={Close} alt="Close" />
              )}
            </MenuButton>
          </section>
        </section>
      </NavbarWrapper>
      <NavDropdown className={!isOpen ? "" : "open"}>
        <ul className="nav__nav-list">
          <NavListItem>
            <NavL to="/" darkmode={true}>
              <span>Home</span>
              <div className="line"></div>
            </NavL>
          </NavListItem>
          <NavListItem>
            <a
              href="https://arashish.dev.fast.sheridanc.on.ca/dist/"
              target="_blank"
              rel="noreferrer"
              className="nav__link"
            >
              <span>About Me</span>
              <div className="line"></div>
            </a>{" "}
          </NavListItem>
          <NavListItem>
            <NavL to="/profile" darkmode={true}>
              <span>Meet Ashish</span>
              <div className="line"></div>
            </NavL>
          </NavListItem>
        </ul>

        <section className="dropdown__buttons">
          <a
            className="btn btn__filled"
            href="mailto:asharo360@gmail.co"
            target="_blank"
            rel="noreferrer"
          >
            Contact
          </a>
          <a
            className="btn btn__outline"
            href="https://arashish.dev.fast.sheridanc.on.ca/dist/"
            target="_blank"
            rel="noreferrer"
          >
            About Ash
          </a>
        </section>
      </NavDropdown>
    </>
  );
};

export default Navbar;
