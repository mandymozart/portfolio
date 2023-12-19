import styled from '@emotion/styled';
import React from 'react';

const Container = styled.div`
  h3 {
    position: relative;
    width: var(--content-width);
    margin: 0;
    margin-left: var(--content-margin-left);
    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 2rem var(--grid-padding) 1rem var(--grid-padding);
    }
    span {
      font-size: 1rem;
      font-weight: 400;
    }
  }
`;

const ListHeader = ({ title, subtitle, children, ...props }) => {
  return (
    <Container {...props}>
      <h3>
        <div>
          {title}
          <span>
            {children}
            {subtitle ? subtitle : ''}
          </span>
        </div>
      </h3>
    </Container>
  );
};

export default ListHeader;
