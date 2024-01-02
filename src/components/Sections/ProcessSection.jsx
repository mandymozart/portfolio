import { staggerVariants } from '@/animations/site';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

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
    grid-template-columns: 1fr 3fr 2fr;
    max-width: var(--content-width);
    margin: 0 auto;
    .process-list {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      .process {
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
          viewport={{ once: true, amount: 0.8 }}
        >
          <motion.div
            className='process'
            variants={staggerVariants}
            custom={0}
          >
            <h3>Proof the concept</h3>
            <p>
              I will always research and built a rapid prototype to proof your
              idea is possible. Some ideas are just a few years too ahead of
              their time.
            </p>
          </motion.div>
          <motion.div
            className='process'
            variants={staggerVariants}
            custom={1}
          >
            <h3>Trust the team</h3>
            <p>
              My job is to spot the talent needed to build diverse perspectives
              and facilitate smart decision making.
            </p>
          </motion.div>
          <motion.div
            className='process'
            variants={staggerVariants}
            custom={2}
          >
            <h3>Design in code</h3>
            <p>
              Business logic and frameworks are dictating designers today.
              Together we are moulding UX like clay in an iterative process.
            </p>
          </motion.div>
          <motion.div
            className='process'
            variants={staggerVariants}
            custom={3}
          >
            <h3>Optimize workflows</h3>
            <p>
              Continuous integration, design tools and utilities will not only
              optimize your supply chain but save you time to fully focus on
              your enterprise!
            </p>
          </motion.div>
          <motion.div
            className='process'
            variants={staggerVariants}
            custom={4}
          >
            <h3>Tell a beautiful story</h3>
            <p>
              I built vibes and narratives. My craft is to write poetry guiding
              users through your world.
            </p>
          </motion.div>
        </motion.div>
        <div className='right'></div>
      </div>
    </Container>
  );
};

export default ProcessSection;
