import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const FooterWrapper = styled.footer`
  position: relative;
  background-color: white;
  border-top: 1px solid rgba(23, 29, 23, 0.2);
  /* background-color: red; */

  .container {
  }
  .subb {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 0;
    position: relative;
    width: 100%;
    flex-direction: column;

    @media screen and (min-width: 800px) {
      padding: 20px 0;
      flex-direction: row;
    }
    @media screen and (min-width: 960px) {
      justify-content: space-between;
    }
  }

  .footer {
    &__left {
      margin-bottom: 30px;
      @media screen and (min-width: 800px) {
        margin-bottom: 0px;
      }
      a {
        font-weight: 700;
        font-size: 1.4rem;
        line-height: 175%;
        color: #171d17;
        /* margin-right: 24; */

        &:first-child {
          margin-right: 50px;
        }

        @media screen and (min-width: 800px) {
          font-size: 1.6rem;
          margin-right: 24px;
          &:first-child {
            margin-right: 50px;
          }
        }
      }
    }

    &__right {
      display: flex;
      flex-direction: column;

      @media screen and (min-width: 450px) {
        flex-direction: row;

        a {
          &:last-child {
            margin-left: 16px;
          }
        }
      }
      a {
        width: 201px;
        &:first-child {
          margin-bottom: 16px;

          @media screen and (min-width: 450px) {
            margin-bottom: 0px;
          }
        }
      }
    }
  }
`;
