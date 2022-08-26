// Imports
import React from "react";
import { Link } from "react-router-dom";
import { FooterWrapper } from "./styles";

const Footer = () => {
  return (
    <FooterWrapper className="container">
      <section className="container__sub subb">
        <div className="footer__left">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSce2xBCAIfwoEcKOGrBu_fbaLjjC4b6F6wklBTPDjSvqvVufQ/viewform"
            target="_blank"
          >
            GET INVOLVED
          </a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSce2xBCAIfwoEcKOGrBu_fbaLjjC4b6F6wklBTPDjSvqvVufQ/viewform"
            target="_blank"
          >
            CONTACT US
          </a>
        </div>
        <div className="footer__right">
          <Link to={"/donate"} className="btn btn__filled">
            Donate
          </Link>
          <a
            href={"https://ypp.ng"}
            target="_blank"
            rel="noreferrer"
            className="btn btn__outline"
          >
            About YPP
          </a>
        </div>
      </section>
    </FooterWrapper>
  );
};

export default Footer;
