import styled from "styled-components";

export const AgendaFlexWrapper = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 0rem;

  margin-bottom: 60px;
  @media screen and (min-width: 640px) {
    margin-bottom: 80px;
  }
  @media screen and (min-width: 960px) {
    margin-bottom: 100px;
  }
  @media screen and (min-width: 960px) {
    margin-bottom: 120px;
  }
  @media screen and (min-width: 1024px) {
    margin-bottom: 140px;
  }
  @media screen and (min-width: 1200px) {
    margin-bottom: 160px;
  }

  ol {
    list-style: decimal;

    li {
      list-style: decimal;
      margin-left: 16px;
      padding-left: 8px;
    }
  }

  @media screen and (max-width: 820px) {
    flex-direction: column;
    margin-top: 0.5rem;
  }

  @media screen and (min-width: 821px) {
    &:nth-child(2n) {
      flex-direction: row-reverse;

      .flex__right {
        padding-left: 0px;
        padding-right: 72px;
      }
    }
  }

  .flex {
    &__left {
      width: 50%;
      padding: 0;
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;

      &--image {
        max-width: 100%;
        object-fit: cover;
        max-height: 90vh;
        aspect-ratio: 811/1080;
      }

      @media screen and (max-width: 820px) {
        width: 100%;
      }
    }

    &__right {
      width: 50%;
      margin: 0;
      margin-top: 40px;

      @media screen and (min-width: 821px) {
        margin-top: 0px;
        padding-left: 72px;
      }

      @media screen and (max-width: 820px) {
        width: 100%;
        /* margin-top: 1rem; */
      }
    }

    &__header {
      font-weight: 700;
      line-height: 125%;
      text-align: left;
      color: #171d17;
      font-size: 2.2rem;
      margin-bottom: 20px;

      @media screen and (min-width: 640px) {
        font-size: 2.4rem;
        margin-bottom: 24px;
      }
      @media screen and (min-width: 800px) {
        font-size: 2.6rem;
        margin-bottom: 28px;
      }
      @media screen and (min-width: 960px) {
        font-size: 2.8rem;
        margin-bottom: 32px;
      }
      @media screen and (min-width: 1024px) {
        font-size: 3rem;
        margin-bottom: 36px;
      }
      @media screen and (min-width: 1200px) {
        font-size: 3.2rem;
        margin-bottom: 40px;
      }
    }

    &__body {
      &--text {
        font-weight: 500;
        line-height: 150%;
        color: #747774;
        font-size: 1.4rem;
        text-align: left;
        margin-bottom: 16px;

        @media screen and (min-width: 960px) {
          font-size: 1.6rem;
          margin-bottom: 16px;
        }
      }
    }
  }

  b,
  b i {
    font-weight: 700;
    line-height: 150%;
    color: #242424;
    font-size: 1.4rem;
    text-align: left;
    margin-bottom: 16px;

    @media screen and (min-width: 960px) {
      font-size: 1.6rem;
      margin-bottom: 16px;
    }
  }
`;
