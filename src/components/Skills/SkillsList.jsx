import styled from '@emotion/styled';
import { skills } from './../../mockData/data.json';
import SkillItem from './SkillItem';

const Container = styled.div`
  .list {
    position: relative;
    margin-left: var(--content-margin-left);
    width: var(--content-width);
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    align-items: center;
    @media (max-width: 1350px) {
      grid-template-columns: repeat(8, 1fr);
    }

    @media (max-width: 850px) {
      grid-template-columns: repeat(4, 1fr);
    }
    button {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
`;

const SkillsList = () => {
  if (!skills) return <></>;
  return (
    <Container>
      <div className='list'>
        {skills.map((node, index) => (
          <SkillItem
            key={index}
            skill={node.data}
          />
        ))}
      </div>
    </Container>
  );
};

export default SkillsList;
