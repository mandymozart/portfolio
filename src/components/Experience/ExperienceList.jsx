'use client';
import styled from '@emotion/styled';
import ExperienceItem from './ExperienceItem';

import { experiences, projects } from './../../data/index.json';

const Container = styled.div`
  position: relative;
  width: 100%;
  .list {
    padding: var(--grid-padding);
  }
`;

const ExperienceList = () => {
  if (!experiences) return <>No Experiences found</>;
  return (
    <Container>
      <div className='list'>
        {experiences.map((experience, index) => (
          <ExperienceItem
            role='listitem'
            key={index}
            experience={experience}
            projects={projects}
          />
        ))}
      </div>
    </Container>
  );
};

export default ExperienceList;
