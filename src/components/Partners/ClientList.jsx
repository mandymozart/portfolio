import styled from '@emotion/styled';
import { usePrismicDocumentsByType } from '@prismicio/react';
import React from 'react';
import ClientItem from './ClientItem';

const Container = styled.div`
  .list {
    position: relative;
    margin-left: var(--content-margin-left);
    width: var(--content-width);
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    align-items: center;
    @media (max-width: 1350px) {
      grid-template-columns: repeat(8, 1fr);
    }

    @media (max-width: 850px) {
      grid-template-columns: repeat(4, 1fr);
    }
    button {
      position: absolute;
      right: 0;
    }
  }
`;

const ClientList = () => {
  const [document] = usePrismicDocumentsByType('client');
  console.log('clients', document);
  if (!document) return <></>;
  return (
    <Container>
      <div className='list'>
        {document.results.map((node, index) => (
          <ClientItem
            key={index}
            client={node.data}
          />
        ))}
      </div>
    </Container>
  );
};

export default ClientList;
