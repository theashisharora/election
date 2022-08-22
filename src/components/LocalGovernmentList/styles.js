import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const LocalGovernmentListWrapper = styled.div`
  width: 100%;
  * {
    transition: 0.5s ease-in-out;
  }
  display: flex;
  flex-direction: column;
  margin-top: 30px;

  @media screen and (min-width: 960px) {
    margin-left: 30px;
    flex-direction: row;
    margin-top: 0;
    padding-right: 20px;
  }

  .local-government {
    width: 100%;
    border: 4px solid #116a4e;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 24px;
    @media screen and (min-width: 960px) {
      padding: 32px;
    }
    @media screen and (min-width: 1024px) {
      padding: 40px;
    }

    &__header {
      font-weight: 600;
      line-height: 150%;
      color: #faf1e5;

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

    &__wards {
      margin-top: 24px;
      @media screen and (min-width: 960px) {
        margin-top: 32px;
      }
      @media screen and (min-width: 1024px) {
        margin-top: 36px;
      }
      display: flex;
      flex-wrap: wrap;

      &--item {
        font-weight: 500;
        font-size: 16px;
        line-height: 150%;
        color: white;
        background: #116a4e;
        border-radius: 100px;
        padding: 10px 16px;
        margin-right: 16px;
        margin-bottom: 10px;
      }
    }
  }

  .pointer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 30px;
    margin-top: 30px;

    @media screen and (min-width: 960px) {
      flex-direction: column;
      margin-top: 0;
    }

    &__item {
      margin: 0 10px;
      @media screen and (min-width: 960px) {
        margin: 0;
      }
      button {
        width: 12px;
        height: 12px;
        border: 1px solid #ffffff;
        border-radius: 50%;
      }

      &--active {
        button {
          background-color: #ffffff;
          border: none;
        }
      }
    }
  }
`;
