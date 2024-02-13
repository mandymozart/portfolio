import styled from '@emotion/styled';
import { Accordion } from '../Accordion/Accordion.jsx';
import docs from './../../../data/index.js';
import SkillItem from './SkillItem';

const Container = styled.div``;

const CategoryContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  align-items: center;
  padding: var(--grid-padding) 0;
  gap: 2rem;
  @media (max-width: 1350px) {
    grid-template-columns: repeat(6, 1fr);
  }

  @media (max-width: 850px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const getCategories = () => {
  const cats = [];
  docs.skills.forEach((s) => {
    if (s.data.category === 'database') {
      console.log('db', s.data);
    }
    if (cats.some((c) => c.uid === s.data.category)) {
      cats.find((cat) => cat.uid === s.data.category).items.push(s);
    } else {
      cats.push({ uid: s.data.category, items: [] });
    }
  });
  console.log(cats);
  return cats;
};

const items = getCategories().map((c) => {
  console.log(c.uid);
  return {
    key: c.uid,
    title: docs.categories.find((cat) => cat.uid === c.uid).plural,
    content: (
      <CategoryContainer>
        {docs.skills
          .filter((s) => s.data.category === c.uid)
          .map((node, index) => (
            <SkillItem
              key={index}
              skill={node.data}
            />
          ))}
      </CategoryContainer>
    ),
  };
});

const SkillsList = () => {
  if (!docs.skills) return <></>;
  return (
    <Container>
      <div>
        {
          <Accordion
            items={items}
            className='accordion'
          />
        }
      </div>
    </Container>
  );
};

export default SkillsList;
