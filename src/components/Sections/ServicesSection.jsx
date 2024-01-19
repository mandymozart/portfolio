import styled from '@emotion/styled';
import React from 'react';
import { Accordion } from '../Accordion/Accordion';
import { getSectionByKey } from './../Home/sections';
const params = getSectionByKey('services');
const Container = styled.div`
  background-color: ${params.backgroundColor};
  color: ${params.color};
  height: 100vh;
  > header {
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
    grid-template-columns: 1fr 1fr;
    max-width: var(--content-width);
    margin: 0 auto;
    > div {
      padding: 0 var(--grid-padding);
    }
    .left {
      font-size: 2rem;
    }
  }
`;

const ServiceContainer = styled.div`
  padding: 2rem 0;
  font-size: 2rem;
`;

const services = [
  {
    key: 1,
    title: 'Frontend Development',
    content: (
      <ServiceContainer>
        State-of-the-art cross-platform software development with modern
        tech-stack.
      </ServiceContainer>
    ),
  },
  {
    key: 2,
    title: 'Design Systems',
    content: (
      <ServiceContainer>
        With many years of experience in building design teams, I specialize in
        creating systems that blend brutal functional minimalism with
        eye-catching aesthetics.
      </ServiceContainer>
    ),
  },
  {
    key: 3,
    title: 'Single Page Applications',
    content: (
      <ServiceContainer>
        Blazing fast web frontends building on React and Svelte on headless CMS
        and GraphQL.
      </ServiceContainer>
    ),
  },
  {
    key: 4,
    title: 'Consulting',
    content: (
      <ServiceContainer>
        I advise founders and established teams in Design Thinking, Agile and
        Human Centric Design.
      </ServiceContainer>
    ),
  },
  {
    key: 5,
    title: 'DevOps',
    content: (
      <ServiceContainer>
        Efficient deployment-process & performant continuous integration.
      </ServiceContainer>
    ),
  },
  {
    key: 6,
    title: 'Software Architecture',
    content: (
      <ServiceContainer>
        Futureproof software structure and process landscape for maximum
        scalability.
      </ServiceContainer>
    ),
  },
  {
    key: 7,
    title: 'E-Commerce',
    content: (
      <ServiceContainer>
        Reliable web shops with focus on user experience & accessibility.
      </ServiceContainer>
    ),
  },
  {
    key: 8,
    title: 'Spatial Computing',
    content: (
      <ServiceContainer>
        Harness the power of WebAR and spatial audio in state of the art
        frameworks.
      </ServiceContainer>
    ),
  },
];

const ServicesSection = () => {
  return (
    <Container>
      <header>
        <h2>IT Services</h2>
      </header>
      <div className='body'>
        <div className='left'>
          The following services are my favorites to work on and where my
          experise is.
        </div>
        <div className='services-list'>
          <Accordion items={services} />
          {/* {services.map((service) => (
            <div className='services' key={service.key}>
              <h3>{service.title}</h3>
              <p>{service.content}</p>
            </div>
          ))} */}
        </div>
        <div className='right'></div>
      </div>
    </Container>
  );
};

export default ServicesSection;
