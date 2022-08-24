import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AgendaFlex } from "../../../components";
import { agendas } from "../../../data";

const AgendaSection = () => {
  return (
    <Wrapper className="container">
      <section className="container__sub subb">
        <h2 className="summary__header" data-aos="fade-up">
          <span data-aos="fade-up">7-Point</span> Legislative Agenda
        </h2>
        <article className="summary__body">
          <div className="summary__body--left">
            <p data-aos="fade-up" className="summary__body--text">
              The elders say “a tree does not make a forest”. As we seek to
              elect a new President in 2023, you will agree that an effective
              President needs a competent Senate. We need to constitute a Senate
              that will bring the people hope and instill confidence in
              investors who will facilitate our economic recovery.
            </p>
            <p data-aos="fade-up" className="summary__body--text">
              It is in our hands to determine the kind of society we want to
              live in, how we want to ensure common welfare and those who should
              represent us to achieve these common aspirations.{" "}
            </p>
          </div>
          <div className="summary__body--right">
            <p data-aos="fade-up" className="summary__body--text">
              One mistake we should not make is to elect people who are not
              deeply connected with our pains in Lagos Central or
              representatives that will not put the constituents first. We
              should not vote for those who make us feel more and more helpless
              about the change we desire.
            </p>
            <p data-aos="fade-up" className="summary__body--text">
              In this era of economic instability, hyper inflation, security
              challenges and incessant ASUU strike, if we want to change the
              narrative, then, we must change the Senate!
            </p>
          </div>
        </article>

        <ul className="agendas-list">
          {agendas.map((agenda) => (
            <AgendaFlex {...agenda} key={agenda.headerText} />
          ))}
        </ul>
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
`;
