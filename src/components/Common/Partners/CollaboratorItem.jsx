import styled from '@emotion/styled';
import docs from '../../../data/index.js';
import { isNotEmptyLinkField } from '../../../typeguards';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  img {
    margin-bottom: 1rem;
    max-width: 100%;
  }
`;

const CollaboratorItem = ({ uid }) => {
  const collaborator = docs.collaborators.find(
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
