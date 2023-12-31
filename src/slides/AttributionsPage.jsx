'use client';
import styled from '@emotion/styled';

const Container = styled.div`
  margin-top: var(--header-height);

  padding: 0 var(--grid-padding);
`;

const AttributionsPage = () => {
  return (
    <Container>
      <h4>Attributions</h4>
      <p>
        This website has been made possible by using open source and licensed
        software, assets, etc. I would like to thank the following people and
        aknowledge their work:
      </p>
      <p>Font: Till - Pauline Le Papge</p>
      <p>3D: Poly Pizza, Quaternius</p>
      <p>Scroll Boilerplate: WaWaSensei</p>
      <p>Cloud Shader: pmndr drei</p>
    </Container>
  );
};

export default AttributionsPage;
