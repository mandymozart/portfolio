import styled from '@emotion/styled';
import docs from '../../data/index.js';
import { RoleDocument } from '../../data/types';

const Container = styled.li`
  padding: 0;
  margin: 0;
`;

interface Props extends React.ComponentPropsWithoutRef<'li'> {
  uid: string;
}

const RoleItem = ({ uid }: Props) => {
  const doc = docs.roles.find((role) => role.uid === uid) as RoleDocument;
  if (!doc) {
    console.warn(`Role ${uid} not found`);
    return <></>;
  }
  const data = doc.data;
  return <Container>{data.name}</Container>;
};

export default RoleItem;
