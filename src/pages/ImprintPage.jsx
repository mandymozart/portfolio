'use client';
import styled from '@emotion/styled';

const Container = styled.div`
  margin-top: var(--header-height);

  padding: 0 var(--grid-padding);
`;

const ImprintPage = () => {
  return (
    <Container>
      <h4>Imprint</h4>
      <p>
        Tilman Porschütz
        <br />
        Operngasse 25/12
        <br />
        1040 Vienna, Austria
        <br />
        +43 66 0836 6059
      </p>
    </Container>
  );
};

export default ImprintPage;
