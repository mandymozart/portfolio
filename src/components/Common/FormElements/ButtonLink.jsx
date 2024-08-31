import styled from '@emotion/styled';

const Container = styled.button`
  text-decoration: none;
  font-weight: 400;
  font-size: 1rem;
  font-family: var(--font);
  background: none;
  border: 0;
  padding: 0;
  margin: 0;
  color: inherit;
  display: inline;
  cursor: pointer;
  transition: all 0.2s ease-in;
  &.active,
  &:hover {
    /* color: var(--secondary); */
  }
`;

const ButtonLink = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

export default ButtonLink;
