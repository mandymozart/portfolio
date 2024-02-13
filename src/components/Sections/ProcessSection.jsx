import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Accordion } from '../Common/Accordion/Accordion';
import { getSectionByKey } from './../Home/sections';
const params = getSectionByKey('process');

const Container = styled.div`
  background-color: ${params.backgroundColor};
  --accordion-color: ${params.color};
  color: ${params.color};
  height: 100vh;
  > header {
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    max-width: var(--content-width);
    margin: 0 auto;
    > h2 {
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
    .process-list {
      padding: 2rem var(--grid-padding);
    }
  }
`;

const ProcessContainer = styled.div`
  padding: 2rem 0;
  font-size: 2rem;
`;

const processes = [
  {
    key: 0,
    title: 'Proof the concept',
    content: (
      <ProcessContainer>
        I will always research and built a <b>rapid prototype</b> first to proof
        your idea's feasebility. Just to make sure your ideas are not to ahead
        of their time.
      </ProcessContainer>
    ),
  },
  {
    key: 1,
    title: 'Trust the team',
    content: (
      <ProcessContainer>
        My job is to spot the <b>talent</b> required to build{' '}
        <i>diverse perspectives</i> and facilitate <i>smart decision</i> making.
      </ProcessContainer>
    ),
  },
  {
    key: 2,
    title: 'Design in code',
    content: (
      <ProcessContainer>
        Business logic and frameworks are dictating designers today. Together we
        are <b>moulding UX like clay</b> through an <i>iterative process.</i>
      </ProcessContainer>
    ),
  },
  {
    key: 3,
    title: 'Optimize workflows',
    content: (
      <ProcessContainer>
        Continuous integration, design tools and utilities will not only{' '}
        <b>optimize your supply chain</b> but save you time to fully focus on
        your enterprise!
      </ProcessContainer>
    ),
  },
  {
    key: 4,
    title: 'Tell a beautiful story',
    content: (
      <ProcessContainer>
        I built <i>vibes</i> and <i>narratives</i>. My craft is to write poetry
        guiding users through your world.
      </ProcessContainer>
    ),
  },
];

const ProcessSection = () => {
  return (
    <Container>
      <header>
        <h2>All my projects follow these five simple principles</h2>
      </header>
      <div className='body'>
        <div className='left'></div>
        <motion.div
          className='process-list'
          initial='offscreen'
          whileInView='onscreen'
          viewport={{ once: true, amount: 0.8 }}>
          <Accordion items={processes} />
        </motion.div>
        <div className='right'></div>
      </div>
    </Container>
  );
};

export default ProcessSection;
