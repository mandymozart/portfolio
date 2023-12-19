import styled from '@emotion/styled';
import { usePrismicDocumentsByType } from '@prismicio/react';
import React from 'react';
import ExperienceItem from './ExperienceItem';

const Container = styled.div`
  position: relative;
  width: 100%;
  .list {
    padding: var(--grid-padding);
  }
`;

const ExperienceList = () => {
  const [experiences] = usePrismicDocumentsByType('experience', {
    orderings: [
      {
        field: 'my.experience.enddate',
        direction: 'desc',
      },
    ],
  });
  const [projects] = usePrismicDocumentsByType('project', {
    orderings: [
      {
        field: 'my.project.todate',
        direction: 'desc',
      },
    ],
  });
  if (!experiences) return <>No Experiences found</>;
  console.log(experiences, projects);
  return (
    <Container>
      <div className='list'>
        {experiences.results.map((experience, index) => (
          <ExperienceItem
            role='listitem'
            key={index}
            experience={experience}
            projects={projects.results}
          />
        ))}
      </div>
    </Container>
  );
};

export default ExperienceList;
