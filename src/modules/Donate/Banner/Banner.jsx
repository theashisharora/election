import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { donateBannerImage } from "../../../assets/pngs";

const Banner = () => {
  return (
    <Wrapper className="container">
      <section className="container__sub subb">
        <h2 data-aos="fade-up">DONATE TO A </h2>
        <h1 data-aos="fade-up">BETTER NIGERIA</h1>

        <img
          data-aos="fade-up"
          src={donateBannerImage}
          className="banner__image"
          alt="Oladeji Blessing in a senatorial pose"
        />

        <article className="message">
          <p className="message__text">
            We can change Nigeria, and it starts by changing the people we send
            to the National Assemply to represent us and not just the president
            alone. Oladeji Blessing Tunde is not a politician. He's an
            enterpreneur, an employer of labour, an IT professional, a father,
            and a Lagosian. He doesn't have a godfather.
          </p>
          <p className="message__text">
            Lagos Central has 5 Local Governments(Surulere, Yaba, Lagos Island,
            Etiosa and Apapa) , 62 wards, and ~2800 polling units with 1.5m
            voters. We are collecting donations to fund the campaign logistics
            within this constituency. You can view all donations we have
            recieved here
          </p>
          <p className="message__text message__text--accent">
            You can choose to donate anonymously but a single individual
            donation must not exceed N50m (Fifty Million Naira). Please call
            0803 200 2338 for cheque or cash donations.
          </p>
          <p className="message__text">
            Get on board with Blessing Oladeji and help us win this critical
            special election by making a donation today.
          </p>

          <a
            href="https://paystack.com/pay/oladeji-for-senate"
            target={"_blank"}
            rel="noreferrer"
          >
            <button className="btn btn__filled">Donate</button>
          </a>
        </article>
      </section>
    </Wrapper>
  );
};

export default Banner;

const Wrapper = styled.section`
  background-color: #f8f1e6;
  /* overflow-x: hidden; */
  border-bottom: 3.5px solid #e4caa0;
  padding-top: 80px;

  .container {
    &__sub {
      padding: 80px 0;
      position: relative;

      padding-bottom: 450px;

      @media screen and (min-width: 290px) {
        padding-bottom: 380px;
      }

      @media screen and (min-width: 960px) {
        padding: 100px 0;
        padding-bottom: 480px;
      }
      @media screen and (min-width: 1024px) {
        padding: 120px 0;
        padding-bottom: 480px;
      }
      @media screen and (min-width: 1200px) {
        padding: 140px 0;
        padding-bottom: 480px;
      }
    }
  }

  /* Mission */
  .banner {
    &__image {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 360px;
      max-width: 80%;
      margin-top: 30px;
      @media screen and (min-width: 720px) {
        margin-top: 40px;
      }
      @media screen and (min-width: 960px) {
        width: 390px;
        max-width: 40%;
        margin-top: 50px;
      }
      @media screen and (min-width: 1024px) {
        margin-top: 60px;
      }
    }
  }

  h1,
  h2 {
    position: relative;
    z-index: 38848;
    background-color: #f8f1e6;
    font-weight: 800;
    font-size: 4rem;
    line-height: 110%;
    color: #0b4734;
    margin-top: 8px;
    font-family: Poppins, Inter, sans-serif;
    /* width: max-content; */
    margin: 0 auto;

    @media screen and (min-width: 320px) {
      font-size: 5.4rem;
    }

    @media screen and (min-width: 640px) {
      font-size: 6.2rem;
    }
    @media screen and (min-width: 800px) {
      font-size: 6.8rem;
    }
    @media screen and (min-width: 960px) {
      font-size: 7.2rem;
      margin-top: 0;
    }
    @media screen and (min-width: 1200px) {
      font-size: 8.8rem;
    }
  }

  h2 {
    font-weight: 400;
    @media screen and (max-width: 640px) {
      font-size: 4rem;
    }
    @media screen and (max-width: 280px) {
      font-size: 3.2rem;
    }
  }

  .message {
    background: #f8f1e6;
    border: 4px solid #e4caa0;
    border-radius: 20px;
    width: 100%;
    padding: 24px;
    background: #f8f1e6;
    position: absolute;
    bottom: -50%;
    z-index: 93939;
    left: 50%;
    transform: translateX(-50%);
    max-width: 770px;

    @media screen and (min-width: 960px) {
      padding: 32px;
      bottom: -30%;
    }
    @media screen and (min-width: 1024px) {
      padding: 50px;
    }
    @media screen and (min-width: 1200px) {
      padding: 60px;
    }

    &__text,
    &__text--link {
      font-weight: 500;
      font-size: 1.4rem;
      line-height: 140%;
      text-align: center;
      color: #173c2a;
      margin-bottom: 32px;
      @media screen and (min-width: 880px) {
        font-size: 1.6rem;
        margin-bottom: 40px;
      }
      @media screen and (min-width: 1024px) {
        font-size: 1.8rem;
      }
      @media screen and (min-width: 1200px) {
        font-size: 2rem;
      }

      &--accent,
      &--link {
        /* color: #d82e33; */
        font-weight: 800;
      }
    }
  }
`;
