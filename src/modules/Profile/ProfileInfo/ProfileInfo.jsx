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
          I’m a tech enthusiast at Sheridan College, focused on web development, machine learning, and cybersecurity. Passionate about building solutions, collaborating, and making an impact both in and outside the classroom. Always learning, always growing.
          </p>
        </article>
        <section className="profile__reason">
          <h2 className="profile__reason--header">Why I’m I running?</h2>

          <div className="profile__reason--flex">
            <article className="profile__reason--card">
              <h5 className="profile__reason--card-header">My Vision </h5>
              <div className="profile__reason--card-body">
                <p className="profile__reason--card-body__text">
                I’m running for the Board of Directors to be a strong voice for the students at Sheridan College. As someone who is passionate about creating positive change, I want to ensure that the needs and concerns of all students are heard and addressed. My goal is to drive impactful initiatives that enhance the overall student experience, from advocating for better resources to supporting projects that benefit the entire college community. Through collaboration with fellow directors, transparency in decision-making, and a focus on long-term improvements, I am committed to making a meaningful difference both on campus and for future generations of students.
                </p>
              </div>
            </article>
            <article className="profile__reason--card">
              <h5 className="profile__reason--card-header">Personal Experience</h5>
              <div className="profile__reason--card-body">
                <p className="profile__reason--card-body__text">
                Having been an active member of the Sheridan community, I’ve experienced firsthand the challenges and opportunities students face. Through my involvement in various student initiatives, I’ve developed a strong understanding of the needs and concerns of my peers. As a student ambassador and through my leadership roles, I’ve seen how impactful strong representation and collaboration can be in shaping a positive student experience. This personal connection to the student body fuels my desire to serve on the Board of Directors, where I can use my experience to advocate for meaningful change that benefits all students at Sheridan.
                </p>
              </div>
            </article>
          </div>

          

          <div className="profile__reason--flex">
            {/* <article className="profile__reason--card">
              <h5 className="profile__reason--card-header">Opportunities</h5>
              <div className="profile__reason--card-body">
                <p className="profile__reason--card-body__text">
                  However, amid all these challenges, I see hope and great
                  opportunities for the future of our country. One practical way
                  I have attempted to address this problem is by setting up
                  Octave Analytics to bridge the gaps between town and gown. At
                  Octave, I have worked with promising young graduates to expand
                  their skill sets in tech and data science fields. Through our
                  Graduate Internship Programmes, we have created a flowing
                  pipeline of top talents in Data Science for the global
                  markets. These talents dominate blue chip companies in Nigeria
                  and abroad generating foreign remittances that boost Nigeria's
                  economy.
                </p>
                <p className="profile__reason--card-body__text">
                  As someone who works very closely with the youth population, I
                  see a lot of raw talent but the legislative and governmental
                  systems that can harness the best out of them are lacking.
                  This is my strongest motivation for vying for a seat in the
                  Senate.
                </p>
                <p className="profile__reason--card-body__text">
                  One thing that keeps me awake at night and drives the vision
                  is seeing a raw talent rising from obscurity to rubbing
                  shoulders with other talents in global organizations. This has
                  been the story of my life and I wish to replicate it more in
                  others. I have seen a talent from Nsukka who started coding
                  SQL on paper but today heads the Artificial Intelligence
                  function in a bluechip company in Nigeria. Another talent was
                  a farmer in Niger state under the FADAMA II project in 2018
                  now heads the Analytics and Business Intelligence functions in
                  a first-generation bank. There can be much more but our
                  success so far is limited by inefficiencies and bureaucracies
                  in government. Our success is limited by the security
                  challenges in the country. This has led to a significant brain
                  drain and capital flight with Nigerian startups relocating to
                  Kenya, Kigali and Cairo. And, this is not affecting the tech
                  business alone.{" "}
                </p>
              </div>
            </article> */}
            <article className="profile__reason--card profile__reason--card__full">
  <h5 className="profile__reason--card-header">Experience</h5>
  <div className="profile__reason--card-body">
    <p className="profile__reason--card-body__text">
      I have been actively involved in leadership roles at Sheridan College, including my work as a Student Ambassador and a Lead/Senior Sales Associate at Tommy Hilfiger. Through these positions, I have developed strong communication, team collaboration, and problem-solving skills. As a Student Ambassador, I have helped guide new students through their transition to college, providing them with vital resources and support. I’ve also collaborated with various teams to organize and facilitate events, strengthening my ability to engage with diverse student groups and address their needs effectively.
    </p>
    <ol>
      <li className="profile__reason--card-body__text">
        Lead/Senior Sales Associate at Tommy Hilfiger since October 2023
      </li>
      <li className="profile__reason--card-body__text">
        Sheridan Student Ambassador since August 2024
      </li>
      <li className="profile__reason--card-body__text">
        New Student Orientation Volunteer at Sheridan College
      </li>
      <li className="profile__reason--card-body__text">
        Volunteer at Mission Zero Free Pop-Up Shop
      </li>
    </ol>
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

  ol {
    list-style: decimal;

    li {
      list-style: decimal;
      margin-left: 16px;
      padding-left: 8px;
    }
  }

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
        margin-bottom: 40px;

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

        &__full {
          min-width: 80%;
          margin-right: 0 !important;
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

// proper noun "Lahos central senatorial"
// earlyulife (use first person pronoun here)   challenges
// oppoetunitiescombined with drive   experience
// achievements    recognition
