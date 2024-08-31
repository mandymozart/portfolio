import styled from '@emotion/styled';
import React from 'react';

const Container = styled.div`
  h3 {
    position: sticky;
    top: 0;
    > div {
      display: flex;
      font-size: 3rem;
      font-weight: 400;
      align-items: center;
      justify-content: space-between;
      padding: 6rem 0 3rem 0;
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
