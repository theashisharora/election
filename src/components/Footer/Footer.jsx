// Imports
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
          <a
            href="#"
            target="_blank"
          >
            GET INVOLVED
          </a>
          <a
            href="mailto:asharo360@gmail.com"
            target="_blank"
          >
            CONTACT US
          </a>
          <div class="footer__socials">
            <a
              href="https://www.instagram.com/vote4ash/"
              rel="noopener noreferrer"
              target="_blank"
              class="footer__socials--link"
            >
              <Instagram />
            </a>
            <a
              href="#"
              rel="noopener noreferrer"
              target="_blank"
              class="footer__socials--link"
            >
              <Twitter />
            </a>
            <a
              href="#g"
              rel="noopener noreferrer"
              target="_blank"
              class="footer__socials--link"
            >
              <Facebook />
            </a>
          </div>
        </div>
        <div className="footer__right">
          {page === "donate" ? (
            <a
              href="https://paystack.com/pay/oladeji-lagos-central-donation"
              target={"_blank"}
              rel="noreferrer"
            >
              <button className="btn btn__filled">Donate</button>
            </a>
          ) : (
            <Link to={"/donate"} className="btn btn__filled">
              Donate
            </Link>
          )}
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
