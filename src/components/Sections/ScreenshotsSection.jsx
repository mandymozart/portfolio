import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { BASE_PATH } from '../../../config';
import { staggerVariants } from '../../animations/site';
const Container = styled.div`
  /* Add your styles here */
  position: relative;
  section {
    margin: 0 var(--content-margin-left);
    max-width: var(--content-width);
    align-items: center;
    display: flex;
    justify-content: center;
    min-height: 100vh;
    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: fill;
      border-radius: 2rem;
    }
  }
`;

const ScreenshotsSection = ({ screenshots }) => {
  if (!screenshots) return null;
  return (
    <Container>
      {screenshots &&
        screenshots.length > 0 &&
        screenshots.slice(1).map((item, index) => (
          <motion.div
            key={index}
            initial='offscreen'
            whileInView='onscreen'
            custom={index}
            variants={staggerVariants}>
            <section key={index}>
              {item.desktop && (
                <img
                  className='screenshot hidden--mobile'
                  src={BASE_PATH + item.desktop.url}
                />
              )}
              {item.mobile && (
                <img
                  className='screenshot hidden--desktop hidden--tablet'
                  src={BASE_PATH + item.mobile.url}
                />
              )}
              {!item.mobile && item.desktop && (
                <img
                className='screenshot hidden--desktop hidden--tablet'
                src={BASE_PATH + item.desktop.url}
              />
              )}
            </section>
          </motion.div>
        ))}
    </Container>
  );
};

export default ScreenshotsSection;
