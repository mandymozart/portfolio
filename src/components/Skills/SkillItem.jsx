import styled from '@emotion/styled';
import clsx from 'clsx';

const Container = styled.div`
  display: flex;
  padding: 0 var(--grid-padding);
  flex-direction: column;
  &.textOnly {
    display: inline;
  }
  img {
    margin-bottom: 1rem;
    max-width: 100%;
  }
`;

const SkillItem = ({ skill, textOnly }) => {
  if (!skill) return <></>;
  return (
    <Container className={clsx({ textOnly: textOnly })}>
      {skill.logo.url ? (
        <img
          src={skill.logo.url}
          alt={skill.logo.alt}
        />
      ) : (
        skill.name
      )}
    </Container>
  );
};

export default SkillItem;
