import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  banner1,
  banner10,
  banner11,
  banner13,
  banner14,
  banner15,
  banner16,
  banner17,
  banner18,
  banner19,
  banner2,
  banner3,
  banner4,
  banner5,
  banner12,
  banner6,
  banner7,
  banner8,
  banner9,
  banner20,
} from "../../../assets/pngs/banners";

const BannerList = () => {
  return (
    <Wrapper className="container">
      <section className="container__sub subb">
        <img
          src={banner1}
          alt="banner"
          className="banner__image"
          data-aos="fade-up"
        />
        <img
          src={banner2}
          alt="banner"
          className="banner__image"
          data-aos="fade-up"
        />
        <img
          src={banner3}
          alt="banner"
          className="banner__image"
          data-aos="fade-up"
        />
        <img
          src={banner4}
          alt="banner"
          className="banner__image"
          data-aos="fade-up"
        />
        <img
          src={banner5}
          alt="banner"
          className="banner__image"
          data-aos="fade-up"
        />
        <img
          src={banner6}
          alt="banner"
          className="banner__image"
          data-aos="fade-up"
        />
        <img
          src={banner7}
          alt="banner"
          className="banner__image"
          data-aos="fade-up"
        />
        <img
          src={banner8}
          alt="banner"
          className="banner__image"
          data-aos="fade-up"
        />
        <img
          src={banner9}
          alt="banner"
          className="banner__image"
          data-aos="fade-up"
        />
        <img
          src={banner10}
          alt="banner"
          className="banner__image"
          data-aos="fade-up"
        />
        <img
          src={banner11}
          alt="banner"
          className="banner__image"
          data-aos="fade-up"
        />
        <img
          src={banner12}
          alt="banner"
          className="banner__image"
          data-aos="fade-up"
        />
        <img
          src={banner13}
          alt="banner"
          className="banner__image"
          data-aos="fade-up"
        />
        <img
          src={banner14}
          alt="banner"
          className="banner__image"
          data-aos="fade-up"
        />
        <img
          src={banner15}
          alt="banner"
          className="banner__image"
          data-aos="fade-up"
        />
        <img
          src={banner16}
          alt="banner"
          className="banner__image"
          data-aos="fade-up"
        />
        <img
          src={banner17}
          alt="banner"
          className="banner__image"
          data-aos="fade-up"
        />
        <img
          src={banner18}
          alt="banner"
          className="banner__image"
          data-aos="fade-up"
        />
        <img
          src={banner19}
          alt="banner"
          className="banner__image"
          data-aos="fade-up"
        />
        <img
          src={banner20}
          alt="banner"
          className="banner__image"
          data-aos="fade-up"
        />
      </section>
    </Wrapper>
  );
};

export default BannerList;

const Wrapper = styled.section`
  background-color: #fff;
  overflow-x: hidden;
  padding-top: 80px;

  .container {
    &__sub {
      padding: 100px 0;

      @media screen and (min-width: 960px) {
        padding: 120px 0;
      }
      @media screen and (min-width: 1024px) {
        padding: 140px 0;
      }
      @media screen and (min-width: 1200px) {
        padding: 160px 0;
      }

      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }
  }

  .banner {
    &__image {
      /* height: ; */
      width: 100%;
      /* background: #f8f1e6; */
      border-radius: 20px;
      padding: 24px;
      border: 1px solid #e4caa0;
      margin-bottom: 50px;

      &:nth-child(2n) {
        margin-left: 0px;
      }

      @media screen and (min-width: 960px) {
        width: 40%;

        &:nth-child(2n) {
          margin-left: 50px;
        }
      }
    }
  }
`;
