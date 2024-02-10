'use client';
import styled from '@emotion/styled';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  @media (max-width: 1350px) {
    grid-template-columns: 2fr, 2fr;
  }

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
  }
  .left {
    padding: var(--grid-padding);
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
    .meta,
    .disclaimer {
      p {
        font-size: 1rem;
        line-height: 1.5rem;
      }
    }
    .meta {
      margin-bottom: 4rem;
    }
    .download-link {
      text-transform: uppercase;
      font-size: 1.5rem;
      line-height: 2rem;
    }
  }
  section {
    padding: var(--grid-padding);
    display: grid;
    grid-template-columns: 1fr 4fr;
    @media (max-width: 1350px) {
      grid-template-columns: 1fr, 2fr;
    }

    @media (max-width: 850px) {
      grid-template-columns: 1fr;
    }
    h2 {
      font-size: 3rem;
      line-height: 3rem;
    }
    h3 {
      font-size: 2.25rem;
      line-height: 2.25rem;
    }
    .description {
      p {
        margin: 0 0 2rem 0;
        font-size: 1.5rem;
        line-height: 2rem;
      }
    }
    .list {
      font-size: 1.5rem;
      line-height: 2rem;
      margin: 0;
      padding: 0;
      list-style: none;
    }
  }
`;

function ResumePage() {
  return (
    <Container>
      <div className='left'>
        <div className='avatar'>
          <img
            src={'/images/portrait.avif'}
            alt='avatar'
          />
        </div>
        <div className='meta'>
          <p>
            Born in 1984 in Zwickau, Germany
            <br />
            Currently living and working in Vienna, Austria
          </p>
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

        <div className='disclaimer'>
          <h4>Disclaimer</h4>
          <p>
            If possible I am trying to use They/Them pronouns. I do this out of
            solidarity for those fighting for gender inclusive language in arts,
            culture, research and tech. But you can choose which ones to use.
          </p>
        </div>
        <a
          className='download-link'
          href='/resume.pdf'>
          Download PDF
        </a>
      </div>
      <div>
        <section>
          <h2>Résumé</h2>
          <div className='description'>
            <p>
              Tilman is a versatile frontend developer and visual communicator
              with more than 15+ years experience in the field of visualization,
              interaction design, user interfaces, and immersive experiences.
              Tilman has worked as a consultant, developer, digital designer,
              and artist.
            </p>
            <p>
              Their focus lies in bridging human needs and digital realities
              through responsible design, UX/UI, story telling and art. As a
              developer Tilman worked on single page applications, websites and
              apps. As a CTO and project manager, Tilman led interdisciplinary
              teams of up to 15 people, working with boutique agencies,
              startups, and corporations.
            </p>
            <p>
              Tilman discusses their experiences through regular attendance at
              conferences and in their research work as an artist, musician, and
              enthusiast media scientist. This universal approach allows them to
              maintain a nuanced perspective on a market in constant flux.
            </p>
          </div>
        </section>
        <section>
          <h3>Education</h3>
          <ul className='list'>
            <li>
              2022—2023: Theater, Film, and Media Science at the University of
              Vienna
            </li>
            <li>
              2004—2011: Diploma in Visual Communication at the
              Bauhaus-University Weimar
            </li>
            <li>2007—2008: Visiting student at Hongik University Seoul</li>
          </ul>
        </section>
        <section>
          <h3>Awards</h3>
          <ul className='list'>
            <li>2015: App Art Award by ZKM Karlsruhe</li>
            <li>2007: Radio drama award by Book Tradefair Leipzig</li>
            <li>
              2004: Sch&uuml;lerlotsen Preis by BMI (German Ministry of
              Industry)
            </li>
          </ul>
        </section>
      </div>
    </Container>
  );
}

export default ResumePage;
