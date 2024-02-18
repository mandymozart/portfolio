import styled from '@emotion/styled';
import docs from '../../../data/index.js';
import { isNotEmptyLinkField } from '../../../typeguards';
import { getCharsFast } from '../../Project/RoleItem';

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
          getCharsFast(collaborator.name)
        )}
      </a>
    </Container>
  );
};

export default CollaboratorItem;
