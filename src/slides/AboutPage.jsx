import styled from '@emotion/styled';
import ExperienceList from '../components/Common/Experience/ExperienceList';
import PrimaryButtonLink from '../components/Common/FormElements/PrimaryButtonLink';
import SecondaryButtonLink from '../components/Common/FormElements/SecondaryButtonLink';
import ListHeader from '../components/Common/ListHeader/ListHeader';
import SkillsList from '../components/Common/Skills/SkillsList';
import {
  BREAKPOINT_L,
  BREAKPOINT_MD,
  BREAKPOINT_SM,
  BREAKPOINT_XS,
  BREAKPOINT_XXS,
} from './../../config';

const Container = styled.div`
  width: var(--content-width);
  margin: 0 auto;
  @media (max-width: ${BREAKPOINT_L}) {
    width: auto;
  }
  @media (max-width: ${BREAKPOINT_MD}) {
  }
  @media (max-width: ${BREAKPOINT_SM}) {
  }
  @media (max-width: ${BREAKPOINT_XS}) {
  }
  h2 {
    padding: 8rem var(--grid-padding) 16rem var(--grid-padding);
    font-size: 12rem;
    color: var(--perfume);
    @media (max-width: ${BREAKPOINT_SM}) {
      font-size: 4rem;
      padding: 2rem var(--grid-padding) 2rem var(--grid-padding);
    }
    position: sticky;
    top: 6rem;
    z-index: -1;
  }
  h3 {
    @media (max-width: ${BREAKPOINT_XXS}) {
      > div {
        font-size: 3rem;
      }
    }
  }
  .body {
    display: grid;
    grid-template-columns: 1fr 1fr 4fr;
    @media (max-width: ${BREAKPOINT_MD}) {
      grid-template-columns: 2fr 7fr;
      .gap {
        display: none;
      }
    }
    @media (max-width: ${BREAKPOINT_SM}) {
      grid-template-columns: 3fr 6fr; // bug
    }
    @media (max-width: ${BREAKPOINT_XS}) {
      display: block;
    }
    .left {
      padding: 0 var(--grid-padding);
      .stick {
        position: sticky;
        top: 6rem;
        @media (max-width: ${BREAKPOINT_XS}) {
          display: grid;
          grid-template-columns: 2fr 4fr;
          gap: var(--grid-padding);
          margin-bottom: 4rem;
        }
        @media (max-width: ${BREAKPOINT_XXS}) {
          display: block;
        }
        .avatar {
          width: 100%; /* The avatar width is 100% of its parent */
          height: auto;
          overflow: hidden;
          position: relative;
          display: inline-block;
        }

        .avatar img {
          width: 100%;
          height: auto;
          object-fit: cover;
          clip-path: ellipse(50% 50% at 50% 50%);
        }

        @media (min-aspect-ratio: 16/9) {
          .avatar img {
            clip-path: ellipse(60% 40% at 50% 50%);
          }
        }

        @media (max-aspect-ratio: 4/3) {
          .avatar img {
            clip-path: ellipse(60% 40% at 50% 50%);
          }
        }
        
        .meta {
          margin-top: 2rem;
          margin-bottom: 3rem;
          padding: 0rem;
        }
        button {
        }
      }
    }
    .right {
      padding: 0 var(--grid-padding);
      .description {
        p {
          margin: 0 0 4rem 0;
          font-size: 2rem;
          line-height: 2.75rem;
          text-indent: 4rem;
          &:first-of-type {
            text-indent: 0;
          }
        }
      }
      .list {
        font-size: 1.5rem;
        line-height: 2rem;
        margin: 0;
        padding: 0;
        list-style: none;
        li {
          display: grid;
          grid-template-columns: 1fr 5fr;
          gap: 1rem;
          margin-bottom: 2rem;
        }
      }
    }
  }
  .disclaimer {
    padding: 8rem var(--grid-padding) 2rem var(--grid-padding);
    p {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`;

function AboutPage() {
  return (
    <Container>
      <h2>Résumé</h2>
      <div className='body'>
        <div className='left'>
          <div className='stick'>
            <div className='avatar'>
              <img
                src={'/images/portrait.avif'}
                alt='avatar'
              />
            </div>
            <div>
              <div className='meta'>
                <p>Living in Vienna, Austria</p>
                <p>
                  also known as:
                  <br />
                  <a
                    href='https://www.mandymozart.com'
                    target='_blank'>
                    Mandy Mozart
                  </a>
                </p>
              </div>

              <SecondaryButtonLink
                href='/docs/tilman-porschuetz-resume.pdf'
                download>
                Download Résumé
              </SecondaryButtonLink>
              <br />
              <PrimaryButtonLink href='mailto:tilman@porschuetz.de'>
                Contact me
              </PrimaryButtonLink>
            </div>
          </div>
        </div>
        <div className='gap'></div>
        <div className='right'>
          <section>
            <div className='description'>
              <p>
                I am a versatile frontend developer and visual communicator with
                more than 15+ years experience in the field of visualization,
                interaction design, user interfaces, and immersive experiences.
                I worked as a consultant, developer, digital designer, and
                artist.
              </p>
              <p>
                My focus lies in bridging human needs and digital realities
                through responsible design, UX/UI, story telling and art. As a
                developer I worked on single page applications, websites and
                apps. As a CTO and project manager, I led interdisciplinary
                teams of up to 15 people, working with boutique agencies,
                startups, and corporations.
              </p>
              <p>
                By regularily attending conferences and through my independent
                research practise as an artist and musician I challange my
                perspectives constantly. This universal approach allows me to
                maintain a nuanced perspective on a market and world in constant
                flux.
              </p>
            </div>
          </section>
          <section>
            <ListHeader title='Education' />
            <ul className='list'>
              <li>
                <div>2022—2023</div>
                <div>
                  <b>University of Vienna</b>
                  <br />
                  BA, <i>Theater, Film and Media Science</i>
                </div>
              </li>
              <li>
                <div>2004—2011</div>
                <div>
                  <b>
                    Bauhaus-University Weimar <br />
                  </b>
                  Diploma, <i>Visual Communication</i>
                </div>
              </li>
              <li>
                <div>2007—2008</div>
                <div>
                  <b>
                    Hongik University Seoul <br />
                  </b>
                  Visiting student, <i>Visual Design</i>
                </div>
              </li>
            </ul>
          </section>
          <section>
            <ListHeader title='Awards' />
            <ul className='list'>
              <li>
                <div>2015</div>
                <div>
                  <b>App Art Award</b>
                  <br />
                  <i>ZKM Karlsruhe</i>
                </div>
              </li>

              <li>
                <div>2007</div>
                <div>
                  <b>Radio drama award</b>
                  <br />
                  <i>Book Tradefair Leipzig</i>
                </div>
              </li>
              <li>
                <div>2004</div>
                <div>
                  <b>Sch&uuml;lerlotsen Preis</b>
                  <br />
                  <i>BMI (German Ministry of Industry)</i>
                </div>
              </li>
            </ul>
          </section>
          <ListHeader title='Experiences' />
          <ExperienceList />
          <ListHeader title='Skills' />
          <SkillsList />
        </div>
      </div>
      <div className='disclaimer'>
        <h4>Disclaimer</h4>
        <p>
          If possible I am trying to use <b>They/Them</b> pronouns. I do this
          out of solidarity for those fighting for gender inclusive language in
          arts, culture, research and tech.
        </p>
      </div>
    </Container>
  );
}

export default AboutPage;
