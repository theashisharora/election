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
              <h5 className="profile__reason--card-header">Early Life </h5>
              <div className="profile__reason--card-body">
                <p className="profile__reason--card-body__text">
                  Oladeji Blessing Olatunde was born less than 40 years ago in a
                  public general hospital to parents working in the public
                  sector. My father served in the Nigerian Police and spent most
                  of his service years in Lagos investigating crimes, while my
                  mum was into commodity trading. Due to the quality at that
                  time, all of my education was in public school from primary
                  school to University. To be in public schools in the 90s and
                  2000s, teachers union strike was a common experience. This
                  struck me as unfair, even as at then, how children's lives and
                  times waste away due to frequent industrial actions.
                </p>
              </div>
            </article>
            <article className="profile__reason--card">
              <h5 className="profile__reason--card-header">Challenges</h5>
              <div className="profile__reason--card-body">
                <p className="profile__reason--card-body__text">
                  I went on to study Computer Science at the University of
                  Ibadan where I graduated with a first class. Although, I wrote
                  JAMB in the year 2000 and never got into the first year until
                  2002 due to strike actions. I have always wondered how we
                  proffered solutions to problems facing education in Social
                  Studies and Government and the same problem lingered through
                  many generations. Upon graduation, I came back to Lagos and
                  pursued a career in IT moving from Huawei to MTN and then
                  Etisalat before co-founding Octave Analytics. Throughout my
                  career, I have witnessed (live and direct) the impact of the
                  incessant strikes on the quality of graduates that are churned
                  out from Nigerian universities.
                </p>
              </div>
            </article>
          </div>

          <div className="profile__reason--flex">
            <article className="profile__reason--card">
              <h5 className="profile__reason--card-header">The Drive</h5>
              <div className="profile__reason--card-body">
                <p className="profile__reason--card-body__text">
                  My journey to the Senate is to create an enabling environment
                  where we can do more and better for ourselves. I am also a
                  strong advocate for defending the land from the dangers of
                  climate change which are directly related to resource
                  contention in the Northern states and across some southern
                  states in the country. I will protect women’s rights and
                  ensure inclusiveness and equal opportunity for all genders. I
                  will work to end insecurity and injustice in the land. A vote
                  for me is a vote to end dark money and godfathers’ influence
                  on our politics, and will always put your voices ahead of
                  those of other politicians’ wealthy campaign contributors.
                  It’s time for a true change. It’s time to deliver to, and for
                  the future generation, and as your Senator.
                </p>
              </div>
            </article>
            <article className="profile__reason--card">
              <h5 className="profile__reason--card-header">Experience </h5>
              <div className="profile__reason--card-body">
                <p className="profile__reason--card-body__text">
                  I have been the CEO of Octave Analytics company for the past 6
                  years, creating job opportunities and IT capacity building for
                  young people. I have been able to lead teams leveraging data
                  and technology to drive growth and sustainability for
                  businesses listed on Nigeria Stock Exchange making them
                  profitable despite recessions and currency devaluation. We
                  have significantly expanded the tech ecosystem and created a
                  large market for talents locally and internationally. Before
                  Octave Analytics I was:
                </p>
                <ol>
                  <li className="profile__reason--card-body__text">
                    Head of Analytics at Etisalat Nigeria now 9mobile Telecoms
                  </li>
                  <li className="profile__reason--card-body__text">
                    Snr. System Integration Specialist at MTN Nigeria
                  </li>
                  <li className="profile__reason--card-body__text">
                    Project Manager, Applications and Software at Huawei
                    Technologies
                  </li>
                  <li className="profile__reason--card-body__text">
                    Assistant Manager, Database & Infrastructure at UnityKapital
                    Assurance (now Veritas Insurance)
                  </li>
                  <li className="profile__reason--card-body__text">
                    Senior Consultant, Unity Bank Data Cleansing Project
                    following the merger of 9 financial institutions post 2007
                    banks consolidation
                  </li>
                  <li className="profile__reason--card-body__text">
                    Asst. Manager, Training at Afribub Training Institute
                  </li>
                </ol>
              </div>
            </article>
          </div>

          <div className="profile__reason--flex">
            <article className="profile__reason--card">
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
            </article>
            <article className="profile__reason--card">
              <h5 className="profile__reason--card-header">
                Recognitions & Professional Achievements
              </h5>
              <div className="profile__reason--card-body">
                <p className="profile__reason--card-body__text">
                  As a data scientist and IT expert, I have worked at the nexus
                  of the use of Data Analytics to drive growth and
                  sustainability for many companies in Nigeria and abroad. I
                  have led many short and long-term technology-related
                  initiatives leading to recognitions and awards from the
                  industry:
                </p>
                <ol>
                  <li className="profile__reason--card-body__text">
                    Oversaw and Managed Several Data-Related projects for
                    Private Companies and the Federal Government of Nigeria
                    including the Central Bank of Nigeria and the Federal Inland
                    Revenue Service projects
                  </li>
                  <li className="profile__reason--card-body__text">
                    Led the Data Engineering team at the Post-Merger Integration
                    and Data Cleanup for the 9 Banks that Merged into Unity Bank
                  </li>
                  <li className="profile__reason--card-body__text">
                    Developed and Implemented Data Strategy for Etisalat 4G
                    rollout and SIM Reg Data Cleanup in 2015 and 2016
                    respectively
                  </li>
                  <li className="profile__reason--card-body__text">
                    In 2018, I was appointed a member of the Data Analytics
                    Workstream of the National Economic Summit Group (NESG)
                  </li>
                  <li className="profile__reason--card-body__text">
                    In 2019, I received the ‘Industry Support Award” award from
                    the Data Science of Nigeria for my contributions to the Data
                    Ecosystem in Nigeria
                  </li>
                  <li className="profile__reason--card-body__text">
                    Led the teams that won Zenith Bank, Access Bank and KPMG
                    Data & Technology Hackathons between 2017 and 2019
                  </li>
                  <li className="profile__reason--card-body__text">
                    Awarded the Best Class Governor for 3 consecutive times in
                    the University in Recognition of my Exceptionalities and
                    Leadership Qualities
                  </li>
                  <li className="profile__reason--card-body__text">
                    Developed the Concept for Lagos State Bureau of Statistics
                    Integrated Data Management for Decision Making and Delivery
                    Effectiveness
                  </li>
                  <li className="profile__reason--card-body__text">
                    Implemented Open Data Framework for the Determination of
                    NIBSS-CBN Financial Inclusion and BVN Penetration at Local
                    Government Granularity
                  </li>
                  <li className="profile__reason--card-body__text">
                    Between 1999 and 2003, Blessing participated actively as a
                    member of the Committee for Defense of Human Rights (CDHR)
                  </li>
                  <li className="profile__reason--card-body__text">
                    Articulated the Concepts of Using Locally-Based
                    Crowdsourcing to Measure Malaria and FP Product Availability
                    in Nigeria
                  </li>
                  <li className="profile__reason--card-body__text">
                    Graduated First-Class and globally certified by recognized
                    credentialing organizations such as Oracle, Data Science
                    Council of America, Cisco Inc. and International Institute
                    of Business Analysis
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
