import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { donateBannerImage } from "../../../assets/pngs";
import { DonationsTable } from "../../../components";

const Banner = () => {
  return (
    <Wrapper className="container">
      <section className="container__sub subb">
        <h3 className="donations__header">Donation History</h3>
        <section>
          <DonationsTable />
        </section>
      </section>
    </Wrapper>
  );
};

export default Banner;

const Wrapper = styled.section`
  background-color: #fff;
  padding-top: 80px;

  /* overflow-x: hidden; */

  .container {
    &__sub {
      padding: 80px 0;
      position: relative;

      padding-top: 380px;

      @media screen and (min-width: 290px) {
        padding-top: 380px;
      }

      @media screen and (min-width: 960px) {
        padding: 100px 0;
        padding-top: 480px;
      }
      @media screen and (min-width: 1024px) {
        padding: 120px 0;
        padding-top: 350px;
      }
      @media screen and (min-width: 1200px) {
        padding: 140px 0;
        padding-top: 380px;
      }
    }
  }

  .donations {
    &__header {
      font-weight: 600;
      line-height: 116%;
      text-align: center;
      color: #171d17;

      font-size: 2.8rem;
      @media screen and (min-width: 640px) {
        font-size: 3.2rem;
      }
      @media screen and (min-width: 800px) {
        font-size: 3.6rem;
      }
      @media screen and (min-width: 960px) {
        font-size: 4rem;
      }
      @media screen and (min-width: 1024px) {
        font-size: 4.4rem;
      }
      @media screen and (min-width: 1200px) {
        font-size: 4.8rem;
      }
    }
  }
`;
