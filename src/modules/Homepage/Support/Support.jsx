import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { swag1, swag2, swag3 } from "../../../assets/pngs";

const Support = () => {
  return (
    <Wrapper className="container">
      <section className="container__sub subb">
        <h6 data-aos="fade-up">#VoteYPP</h6>
        <h2 data-aos="fade-up">Show Your Support And Get Any Of These</h2>
        <section className="support-materials">
          <Link
            data-aos="fade-up"
            to={"/donate"}
            className="support-materials__item"
          >
            <img data-aos="fade-up" src={swag1} />
            <div
              // data-aos="fade-up"
              className="support-materials__item--after"
            ></div>
          </Link>
          <Link
            data-aos="fade-up"
            to={"/donate"}
            className="support-materials__item"
          >
            <img data-aos="fade-up" src={swag2} />
            <div
              // data-aos="fade-up"
              className="support-materials__item--after"
            ></div>
          </Link>
          <Link
            data-aos="fade-up"
            to={"/donate"}
            className="support-materials__item"
          >
            <img data-aos="fade-up" src={swag3} />
            <div
              // data-aos="fade-up"
              className="support-materials__item--after"
            ></div>
          </Link>
        </section>
      </section>
    </Wrapper>
  );
};

export default Support;

const Wrapper = styled.section`
  background-color: #083527;
  overflow-x: hidden;
  transition: 0.5s;

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

  h6 {
    font-weight: 700;
    line-height: 150%;
    text-align: center;
    color: #ffc6c7;
    font-size: 1.6rem;
    margin-bottom: 10px;
    @media screen and (min-width: 640px) {
      font-size: 1.8rem;
    }
    @media screen and (min-width: 800px) {
      font-size: 2rem;
    }
    @media screen and (min-width: 960px) {
      font-size: 2.2rem;
    }
    @media screen and (min-width: 1200px) {
      font-size: 2.4rem;
    }
  }

  h2 {
    font-weight: 900;
    font-size: 2.8rem;
    line-height: 124%;
    text-align: center;
    color: #faf1e5;
    max-width: 582px;
    margin: 0 auto;
    margin-bottom: 38px;

    @media screen and (min-width: 640px) {
      font-size: 3.2rem;
      margin-bottom: 44px;
    }
    @media screen and (min-width: 800px) {
      font-size: 3.6rem;
      margin-bottom: 50px;
    }
    @media screen and (min-width: 960px) {
      font-size: 4rem;
      margin-bottom: 56px;
    }
    @media screen and (min-width: 1024px) {
      font-size: 4.4rem;
      margin-bottom: 64px;
    }
    @media screen and (min-width: 1200px) {
      font-size: 4.8rem;
      margin-bottom: 72px;
    }
  }

  .support-materials {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;

    &__item {
      background: #05231a;
      overflow: hidden;
      border-radius: 50%;
      width: 240px;
      height: 240px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      @media screen and (min-width: 960px) {
        width: 280px;
        height: 280px;
      }
      @media screen and (min-width: 1024px) {
        width: 320px;
        height: 320px;
      }
      @media screen and (min-width: 1200px) {
        width: 370px;
        height: 370px;
      }

      img {
        height: 80%;
      }

      &:not(:last-child) {
        margin-bottom: 30px;
      }

      &--after {
        opacity: 0;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
        border-radius: 50%;
        position: absolute;
        background: rgba(5, 35, 26, 0.34);
        backdrop-filter: blur(8px);
        &:hover {
          opacity: 1;
          content: "Donate";

          &:after {
            content: "Donate";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-weight: 600;
            font-size: 16px;
            line-height: 24px;
            color: #05231a;
            width: 172px;
            background: #ffffff;
            border-radius: 8px;
            padding: 16px;
            max-width: 60%;
          }
        }
      }
    }
  }
`;
