import styled from '@emotion/styled';

const Container = styled.button`
  text-decoration: none;
  font-weight: 400;
  font-size: 1rem;
  font-family: var(--font);
  background: none;
  border: 0;
  padding: 0;
  width: 100%;
  color: var(--primary);
  display: flex;
  cursor: pointer;
  align-items: center;
  transition: all 0.1s ease-in;
  span.inner {
    margin-left: 0;
    padding: 0.5rem 2rem;
    width: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0 2rem;
    border-radius: 2rem;
    border: 1px solid var(--primary);
    background: rgba(255, 255, 255, 0.0001);
    backdrop-filter: blur(10px);
    height: 4rem;
    transition: all 0.2s ease-in;
    span {
      font-size: 1.5em;
      padding-left: 1rem;
    }
  }
  &.active,
  &:hover {
    color: var(--secondary);
    span {
    }
  }
`;

const SecondaryButton = ({ children, ...props }) => {
  return (
    <Container {...props}>
      <span className='inner'>{children}</span>
    </Container>
  );
};

export default SecondaryButton;
