import styled from '@emotion/styled';
import clsx from 'clsx';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  &.textOnly {
    display: inline;
  }
  img {
    max-width: 100%;
    height: 100%;
    aspect-ratio: 1;
    object-fit: contain;
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
