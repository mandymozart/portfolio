import styled from '@emotion/styled';
import Marquee from 'react-fast-marquee';
import docs from './../../../data/index.js';
import ClientItem from './ClientItem';

const Container = styled.div`
`;

const ClientList = () => {
  if (!docs.clients) return <></>;
  return (
    <Container>
      <Marquee speed={100}>
        {docs.clients.slice(0, 8).map((node, index) => (
          <ClientItem
            key={index}
            client={node.data}
          />
        ))}
      </Marquee>
      <Marquee speed={80}>
        {docs.clients.slice(9, 16).map((node, index) => (
          <ClientItem
            key={index}
            client={node.data}
          />
        ))}
      </Marquee>
    </Container>
  );
};

export default ClientList;
