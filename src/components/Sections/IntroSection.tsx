import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { staggerVariants } from '../../animations/site';

const Container = styled.section`
  position: relative;
  height: 400vh;
  max-width: var(--content-width);
  margin: 0 auto;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const IntroSection = ({ ...props }) => {
  return (
    <Container {...props}>
      <motion.div
        className='info'
        initial='offscreen'
        whileInView='onscreen'
        viewport={{ once: true, amount: 0.8 }}>
        <motion.span
          initial='offscreen'
          whileInView='onscreen'
          custom={0}
          variants={staggerVariants}>
          Down{' '}
        </motion.span>
        <motion.span
          initial='offscreen'
          whileInView='onscreen'
          custom={1}
          variants={staggerVariants}>
          below{' '}
        </motion.span>
        <motion.span
          initial='offscreen'
          whileInView='onscreen'
          custom={2}
          variants={staggerVariants}>
          the{' '}
        </motion.span>
        <motion.span
          initial='offscreen'
          whileInView='onscreen'
          custom={2}
          variants={staggerVariants}>
          sky{' '}
        </motion.span>
        <motion.span
          initial='offscreen'
          whileInView='onscreen'
          custom={2}
          variants={staggerVariants}>
          is{' '}
        </motion.span>
        <motion.span
          initial='offscreen'
          whileInView='onscreen'
          custom={2}
          variants={staggerVariants}>
          the{' '}
        </motion.span>
        <motion.span
          initial='offscreen'
          whileInView='onscreen'
          custom={2}
          variants={staggerVariants}>
          limit!
        </motion.span>
      </motion.div>
    </Container>
  );
};

export default IntroSection;
