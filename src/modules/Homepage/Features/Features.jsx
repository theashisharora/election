import React from "react";
import styled from "styled-components";
import { ChangeFeaturesCard, LocalGovernmentList } from "../../../components";
import { features } from "../../../data";

const Features = () => {
  return (
    <Wrapper className="container">
      <section className="container__sub subb">
        <h3 data-aos="fade-up" className="features__header--text">
          Let’s Make Real Change
        </h3>
        <ul className="features__list">
          {features.map((feature) => (
            <li
              data-aos="fade-up"
              className="features__list--item"
              key={feature.id}
            >
              <ChangeFeaturesCard {...feature} key={feature.title} />
            </li>
          ))}
        </ul>

        <section className="flex-section">
          <div className="left">
            <h6 data-aos="fade-up" className="vote-ypp">
              #VoteYPP
            </h6>
            <h3 data-aos="fade-up" className="district">
              Lagos Central Senatorial District
            </h3>
          </div>
          <div data-aos="fade-up" className="right">
            <LocalGovernmentList />
          </div>
        </section>
      </section>
    </Wrapper>
  );
};

export default Features;

const Wrapper = styled.section`
  background-color: #127254;
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

  .features {
    &__header {
      &--text {
        font-weight: 600;
        font-size: 2.8rem;
        line-height: 116%;
        color: #faf1e5;
        text-align: left;

        margin-bottom: 30px;
        @media screen and (min-width: 640px) {
          margin-bottom: 40px;
          font-size: 3.2rem;
        }
        @media screen and (min-width: 800px) {
          margin-bottom: 50px;
          font-size: 3.6rem;
        }
        @media screen and (min-width: 960px) {
          margin-bottom: 60px;
          font-size: 4rem;
        }
        @media screen and (min-width: 1024px) {
          margin-bottom: 70px;
          font-size: 4.4rem;
        }
        @media screen and (min-width: 1200px) {
          margin-bottom: 80px;
          font-size: 4.8rem;
        }
      }
    }

    &__list {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;

      &--item {
        width: 100%;
        margin-bottom: 30px;

        /* max-width: 370px; */

        @media screen and (min-width: 700px) {
          width: calc(calc(100% - 40px) / 3);

          &:not(:last-child) {
            margin-right: 20px;
          }
        }
        @media screen and (min-width: 880px) {
          width: calc(calc(100% - 50px) / 3);

          &:not(:last-child) {
            margin-right: 25px;
          }
        }
        @media screen and (min-width: 1024px) {
          width: calc(calc(100% - 60px) / 3);
          &:not(:last-child) {
            margin-right: 30px;
          }
        }
        @media screen and (min-width: 1200px) {
          width: calc(calc(100% - 80px) / 3);
          &:not(:last-child) {
            margin-right: 40px;
          }
        }
      }
    }
  }

  .flex-section {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;

    margin-top: 60px;
    @media screen and (min-width: 640px) {
      margin-top: 80px;
    }
    @media screen and (min-width: 960px) {
      flex-wrap: nowrap;
      margin-top: 100px;
    }
    @media screen and (min-width: 960px) {
      margin-top: 120px;
    }
    @media screen and (min-width: 1024px) {
      margin-top: 140px;
    }
    @media screen and (min-width: 1200px) {
      margin-top: 160px;
    }

    .left,
    .right {
      width: 100%;
    }

    .left {
      max-width: 370px;
      text-align: center;

      h6 {
        font-weight: 700;
        line-height: 150%;
        color: #ffc6c7;
        font-size: 1.6rem;
        @media screen and (min-width: 960px) {
          font-size: 1.8rem;
        }
        @media screen and (min-width: 1200px) {
          font-size: 2rem;
        }
      }

      h3 {
        font-weight: 600;
        line-height: 125%;
        color: #faf1e5;
        font-size: 2.4rem;
        margin-top: 16px;
        @media screen and (min-width: 960px) {
          font-size: 2.8rem;
        }
        @media screen and (min-width: 1200px) {
          font-size: 3.2rem;
        }
      }

      @media screen and (min-width: 960px) {
        width: 40%;
        text-align: left;
      }
    }
  }
`;
