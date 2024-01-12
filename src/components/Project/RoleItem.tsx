import styled from '@emotion/styled';
import { roles } from '../../data/index.json';
import { CustomTypeLink, RoleDocument } from '../../data/types';

const Container = styled.li`
  padding: 0;
  margin: 0;
`;

interface Props extends React.ComponentPropsWithoutRef<'li'> {
  link: CustomTypeLink;
}

const RoleItem = ({ link }: Props) => {
  const doc = roles.find((role) => role.uid === link.uid) as RoleDocument;
  if (!doc) {
    console.warn(`Role ${link.uid} not found`);
    return <></>;
  }
  const data = doc.data;
  return <Container>{data.name}</Container>;
};

export default RoleItem;
