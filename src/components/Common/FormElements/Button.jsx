import styled from '@emotion/styled';

const Container = styled.button`
  text-decoration: none;
  font-weight: 400;
  font-size: 1rem;
  font-family: var(--font);
  background: none;
  border: 0;
  padding: 0;
  color: ${(props) => (props.primary ? 'var(--background)' : 'inherit')};
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
    border: ${(props) => (props.secondary ? '0' : '1px solid var(--primary)')};
    background: ${(props) =>
      props.ghost ? 'rgba(255, 255, 255, 0.0001)' : 'transparent'};
    background: ${(props) => props.primary && 'var(--primary)'};
    backdrop-filter: blur(10px);
    height: ${(props) => (props.large ? '4rem' : '2rem')};
    transition: all 0.2s ease-in;
  }
  &.active,
  &:hover {
    color: var(--secondary);
    span {
      background: ${(props) =>
        props.ghost ? 'rgba(255, 255, 255, 0.0001)' : 'transparent'};
      background: ${(props) => props.primary === 1 && 'var(--primary-200)'};
      background: ${(props) => props.secondary && 'transparent'};
      backdrop-filter: blur(10px);
    }
    /* letter-spacing: 0.2rem; */
  }
`;

const Button = ({ ghost, large, primary, secondary, children, ...props }) => {
  return (
    <Container
      ghost
      large
      primary
      secondary
      {...props}>
      <span>{children}</span>
    </Container>
  );
};

export default Button;
