import styled from '@emotion/styled';

const Container = styled.div`
  position: fixed;
  z-index: 1000000;
  top: var(--header-height);
  left: 0;
  bottom: 0;
  right: 0;
  padding: 0;
  transition: all 0.2s ease-in-out;
  transform: translateY(100vh);
  border-radius: 4rem 4rem 0 0;
  overflow: hidden;
  background-color: var(--color-captions);
  .inner {
    /* scrollbar-gutter: stable both-edges;
    overflow-y: scroll; */
    padding-top: 4rem;
  }
  &.isActive {
    transform: translateY(0);
  }
  &.slidein--footer {
    background-color: var(--primary);
    color: var(--background);
  }
  .shadow-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 15rem;
    background: linear-gradient(
      to bottom,
      rgba(255, 217, 0, 1),
      rgba(255, 217, 0, 0)
    );
    opacity: 1;
    transition: opacity 0.3s;
    pointer-events: none;
    &--bottom {
      top: auto;
      bottom: 0;
      background: linear-gradient(
        to top,
        rgba(255, 217, 0, 0.533),
        rgba(255, 217, 0, 0)
      );
    }
  }
`;

const SlideIn = ({ children, isActive, className }) => {
  return (
    <Container className={`${isActive ? 'isActive' : ''} ${className}`}>
      <div className='inner scrollable scrollable-hint'>{children}</div>
      {/* <div className='shadow-overlay shadow-overlay--top'></div> */}
      <div className='shadow-overlay shadow-overlay--bottom'></div>
    </Container>
  );
};

export default SlideIn;
