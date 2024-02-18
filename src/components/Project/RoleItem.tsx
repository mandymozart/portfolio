import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { fastTranslateVariants } from '../../animations/site.js';
import docs from '../../data/index.js';
import { RoleDocument } from '../../data/types';

const Container = styled.li`
  padding: 0;
  margin: 0;
  display: block;
`;

interface Props extends React.ComponentPropsWithoutRef<'li'> {
  uid: string;
}

export const getCharsFast = (word) => {
  let chars = [];
  word.split('').forEach((char, i) => {
    chars.push(
      <motion.span
        custom={[i * 0.02, (word.length - i) * 0.01]}
        variants={fastTranslateVariants}
        initial='initial'
        animate='enter'
        exit='exit'
        key={char + i}>
        {char}
      </motion.span>,
    );
  });
  return chars;
};
const RoleItem = ({ uid }: Props) => {
  const doc = docs.roles.find((role) => role.uid === uid) as RoleDocument;
  if (!doc) {
    console.warn(`Role ${uid} not found`);
    return <></>;
  }
  const data = doc.data;
  return <Container>{getCharsFast(data.name)}</Container>;
};

export default RoleItem;
