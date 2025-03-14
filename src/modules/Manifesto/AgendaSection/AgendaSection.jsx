import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AgendaFlex } from "../../../components";
import { agendas } from "../../../data";
import { logo } from "../../../assets/pngs";
import { svgs } from "../../../assets/svgs";

const { PartyLogo } = svgs;

const AgendaSection = () => {
  return (
    <Wrapper className="container">
      <section className="container__sub subb">
        <img src={PartyLogo} alt="YPP logo rotating" className="logo" />
      </section>
    </Wrapper>
  );
};

export default AgendaSection;

const Wrapper = styled.section`
  overflow-x: hidden;

  .container {
    &__sub {
      padding: 80px 0;

      @media screen and (min-width: 960px) {
        padding: 100px 0;
      }
      @media screen and (min-width: 1024px) {
        padding: 120px 0;
      }
      @media screen and (min-width: 1200px) {
        padding: 140px 0;
      }
    }
  }

  .summary {
    &__header {
      max-width: 472px;
      width: 100%;
      margin: 0 auto;
      text-align: center;
      font-weight: 700;
      font-size: 48px;
      line-height: 116%;
      color: #171d17;

      span {
        color: #0b4734;
        font-size: 3.8rem;
      }

      font-size: 2.8rem;

      @media screen and (min-width: 640px) {
        font-size: 3.2rem;
        span {
          font-size: 4.2rem;
        }
      }
      @media screen and (min-width: 800px) {
        font-size: 3.6rem;
        span {
          font-size: 4.6rem;
        }
      }
      @media screen and (min-width: 960px) {
        font-size: 4rem;
        span {
          font-size: 5rem;
        }
      }
      @media screen and (min-width: 1024px) {
        font-size: 4.4rem;
        span {
          font-size: 5.4rem;
        }
      }
      @media screen and (min-width: 1200px) {
        font-size: 4.8rem;

        span {
          font-size: 5.8rem;
        }
      }
    }

    &__body {
      display: flex;
      justify-content: space-between;
      text-align: left;
      flex-wrap: wrap;
      margin: 30px 0;
      @media screen and (min-width: 640px) {
        margin: 40px 0;
      }
      @media screen and (min-width: 800px) {
        margin: 50px 0;
      }
      @media screen and (min-width: 960px) {
        margin: 60px 0;
      }
      @media screen and (min-width: 1024px) {
        margin: 70px 0;
      }
      @media screen and (min-width: 1200px) {
        margin: 80px 0;
      }

      &--left,
      &--right {
        width: 100%;
        margin-bottom: 16px;
        @media screen and (min-width: 960px) {
          width: 48%;
          margin-bottom: 0;
        }
      }

      &--text {
        font-weight: 500;
        line-height: 150%;
        color: #747774;
        font-size: 1.4rem;
        margin-bottom: 16px;
        @media screen and (min-width: 960px) {
          font-size: 1.6rem;
          margin-bottom: 24px;
        }
      }
    }
  }

  .agendas-list {
    padding-top: 30px;

    @media screen and (min-width: 960px) {
      padding-top: 40px;
    }
    @media screen and (min-width: 1024px) {
      padding-top: 50px;
    }
    @media screen and (min-width: 1200px) {
      padding-top: 60px;
    }
  }

  .logo {
    width: 400px;
    height: 400px;
    max-width: 90%;
    padding: 1.5em;
    will-change: filter;
    animation-name: logo-spin;
    animation-duration: 10s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  @keyframes logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
