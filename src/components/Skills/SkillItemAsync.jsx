import styled from '@emotion/styled';
import clsx from 'clsx';
import { skills } from '../../mockData/data.json';

const Container = styled.div`
  display: flex;
  padding: 0 var(--grid-padding);
  flex-direction: column;
  &.textOnly {
    display: inline;
  }
  img {
    margin-bottom: 1rem;
    width: 100%;
  }
`;

const SkillItemAsync = ({ uid, textOnly }) => {
  const data = skills.find((skill) => skill.uid === uid)?.data;
  console.log(data);
  if (!data) return <></>;
  return (
    <Container className={clsx({ textOnly: textOnly })}>
      {data.logo?.url ? (
        <img
          src={data.logo.url}
          alt={data.logo.alt}
        />
      ) : (
        data.name
      )}
    </Container>
  );
};

export default SkillItemAsync;
