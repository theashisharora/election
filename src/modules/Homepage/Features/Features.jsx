import React from "react";
import styled from "styled-components";
import { ChangeFeaturesCard } from "../../../components";
import { features } from "../../../data";

const Features = () => {
  return (
    <Wrapper className="container">
      <section className="container__sub subb">
        <h3 className="features__header--text">Let’s Make Real Change</h3>
        <ul className="features__list">
          {features.map((feature) => (
            <li className="features__list--item" key={feature.id}>
              <ChangeFeaturesCard {...feature} key={feature.title} />
            </li>
          ))}
        </ul>
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
`;
