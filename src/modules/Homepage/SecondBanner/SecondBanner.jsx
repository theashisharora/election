import React from "react";
import styled from "styled-components";
import { secondBannerBg } from "../../../assets/pngs";

const SecondBanner = () => {
  return (
    <Wrapper className="container">
      <section className="container__sub subb">
        <h1 data-aos="fade-right">
          Let's do it <span>   #Vote4Ash</span>
        </h1>
        <h1>Vote Ashish Arora for Davis Campus</h1>
        <h1>Dates: March 24th to 28th</h1>
      </section>
    </Wrapper>
    
  );
};

export default SecondBanner;

const Wrapper = styled.section`
  overflow-x: hidden;
  background-image: url(${secondBannerBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  .container {
    &__sub {
      padding: 60px 0;
      @media screen and (min-width: 640px) {
        padding: 80px 0;
      }
      @media screen and (min-width: 800px) {
        padding: 100px 0;
      }
      @media screen and (min-width: 960px) {
        padding: 120px 0;
      }
      @media screen and (min-width: 1024px) {
        padding: 140px 0;
      }
      @media screen and (min-width: 1200px) {
        padding: 160px 0;
      }
    }
  }

  h1 {
    font-weight: 900;
    line-height: 120%;
    color: #ffffff;
    padding: 20px;
    margin: 20px 0;
    background: #171c1d;
    text-align: left;

    span {
      font-weight: 900;
      font-size: 2.6rem;
      line-height: 120%;
      color: #d82e33;
    }

    font-size: 2.6rem;
    @media screen and (min-width: 640px) {
      font-size: 3.2rem;
      span {
        font-size: 3.2rem;
      }
    }
    @media screen and (min-width: 800px) {
      font-size: 4.2rem;
      span {
        font-size: 4.2rem;
      }
    }
    @media screen and (min-width: 960px) {
      font-size: 4.6rem;
      span {
        font-size: 4.6rem;
      }
    }
    @media screen and (min-width: 1024px) {
      font-size: 5rem;
      span {
        font-size: 5rem;
      }
    }
    @media screen and (min-width: 1200px) {
      font-size: 6rem;
      span {
        font-size: 6rem;
      }
    }
  }
`;
