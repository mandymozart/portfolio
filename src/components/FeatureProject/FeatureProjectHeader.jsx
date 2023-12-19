import styled from '@emotion/styled';
import Arrow from '../Icons/Arrow';

const Container = styled.header`
  h3 {
    margin: 0;
    padding: 2rem var(--grid-padding);
    font-size: 2rem;
    display: flex;
    align-content: center;
    gap: 1rem;
    @media (max-width: 850px) {
      padding: 2rem var(--grid-padding) 1rem var(--grid-padding);
    }
    &:hover {
      color: var(--secondary);
    }
  }
  .subheader {
    display: grid;
    padding-bottom: 2rem;
    grid-template-columns: 4fr 1fr 1fr;
    @media (max-width: 850px) {
      grid-template-columns: 1fr;
    }
    span {
      padding: 0 var(--grid-padding);
      @media (max-width: 850px) {
        padding: 0 var(--grid-padding) 1rem var(--grid-padding);
      }
    }
  }
`;

export const FeatureProjectHeader = ({ project }) => {
  return (
    <Container>
      <h3 className='title'>
        {project.name} <Arrow />
      </h3>
      <div className='subheader'>
        <span className='subtitle'>Roles → {project?.roles}</span>
        <span className='industry'>{project?.industry}</span>
        <span className='type'>{project?.type}</span>
      </div>
    </Container>
  );
};
