import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const DonationsTableWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  overflow-x: scroll;
  flex-direction: column;
  align-items: center;

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
    display: block;
    @media screen and (min-width: 960px) {
      width: max-content;
    }
  }

  th,
  td {
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 140%;
    text-align: left;
    color: #747774;
    white-space: pre;
    min-width: 200px;

    @media screen and (min-width: 720px) {
      margin-top: 40px;
    }
    @media screen and (min-width: 960px) {
      margin-top: 50px;
      font-size: 1.8rem;
      min-width: 300px;
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
    tr {
      &:first-child {
        td {
          margin-top: 40px;
        }
      }
      td {
        background: #f9f7f3;
        padding: 26px;
        text-transform: capitalize;
        &:first-child {
          border-top-left-radius: 10px;
          border-bottom-left-radius: 10px;
        }
        &:last-child {
          border-top-right-radius: 10px;
          border-bottom-right-radius: 10px;
        }
      }
    }

    .row-container {
      margin-bottom: 16px;
    }
  }

  .body-container {
    margin-top: 24px;
  }

  .pagination {
    margin-top: 32px;

    &__summary {
      font-size: 1.4rem;
      color: #171d17;
      margin-bottom: 8px;
    }
  }
`;
