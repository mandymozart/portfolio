import styled from '@emotion/styled';
import { BASE_PATH } from '../../../config';
const Container = styled.div`
  /* Add your styles here */
  section {
    margin: 0 var(--content-margin-left);
    max-width: var(--content-width);
    position: relative;
    text-align: center;
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
          </section>
        ))}
    </Container>
  );
};

export default ScreenshotsSection;
