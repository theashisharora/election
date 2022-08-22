import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const LocalGovernmentListWrapper = styled.div`
  width: 100%;
  * {
    transition: 0.5s ease-in-out;
  }

  @media screen and (min-width: 960px) {
    margin-left: 30px;
  }

  .pointer {
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 960px) {
      flex-direction: column;
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
