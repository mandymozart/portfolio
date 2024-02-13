'use client';
import styled from '@emotion/styled';
import docs from '../../../data/index.js';
import { Accordion } from '../Accordion/Accordion.jsx';
import ExperienceItem from './ExperienceItem';

const Container = styled.div`
  position: relative;
  width: 100%;
`;

const items = docs.experiences.map((experience, index) => ({
  key: experience.uid,
  title: experience.data.company,
  content: (
    <ExperienceItem
      role='listitem'
      key={index}
      experience={experience}
    />
  ),
}));
const ExperienceList = () => {
  if (!docs.experiences) return <>No Experiences found</>;
  return (
    <Container>
      <Accordion
        items={items}
        className='list'
      />
    </Container>
  );
};

export default ExperienceList;
