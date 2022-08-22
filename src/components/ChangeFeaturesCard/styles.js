import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const ChangeFeaturesCardWrapper = styled.article`
  width: 100%;
  padding: 32px;
  border-radius: 20px;
  background: #0b4734;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  color: white;
  overflow-y: hidden;

  * {
    transition: 0.8s;
  }

  min-height: 500px;
  @media screen and (min-width: 640px) {
    min-height: 500px;
    padding: 32px 24px;
  }
  @media screen and (min-width: 800px) {
    min-height: 500px;
  }
  @media screen and (min-width: 960px) {
    min-height: 500px;
    padding: 32px;
  }
  @media screen and (min-width: 1024px) {
    min-height: 500px;
  }
  @media screen and (min-width: 1200px) {
    min-height: 500px;
  }

  .card {
    &__header {
      font-weight: 600;
      line-height: 130%;
      text-align: left;
      /* transform: translateY(100%); */

      font-size: 2.6rem;
      @media screen and (min-width: 640px) {
        font-size: 2.4rem;
      }
      @media screen and (min-width: 800px) {
        font-size: 2.6rem;
      }
      @media screen and (min-width: 960px) {
        font-size: 2.8rem;
      }
      @media screen and (min-width: 1024px) {
        font-size: 3rem;
      }
      @media screen and (min-width: 1200px) {
        font-size: 3.2rem;
      }

      &--animate {
        display: none;
        transform: translateY(100px);
      }
    }

    &__description {
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 150%;
      opacity: 0;
      text-align: left;
      margin-top: 24px;
      display: none;
      transform: translateY(100px);

      font-size: 1.4rem;
      @media screen and (min-width: 960px) {
        font-size: 1.6rem;
      }
    }

    &__cta {
      margin-top: 40px;
      padding: 16px 32px;
      max-width: 200px;
      max-height: 56px;
      font-weight: 600;
      line-height: 150%;
      background: #116a4e;
      border-radius: 8px;
      font-size: 1.4rem;
      width: 200px;
      height: 56px;
      max-width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      @media screen and (min-width: 960px) {
        font-size: 1.6rem;
      }
    }
  }

  &:hover {
    .card {
      &__description {
        animation-name: slide-up-slowly;
        animation-duration: 1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in-out;
        display: block;
        transform: translateY(0);
        opacity: 0.8;
      }

      &__header {
        display: none;
        &--animate {
          animation-name: slide-up-slowly;
          animation-duration: 1s;
          animation-fill-mode: forwards;
          animation-timing-function: ease-in-out;
          display: block;
          transform: translateY(0);
          opacity: 1;
        }
      }

      &__cta {
        background-color: white;
        color: #0b4734;
      }
    }
  }

  @keyframes slide-up-slowly {
    0% {
      transform: translateY(100px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 0.8;
    }
  }
`;
