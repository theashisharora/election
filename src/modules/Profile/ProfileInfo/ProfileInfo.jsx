import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { profileBannerImage } from "../../../assets/pngs";

const Banner = () => {
  return (
    <Wrapper className="container">
      <section className="container__sub subb">
        <article className="profile__pre">
          <p className="profile__pre--text" data-aos="fade-up">
            I am vying for the position of Lagos central senatorial seat under
            the auspices of the Young Progressive Party. Lagos Central comprises
            of Apapa, and Eti-Osa from Obalende to Sangotedo, Lagos Island,
            Lagos Mainland and Surulere.
          </p>
        </article>
        <section className="profile__reason">
          <h2 className="profile__reason--header">Why I’m I running?</h2>

          <div className="profile__reason--flex">
            <article className="profile__reason--card">
              <h5 className="profile__reason--card-header">Knowledge</h5>
              <div className="profile__reason--card-body">
                <p className="profile__reason--card-body__text">
                  I have been the CEO of a tech company for the past 6 years,
                  creating job opportunities and capacity training for young
                  people.
                </p>
                <p className="profile__reason--card-body__text">
                  We have been able to leverage data and technology to drive
                  growth and sustainability for businesses listed on the stock
                  exchange making the profitable despite recession currency
                  devaluation. We have significantly expanded the tech ecosystem
                  and created a large market for talents locally and
                  internationally.
                </p>
              </div>
            </article>
            <article className="profile__reason--card">
              <h5 className="profile__reason--card-header">Opportunities</h5>
              <div className="profile__reason--card-body">
                <p className="profile__reason--card-body__text">
                  The opportunities abound beyond what we can mine/tap. But our
                  success is limited by inefficiencies and bureaucracies in
                  government. Our success is limited by the security challenges
                  in the country.
                </p>
                <p className="profile__reason--card-body__text">
                  This had led to a significant brain drain and capital flight
                  with businesses relocating to Kenya, Kigali and Cairo. And,
                  this is not affecting the tech business alone.
                </p>
              </div>
            </article>
          </div>
        </section>
      </section>
    </Wrapper>
  );
};

export default Banner;

const Wrapper = styled.section`
  background-color: #fff;
  overflow-x: hidden;

  .container {
    &__sub {
      padding: 50px 0;
      padding-bottom: 120px;

      @media screen and (min-width: 960px) {
        padding: 60px 0;
        padding-bottom: 150px;
      }
      @media screen and (min-width: 1024px) {
        padding: 70px 0;
        padding-bottom: 160px;
      }
      @media screen and (min-width: 1200px) {
        padding: 80px 0;
        padding-bottom: 192px;
      }
    }
  }

  .profile {
    &__pre {
      margin-bottom: 50px;

      @media screen and (min-width: 960px) {
        margin-bottom: 60px;
      }
      @media screen and (min-width: 1024px) {
        margin-bottom: 70px;
      }
      @media screen and (min-width: 1200px) {
        margin-bottom: 80px;
      }
      &--text {
        font-weight: 600;
        line-height: 133%;
        text-align: center;
        color: #747774;
        max-width: 770px;
        font-size: 1.6rem;
        margin: 0 auto;
        @media screen and (min-width: 640px) {
          font-size: 1.8rem;
        }
        @media screen and (min-width: 800px) {
          font-size: 2rem;
        }
        @media screen and (min-width: 960px) {
          font-size: 2.2rem;
        }
        @media screen and (min-width: 1200px) {
          font-size: 2.4rem;
        }
      }
    }

    &__reason {
      &--header {
        font-weight: 600;
        line-height: 116%;
        text-align: center;
        color: #171d17;
        margin-bottom: 30px;

        font-size: 2.8rem;
        @media screen and (min-width: 640px) {
          font-size: 3.2rem;
          margin-bottom: 36px;
        }
        @media screen and (min-width: 800px) {
          font-size: 3.6rem;
          margin-bottom: 42px;
        }
        @media screen and (min-width: 960px) {
          font-size: 4rem;
          margin-bottom: 48px;
        }
        @media screen and (min-width: 1024px) {
          font-size: 4.4rem;
          margin-bottom: 54px;
        }
        @media screen and (min-width: 1200px) {
          font-size: 4.8rem;
          margin-bottom: 60px;
        }
      }

      &--flex {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;

        @media screen and (min-width: 820px) {
          flex-direction: row;
          align-items: stretch;
        }
      }

      &--card {
        background: #f9f7f3;
        border-radius: 20px;
        width: 100%;
        max-width: 464px;
        &:first-child {
          margin-right: 0;
          margin-bottom: 30px;

          @media screen and (min-width: 820px) {
            margin-right: 30px;
            margin-bottom: 0px;
          }
        }

        padding: 24px;
        @media screen and (min-width: 640px) {
          padding: 32px;
        }
        @media screen and (min-width: 1200px) {
          padding: 40px;
        }

        &-header {
          font-weight: 600;
          font-size: 32px;
          line-height: 125%;
          color: #171d17;
          padding-bottom: 24px;
          margin-bottom: 24px;
          border-bottom: 2px solid #e4caa0;
          text-align: left;
          @media screen and (min-width: 1024px) {
            padding-bottom: 32px;
            margin-bottom: 32px;
          }
          @media screen and (min-width: 1200px) {
            padding-bottom: 40px;
            margin-bottom: 40px;
          }

          font-size: 2rem;
          @media screen and (min-width: 640px) {
            font-size: 2.2rem;
          }
          @media screen and (min-width: 800px) {
            font-size: 2.4rem;
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

        &-body {
          &__text {
            font-weight: 400;
            line-height: 150%;
            color: #747774;
            font-size: 1.4rem;
            text-align: left;

            @media screen and (min-width: 960px) {
              font-size: 1.6rem;
            }

            &:not(:last-child) {
              margin-bottom: 21px;
              @media screen and (min-width: 960px) {
                margin-bottom: 24px;
              }
            }
          }
        }
      }
    }
  }
`;
