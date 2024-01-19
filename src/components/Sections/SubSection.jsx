import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import React from 'react';
import { staggerVariants } from '../../animations/site';

const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  max-width: var(--content-width);
  margin: 0 auto;
  align-items: center;
  @media (max-width: 850px) {
    grid-template-columns: 1fr;
  }
  .body {
    grid-column: 2;
    padding: 0 var(--grid-padding);
    h2 {
      font-size: 6rem;
      line-height: 6rem;
      margin-bottom: 4rem;
    }
    p {
      font-size: 4rem;
      line-height: 4.5rem;
    }
  }
`;

const SubSection = ({ title, children }) => {
  return (
    <Container>
      <div></div>
      <div className='body'>
        <motion.h2
          custom={0}
          initial='offscreen'
          whileInView='onscreen'
          variants={staggerVariants}>
          {title}
        </motion.h2>
        <motion.p
          custom={0}
          initial='offscreen'
          whileInView='onscreen'
          variants={staggerVariants}>
          {children}
        </motion.p>
      </div>
      <div></div>
    </Container>
  );
};

export default SubSection;
