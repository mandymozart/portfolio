import styled from '@emotion/styled';
import React from 'react';
import { isNotEmptyLinkField } from '../../../typeguards';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem 4rem;
  img {
    margin-bottom: 1rem;
    width: 10vw;
    transition: transform 0.3s ease-in;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

const ClientItem = ({ client }) => {
  if (!client) return <></>;
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

export default ClientItem;
