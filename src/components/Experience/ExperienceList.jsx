'use client';
import useMenuStore from '@/stores/MenuStore';
import styled from '@emotion/styled';
import { usePrismicDocumentsByType } from '@prismicio/react';
import { useEffect } from 'react';
import ExperienceItem from './ExperienceItem';

const Container = styled.div`
  position: relative;
  width: 100%;
  .list {
    padding: var(--grid-padding);
  }
`;

const ExperienceList = () => {
  const [experiences, { state }] = usePrismicDocumentsByType('experience', {
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
  const { addPreloadedKey } = useMenuStore();

  useEffect(() => {
    if (state === 'loading') return;
    if (state === 'error') return;
    if (state === 'idle') return;
    if (state === 'loaded') addPreloadedKey('ExperienceList');
  }, [state]);
  if (!experiences) return <>No Experiences found</>;
  return (
    <Container>
      <div className='list'>
        {experiences.results.map((experience, index) => (
          <ExperienceItem
            role='listitem'
            key={index}
            experience={experience}
            projects={projects?.results}
          />
        ))}
      </div>
    </Container>
  );
};

export default ExperienceList;
