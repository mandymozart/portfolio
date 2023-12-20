import styled from '@emotion/styled';
import { usePrismicDocumentByUID } from '@prismicio/react';
import { isNotEmptyLinkField } from '../../typeguards';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  img {
    margin-bottom: 1rem;
    max-width: 100%;
  }
`;

const ClientItemAsync = ({ uid }) => {
  const [document] = usePrismicDocumentByUID('client', uid);
  if (!uid) return <></>;
  const data = document?.data;
  console.log('client', document?.data, uid);
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
          <>{data.name}</>
        )}
      </a>
    </Container>
  );
};

export default ClientItemAsync;
