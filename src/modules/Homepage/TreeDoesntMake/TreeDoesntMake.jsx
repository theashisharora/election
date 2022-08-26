import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { iVotedIllustration } from "../../../assets/pngs";

const TreeDoesntMake = () => {
  return (
    <Wrapper className="container">
      <section className="container__sub subb">
        <h2 data-aos="fade-up">A Tree Doesn’t Make A Forest.</h2>
        <section className="flex">
          <div data-aos="fade-up" className="flex__left">
            <p data-aos="fade-up">
              It is the job of the Senate to make legislation that secure, unite
              and make Nigeria productive. This is a long-term project that
              requires consistency. We can not achieve much of that with the
              people who do not care or with those who secured their candidature
              with a N100m application form.
            </p>
            <p data-aos="fade-up">
              My mission goal is to change Nigeria and that will require
              changing those that represent us in the upper chambers of the
              National Assembly. We cannot do the same thing and get a different
              result. We cannot elect the same crop of politicians and change
              the country. So, I have the honour today to present myself to you
              as the next senator of Lagos Central Senatorial district – God
              willing!
            </p>
            <Link to="/manifesto">
              <button className="btn btn__filled">Read Manifesto</button>
            </Link>
          </div>
          <img
            className="flex__right"
            alt="I will vote"
            src={iVotedIllustration}
          />
        </section>
      </section>
    </Wrapper>
  );
};

export default TreeDoesntMake;

const Wrapper = styled.section`
  overflow-x: hidden;

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

  h2 {
    font-weight: 700;
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

  .flex {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;

    margin-top: 30px;
    @media screen and (min-width: 640px) {
      margin-top: 40px;
    }
    @media screen and (min-width: 800px) {
      margin-top: 50px;
    }
    @media screen and (min-width: 960px) {
      margin-top: 60px;
    }
    @media screen and (min-width: 1024px) {
      margin-top: 70px;
    }
    @media screen and (min-width: 1200px) {
      margin-top: 80px;
    }

    &__left,
    &__right {
      width: 100%;

      @media screen and (min-width: 960px) {
        width: 42%;
      }
    }
    &__left {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 30px;
      @media screen and (min-width: 960px) {
        margin-bottom: 0;
      }
    }
  }

  p {
    font-weight: 400;
    line-height: 144%;
    color: #171d17;
    opacity: 0.6;
    font-size: 1.4rem;
    text-align: left;
    margin-bottom: 24px;

    @media screen and (min-width: 800px) {
      font-size: 1.6rem;
    }
    @media screen and (min-width: 1024px) {
      font-size: 1.8rem;
    }
  }

  button.btn {
    padding: 12px 26px;
  }
`;

// make navbar fixed
