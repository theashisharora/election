import React from "react";
import { Link } from "react-router-dom";
import { FooterWrapper } from "./styles";
import { svgs } from "../../assets/svgs";

const { Facebook, Twitter, Instagram } = svgs;
const Footer = ({ page }) => {
  return (
    <FooterWrapper className="container">
      <section className="container__sub subb">
        <div className="footer__left">
          <a href="https://forms.gle/KFb9vSQnNDjuAukt7" target="_blank">
            GET INVOLVED
          </a>
          <a href="mailto:asharo360@gmail.com" target="_blank">
            CONTACT US
          </a>
          <div className="footer__socials">
            <a
              href="https://www.instagram.com/vote4ash/"
              rel="noopener noreferrer"
              target="_blank"
              className="footer__socials--link"
            >
              <Instagram />
            </a>
            {/*
            <a
              href="#"
              rel="noopener noreferrer"
              target="_blank"
              className="footer__socials--link"
            >
              <Twitter />
            </a>
            <a
              href="#g"
              rel="noopener noreferrer"
              target="_blank"
              className="footer__socials--link"
            >
              <Facebook />
            </a>
            */}
          </div>
        </div>
        <div className="footer__right">
          {page === "donate" ? (
            <a
              href="mailto:asharo360@gmail.com"
              target={"_blank"}
              rel="noreferrer"
            >
              <button className="btn btn__filled">Contact</button>
            </a>
          ) : (
            <a
              href="mailto:asharo360@gmail.com"
              className="btn btn__filled"
              target="_blank"
              rel="noreferrer"
            >
              Contact
            </a>
          )}
          <a
            href={"https://arashish.dev.fast.sheridanc.on.ca/dist/"}
            target="_blank"
            rel="noreferrer"
            className="btn btn__outline"
          >
            About Ash
          </a>
        </div>
      </section>
    </FooterWrapper>
  );
};

export default Footer;
