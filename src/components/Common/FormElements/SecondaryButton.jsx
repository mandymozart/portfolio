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
  span {
    margin-left: 0;
    padding: 0.5rem 2rem;
    width: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0 2rem;
    border-radius: 2rem;
    border: 1px solid var(--primary);
    background: transparent;
    height: 4rem;
    transition: all 0.2s ease-in;
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
      <span>{children}</span>
    </Container>
  );
};

export default SecondaryButton;
