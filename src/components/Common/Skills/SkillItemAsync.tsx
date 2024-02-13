import doc from '../../../data/skills.json';
import { SkillData } from '../../../data/types';
import SkillItem from './SkillItem';

interface Props extends React.ComponentPropsWithoutRef<'div'> {
  uid: string;
  textOnly?: boolean;
}

const SkillItemAsync = ({ uid, textOnly }: Props) => {
  const data = doc.results.find((skill) => skill.uid === uid)
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
