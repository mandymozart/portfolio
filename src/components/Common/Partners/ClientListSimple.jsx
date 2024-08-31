import styled from '@emotion/styled';
import { forwardRef } from 'react';
import docs from '../../../data/index.js';

const Container = styled.div`
display: grid;
grid-template-columns: 2fr 1fr;
gap: var(--grid-padding);
h3 {
  font-size: 3rem;
}
p {
  font-size: 1.5rem;
}
div {
    grid-column: 2; /* Start in the second column */
    padding: 0 var(--grid-padding);
  }

`;

const ClientListSimple = forwardRef(() => {
  if (!docs.clients) return <></>;
  return (
    <Container>
      <div>

      <h3>
        Clients
      </h3>
      <p>
        {docs.clients
          .sort(function (a, b) {
            if (a.data.name < b.data.name) {
              return -1;
            }
            if (a.data.name > b.data.name) {
              return 1;
            }
            return 0;
          })
          .map((client, index) => (
            <span key={index}>{client.data.name}{index < docs.clients.length -1  && (<>, </>)}</span>
          ))}
      </p>
      </div>
      {/* {docs.clients.map((node, index) => (
        <ClientItem
        key={index}
        client={node.data}
        />
      ))} */}
    </Container>
  );
});

export default ClientListSimple;
