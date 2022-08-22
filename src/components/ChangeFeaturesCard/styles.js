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

  min-height: 500px;
  @media screen and (min-width: 640px) {
    min-height: 500px;
  }
  @media screen and (min-width: 800px) {
    min-height: 500px;
  }
  @media screen and (min-width: 960px) {
    min-height: 500px;
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
    }
  }
`;
