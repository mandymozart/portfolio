import styled from '@emotion/styled';
import docs from '../../data/index.js';
import { MethodDocument } from '../../data/types';

const Container = styled.li`
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

interface Props extends React.ComponentPropsWithoutRef<'li'> {
  uid: string;
}

import { getCharsFast } from './../Project/RoleItem.js';

const MethodItem = ({ uid }: Props) => {
  const doc = docs.methods.find(
    (method) => method.uid === uid,
  ) as MethodDocument;
  if (!doc) {
    console.warn(`Method ${uid} not found`, docs.methods);
    return <></>;
  }
  const data = doc.data;
  if (!data) return <></>;
  return <Container>{getCharsFast(data.name)}</Container>;
};

export default MethodItem;
