import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavbarWrapper = styled.header`
  position: relative;
  background-color: #f8f1e6;
  border-bottom: 1px solid #e4caa0;
  /* background-color: red; */

  .container {
  }
  .subb {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 16px 0;
    position: relative;
    width: 100%;

    @media screen and (min-width: 768px) {
      padding: 20px 0;
    }
    @media screen and (min-width: 960px) {
      justify-content: space-between;
    }
    /* @media screen and (min-width: 1024px) {
      padding: 24px 0;
    }
    @media screen and (min-width: 1280px) {
      padding: 32px 0;
    } */

    .home {
      /* position: relative; */
      z-index: 10;
    }
  }

  position: relative;
  display: flex;
  justify-content: space-between;
  .home {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%);
  }

  .btn__outline {
    margin-left: 16px;
  }

  .nav {
    &__logo {
      height: 88px;
      width: 88px;
      @media screen and (min-width: 960px) {
        height: 88px;
        width: 88px;
      }
      @media screen and (min-width: 1200px) {
        height: 108px;
        width: 108px;
      }

      color: ${({ darkMode }) => (!darkMode ? "var(--black)" : "var(--white)")};

      &:hover {
        transform: scale(1.5);
      }
    }
    &__buttons {
      display: flex;
      align-items: center;
      overflow: hidden;
      position: relative;
      /* width: 300px; */
      justify-content: flex-end;
      padding: 0px 0;

      .donate-btn {
        background-color: red;
      }

      @media screen and (min-width: 960px) {
        padding: 0;
        /* display: none; */
      }
    }
    &__nav {
      /* position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%; */
      display: none;

      @media screen and (min-width: 960px) {
        display: flex;

        &-list {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
    &__link {
      overflow: hidden;
      position: relative;
      display: inline-block;

      span {
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 2.4rem;
        display: block;
        line-height: 2.8rem;
        color: #503a16;
      }
      color: ${({ darkMode }) => (!darkMode ? "var(--black)" : "var(--white)")};
      .line {
        position: relative;
        left: -100%;
        width: 100%;
        border-top: 2px solid #171d17;
        margin-top: -4px;
      }

      &:hover,
      &.active {
        /* background-color: red; */
        color: #171d17;
        .line {
          transform: translate3d(100%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
            rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
          transform-style: preserve-3d;
        }

        span {
          font-weight: 700;
        }
      }
    }
  }
`;

export const MenuButton = styled.button`
  @media screen and (min-width: 960px) {
    display: none;
  }
`;

export const NavListItem = styled.li`
  margin-right: 0px;

  @media screen and (min-width: 960px) {
    margin-right: 40px;
  }

  .nav {
    &__link {
    }
  }
`;

export const NavL = styled(NavLink).attrs({
  className: ({ isActive }) => (isActive ? "active" : ""),
})`
  overflow: hidden;
  position: relative;
  display: inline-block;

  span {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.4rem;
    display: block;
    line-height: 2.8rem;
    color: #503a16;
  }
  color: ${({ darkMode }) => (!darkMode ? "var(--black)" : "var(--white)")};
  .line {
    position: relative;
    left: -100%;
    width: 100%;
    border-top: 2px solid #171d17;
    margin-top: -4px;
  }

  &:hover,
  &.active {
    /* background-color: red; */
    color: #171d17;
    .line {
      transform: translate3d(100%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
        rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
      transform-style: preserve-3d;
    }

    span {
      font-weight: 700;
    }
  }
`;

export const NavDropdown = styled.section.attrs({
  className: "container_sub",
})`
  width: 100%;
  background: #f8f1e6;
  z-index: 8;
  height: 100vh;
  position: fixed;
  transform: translate3d(0px, -150vh, 0px) scale3d(1, 1, 1) rotateX(0deg)
    rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  transform-style: preserve-3d;
  &.open {
    transform: translate3d(0px, 0vh, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d;
    li {
      a {
        transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg)
          rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
        transform-style: preserve-3d;
      }
    }
  }

  ul {
    margin-top: 64px;
  }

  li {
    margin-bottom: 24px;
  }
`;

export const MobileLetsTalkButton = styled.button`
  @media screen and (min-width: 960px) {
    display: none;
  }
  /* width: 42px;
  height: 42px; */
  background: var(--green);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 12px;

  font-weight: 400;
  font-size: 1.4rem;
  line-height: 150%;
  color: white;
  background: var(--green);
  padding: 12px;
  border-radius: 50px;

  position: absolute;
  right: -250px;

  /* &:hover {
    transform: scale(1.4);
  } */
  &.open {
    right: 56px;
  }
`;
