import styled from '@emotion/styled';
import { usePrismicDocumentByUID } from '@prismicio/react';
import { isNotEmptyLinkField } from '../../typeguards';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  img {
    margin-bottom: 1rem;
  }
`;

const CollaboratorItem = ({ uid }) => {
  const [document] = usePrismicDocumentByUID('collaborator', uid);
  if (!uid) return <></>;
  const data = document?.data;
  if (!data) return <></>;
  return (
    <Container>
      <a
        href={isNotEmptyLinkField(data.link) ? data.link.url : '#'}
        target='_blank'
      >
        {data.logo.url ? (
          <img
            src={data.logo.url}
            alt={data.logo.alt}
          />
        ) : (
          data.name
        )}
      </a>
    </Container>
  );
};

export default CollaboratorItem;
