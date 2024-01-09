import styled from '@emotion/styled';
import React from 'react';

const Container = styled.div`
  height: 100vh;
  header {
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    max-width: var(--content-width);
    margin: 0 auto;
    h2 {
      padding: 2rem var(--grid-padding);
      grid-column-start: 2;
      font-size: 3rem;
    }
  }
  .body {
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    max-width: var(--content-width);
    margin: 0 auto;
    .services-list {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      .services {
        padding: 2rem var(--grid-padding);
        h3 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }
        p {
          font-size: 1.25rem;
        }
      }
    }
  }
`;

const ServicesSection = () => {
  return (
    <Container>
      <header>
        <h2>IT Services</h2>
      </header>
      <div className='body'>
        <div className='left'></div>
        <div className='services-list'>
          <div className='services'>
            <h3>Frontend Development</h3>
            <p>
              State-of-the-art cross-platform software development with modern
              tech-stack.
            </p>
          </div>
          <div className='services'>
            <h3>Design Systems</h3>
            <p>
              With many years of experience in building design teams, I
              specialize in creating systems that blend brutal functional
              minimalism with eye-catching aesthetics.
            </p>
          </div>
          <div className='services'>
            <h3>Single Page Applications</h3>
            <p>
              Blazing fast web frontends building on React and Svelte on
              headless CMS and GraphQL.
            </p>
          </div>
          <div className='services'>
            <h3>Consulting</h3>
            <p>
              I advise founders and established teams in Design Thinking, Agile
              and Human Centric Design.
            </p>
          </div>
          <div className='services'>
            <h3>DevOps</h3>
            <p>
              Efficient deployment-process & performant continuous integration.
            </p>
          </div>
          <div className='services'>
            <h3>Software Architecture</h3>
            <p>
              Futureproof software structure and process landscape for maximum
              scalability.
            </p>
          </div>
          <div className='services'>
            <h3>E-Commerce</h3>
            <p>
              Reliable web shops with focus on user experience & accessibility.
            </p>
          </div>
          <div className='services'>
            <h3>Spatial Computing</h3>
            <p>
              Harness the power of WebAR and spatial audio in state of the art
              frameworks.
            </p>
          </div>
        </div>
        <div className='right'></div>
      </div>
    </Container>
  );
};

export default ServicesSection;
