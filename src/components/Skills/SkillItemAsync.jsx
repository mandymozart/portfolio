import styled from '@emotion/styled';
import { usePrismicDocumentByUID } from '@prismicio/react';
import clsx from 'clsx';
import React from 'react';

const Container = styled.div`
  display: flex;
  padding: 0 var(--grid-padding);
  flex-direction: column;
  &.textOnly {
    display: inline;
  }
  img {
    margin-bottom: 1rem;
    width: 100%;
  }
`;

const SkillItemAsync = ({ uid, textOnly }) => {
  if (!uid) return <></>;
  const [document] = usePrismicDocumentByUID('skill', uid);
  const data = document?.data;
  console.log('skill', document?.data, uid);
  if (!data) return <></>;
  return (
    <Container className={clsx({ textOnly: textOnly })}>
      {data.logo.url ? (
        <img
          src={data.logo.url}
          alt={data.logo.alt}
        />
      ) : (
        data.name
      )}
    </Container>
  );
};

export default SkillItemAsync;
