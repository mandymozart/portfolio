import styled from '@emotion/styled';
import ExperienceList from '../components/Common/Experience/ExperienceList';
import PrimaryButtonLink from '../components/Common/FormElements/PrimaryButtonLink';
import SecondaryButtonLink from '../components/Common/FormElements/SecondaryButtonLink';
import ListHeader from '../components/Common/ListHeader/ListHeader';
import SkillsList from '../components/Common/Skills/SkillsList';

const Container = styled.div`
  width: var(--content-width);
  margin: 0 auto;
  h2 {
    padding: 8rem var(--grid-padding) 16rem var(--grid-padding);
    font-size: 8rem;
  }
  .body {
    display: grid;
    grid-template-columns: 1fr 1fr 4fr;
    @media (max-width: 1350px) {
      grid-template-columns: 2fr 2fr;
    }

    @media (max-width: 850px) {
      grid-template-columns: 1fr;
    }
    .left {
      padding: 0 var(--grid-padding);
      .stick {
        position: sticky;
        top: 0;
        .avatar {
          border: 1px solid var(--primary);
          border-radius: 2rem;
          overflow: hidden;
          img {
            width: 100%;
            height: auto;
            display: block;
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
  const download = () => {
    alert('PDF missing');
  };
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
        <div></div>
        <div className='right'>
          <section>
            <div className='description'>
              <p>
                I am a versatile frontend developer and visual communicator with
                more than 15+ years experience in the field of visualization,
                interaction design, user interfaces, and immersive experiences.
                Tilman has worked as a consultant, developer, digital designer,
                and artist.
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
                By attending conferences and through my independent research
                practise as an artist, musician, and enthusiast media scientist.
                This universal approach allows me to maintain a nuanced
                perspective on a market and world in constant flux.
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
