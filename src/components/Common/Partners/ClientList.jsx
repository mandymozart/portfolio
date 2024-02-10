import styled from '@emotion/styled';
import Marquee from 'react-fast-marquee';
import { clients } from './../../../data/index.json';
import ClientItem from './ClientItem';

const Container = styled.div`
  .list {
    position: relative;
    margin-left: var(--content-margin-left);
    /* width: var(--content-width); */
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
  if (!clients) return <></>;
  return (
    <Container>
      <Marquee speed={100}>
        {clients.slice(0, 5).map((node, index) => (
          <ClientItem
            key={index}
            client={node.data}
          />
        ))}
      </Marquee>
      <Marquee speed={80}>
        {clients.slice(6, 16).map((node, index) => (
          <ClientItem
            key={index}
            client={node.data}
          />
        ))}
      </Marquee>
      {/* <Marquee speed={60}>
        {clients.slice(12, 16).map((node, index) => (
          <ClientItem
            key={index}
            client={node.data}
          />
        ))}
      </Marquee> */}
    </Container>
  );
};

export default ClientList;
