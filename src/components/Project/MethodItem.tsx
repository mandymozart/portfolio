import styled from '@emotion/styled';
import { methods } from '../../data/index.json';
import { CustomTypeLink, MethodDocument } from '../../data/types';

const Container = styled.li`
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

interface Props extends React.ComponentPropsWithoutRef<'li'> {
  link: CustomTypeLink;
}

const MethodItem = ({ link }: Props) => {
  const doc = methods.find(
    (method) => method.uid === link.uid,
  ) as MethodDocument;
  if (!doc) {
    console.warn(`Method ${link.uid} not found`);
    return <></>;
  }
  const data = doc.data;
  if (!data) return <></>;
  return <Container>{data.name}</Container>;
};

export default MethodItem;
