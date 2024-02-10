import styled from '@emotion/styled';
import { skills } from '../../../data/index.json';
import { CustomTypeLink, SkillData } from '../../../data/types';
import SkillItem from './SkillItem';

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

interface Props extends React.ComponentPropsWithoutRef<'div'> {
  link: CustomTypeLink;
  textOnly?: boolean;
}

const SkillItemAsync = ({ link, textOnly }: Props) => {
  const data = skills.find((skill) => skill.uid === link.uid)
    ?.data as SkillData;
  if (!data) return <></>;
  return (
    <SkillItem
      skill={data}
      textOnly={textOnly}
    />
  );
};

export default SkillItemAsync;
