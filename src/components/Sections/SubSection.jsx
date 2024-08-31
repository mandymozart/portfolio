import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import React, { forwardRef } from 'react';
import { BREAKPOINT_MD, BREAKPOINT_XS } from '../../../config';
import { staggerVariants } from '../../animations/site';

const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: var(--content-width);
  margin: 10rem auto;
  @media (max-width: ${BREAKPOINT_MD}) {
    grid-template-columns: 1fr 1fr;
  }
  > div {
    padding: 0 var(--grid-padding);
    h2 {
      margin-top: 6rem;
      font-size: 6rem;
      line-height: 6rem;
      margin-bottom: 4rem;
      @media (max-width: ${BREAKPOINT_XS}) {
        font-size: 3rem;
      }
    }
    p {
      font-size: 3rem;
      line-height: 3.5rem;
      @media (max-width: ${BREAKPOINT_XS}) {
        font-size: 2rem;
        line-height: 2.5rem;
      }
    }
  }
`;

const SubSection = forwardRef(({ title, children }, ref) => {
  return (
    <Container ref={ref}>
      <div>
        <motion.h2
          custom={0}
          initial='offscreen'
          whileInView='onscreen'
          variants={staggerVariants}>
          {title}
        </motion.h2>
        <motion.p
          custom={1}
          initial='offscreen'
          whileInView='onscreen'
          variants={staggerVariants}>
          {children}
        </motion.p>
      </div>
    </Container>
  );
});

export default SubSection;
