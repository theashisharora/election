import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const DonationsTableWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    width: 0px;
    height: 0;
  }

  @media screen and (min-width: 720px) {
    margin-top: 40px;
  }
  @media screen and (min-width: 960px) {
    margin-top: 50px;
  }
  @media screen and (min-width: 1024px) {
    margin-top: 60px;
  }
  table {
    border-collapse: collapse;
    width: 100%;
  }

  th,
  td {
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 140%;
    text-align: left;
    color: #747774;
    white-space: pre;
    min-width: 300px;

    @media screen and (min-width: 720px) {
      margin-top: 40px;
    }
    @media screen and (min-width: 960px) {
      margin-top: 50px;
      font-size: 1.8rem;
    }
    @media screen and (min-width: 1024px) {
      margin-top: 60px;
      font-size: 2rem;
    }
  }

  td {
    font-weight: 400;
    color: #171d17;
  }

  thead {
    th {
      padding-bottom: 24px;
      border-bottom: 2px solid #d1d2d1;
    }
  }

  tbody {
    padding-top: 24px;
  }
`;
