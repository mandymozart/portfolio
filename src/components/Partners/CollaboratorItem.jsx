import styled from '@emotion/styled';
import { isNotEmptyLinkField } from '../../typeguards';
import { collaborators } from './../../mockData/data.json';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  img {
    margin-bottom: 1rem;
  }
`;

const CollaboratorItem = ({ uid }) => {
  const collaborator = collaborators.find(
    (collaborator) => collaborator.uid === uid,
  )?.data;
  console.log(collaborator);
  if (!collaborator) return <>Not found</>;
  return (
    <Container>
      <a
        href={
          isNotEmptyLinkField(collaborator.link) ? collaborator.link.url : '#'
        }
        target='_blank'>
        {collaborator.logo?.url ? (
          <img
            src={collaborator.logo.url}
            alt={collaborator.logo.alt}
          />
        ) : (
          collaborator.name
        )}
      </a>
    </Container>
  );
};

export default CollaboratorItem;
