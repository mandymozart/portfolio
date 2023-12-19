import styled from '@emotion/styled';

const Container = styled.button`
  text-decoration: none;
  font-weight: 400;
  font-size: 1rem;
  font-family: var(--font-serif);
  background: none;
  border: 0;
  color: inherit;
  display: flex;
  cursor: pointer;
  align-items: center;
  transition: all 0.2s ease-in;
  span {
    margin-left: 0;
    padding: 0.5rem 2rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0 2rem;
    border-radius: 2rem;
    background: ${props =>
      props.ghost ? 'rgba(255, 255, 255, 0.0001)' : 'transparent'};
    backdrop-filter: blur(10px);
    height: 2rem;
  }
  &.active,
  &:hover {
    color: var(--secondary);
    span {
      background: ${props =>
        props.ghost ? 'rgba(255, 255, 255, 0.0001)' : 'transparent'};
      backdrop-filter: blur(10px);
    }
    /* letter-spacing: 0.2rem; */
  }
`;

const Button = ({ ghost, children, ...props }) => {
  return (
    <Container
      ghost
      {...props}
    >
      <span>{children}</span>
    </Container>
  );
};

export default Button;
