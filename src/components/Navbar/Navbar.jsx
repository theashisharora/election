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
const Navbar = () => {
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
                <a href="https://ypp.com" className="nav__link">
                  <span>About The Party</span>
                  <div className="line"></div>
                </a>{" "}
              </NavListItem>

              <NavListItem>
                <NavL to="/banners">
                  <span>Banners</span>
                  <div className="line"></div>
                </NavL>
              </NavListItem>

              <NavListItem>
                <NavL to="/profile">
                  <span>Meet Oladeji</span>
                  <div className="line"></div>
                </NavL>
              </NavListItem>
            </ul>
          </nav>

          <section className="nav__buttons">
            <Link className="btn btn__filled md-show" to="/donate">
              Donate
            </Link>
            <a className="btn btn__outline md-show" href="https://kdd.com">
              Volunteer
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
            <NavL to="/" darkMode={true}>
              <span>Home</span>
              <div className="line"></div>
            </NavL>
          </NavListItem>
          <NavListItem>
            <a href="https://ypp.com" className="nav__link">
              <span>About The Party</span>
              <div className="line"></div>
            </a>{" "}
          </NavListItem>
          <NavListItem>
            <NavL to="/banners" darkMode={true}>
              <span>Banners</span>
              <div className="line"></div>
            </NavL>
          </NavListItem>
          <NavListItem>
            <NavL to="/profile" darkMode={true}>
              <span>Meet Oladeji</span>
              <div className="line"></div>
            </NavL>
          </NavListItem>
        </ul>

        <section className="dropdown__buttons">
          <Link className="btn btn__filled" to="/donate">
            Donate
          </Link>
          <a className="btn btn__outline" href="https://kdd.com">
            Volunteer
          </a>
        </section>
      </NavDropdown>
    </>
  );
};

export default Navbar;
