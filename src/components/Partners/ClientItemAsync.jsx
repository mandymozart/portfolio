import styled from '@emotion/styled';
import { clients } from '../../data/index.json';
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
  const client = clients.find((client) => client.uid === uid)?.data;
  console.log(client);
  if (!client) return <>Not found</>;
  return (
    <Container>
      <a
        href={isNotEmptyLinkField(client.link) ? client.link.url : '#'}
        target='_blank'>
        {client.logo.url ? (
          <img
            src={client.logo.url}
            alt={client.logo.alt}
          />
        ) : (
          <>{client.name}</>
        )}
      </a>
    </Container>
  );
};

export default ClientItemAsync;
