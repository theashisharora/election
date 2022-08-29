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
          <div class="footer__socials">
            <a
              href="https://www.instagram.com/blessiola/"
              rel="noopener noreferrer"
              target="_blank"
              class="footer__socials--link"
            >
              <Instagram />
            </a>
            <a
              href="https://twitter.com/Blessing_Ola"
              rel="noopener noreferrer"
              target="_blank"
              class="footer__socials--link"
            >
              <Twitter />
            </a>
            <a
              href="https://web.facebook.com/oladeji.blessing"
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
              href="https://paystack.com/pay/oladeji-for-senate"
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
