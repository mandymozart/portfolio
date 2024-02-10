import styled from '@emotion/styled';
import React from 'react';
import { BASE } from '../../../../config';

const Container = styled.div`
  position: relative;
  text-transform: capitalize;
  display: grid;
  height: 4rem;
  width: var(--content-width);
  margin-left: var(--content-margin-left);
  grid-template-columns: repeat(6, 1fr);
  > div {
    padding: 2rem var(--grid-padding) 1rem var(--grid-padding);
  }
  @media (max-width: 1350px) {
    grid-template-columns: repeat(4, 1fr);
    height: auto;
  }
  @media (max-width: 850px) {
    display: block;
    padding: 2rem var(--grid-padding) var(--grid-padding);
    > div {
      display: inline;
      padding: 0;
    }
  }
`;

/**
 * Breadcrumbs
 * @param {Array} breadcrumbs
 */
const Breadcrumbs = ({ breadcrumbs }) => {
  return (
    <Container>
      {/* Render your breadcrumbs here */}
      {breadcrumbs.map((breadcrumb, index) => {
        if (breadcrumb.path) {
          return (
            <div key={index}>
              <a href={`${BASE}${breadcrumb.path}`}>{breadcrumb.label}</a>{' '}
              &gt;&nbsp;
            </div>
          );
        } else {
          return <div key={index}>{breadcrumb.label}</div>;
        }
      })}
    </Container>
  );
};

export default Breadcrumbs;
