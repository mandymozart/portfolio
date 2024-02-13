'use client';
import styled from '@emotion/styled';
import { useState } from 'react';
import docs from '../../data/index.js';
import SecondaryButton from '../Common/FormElements/SecondaryButton.jsx';
import ProjectThumbnailItem from './ProjectThumbnailItem.js';

export const SortingLabels = {
  toDate: 'Release',
  name: 'Name',
};

export enum FilterKey {
  INDUSTRY = 'Industry',
  PARTNER = 'Partner',
  ROLE = 'Role',
  TYPE = 'Type',
  METHOD = 'Method',
  SKILL = 'Skill',
}

export const sortingKeys: string[] = ['toDate', 'name'];
export const filterKeys: FilterKey[] = [
  FilterKey.INDUSTRY,
  FilterKey.PARTNER,
  FilterKey.METHOD,
  FilterKey.ROLE,
  FilterKey.SKILL,
];

export enum SortingDirection {
  ASC = 'asc',
  DESC = 'desc',
  RANDOM = 'random',
}

const Container = styled.div`
  position: relative;
  width: var(--content-width);
  margin: 0 auto;

  .sort {
    display: grid;
    grid-template-columns: 3fr 1fr 1fr 1fr;

    grid-column-start: 3;

    position: sticky;
    align-items: center;
    top: 0;
    z-index: 1;
    > div {
      padding: 0 var(--grid-padding);
    }
    &-label {
      font-size: 2rem;
      text-align: right;
    }
  }

  .list {
    padding: var(--grid-padding);
    display: grid;
    gap: 8rem;
    grid-template-columns: repeat(3, 1fr);
  }
  .listitem--first {
    position: sticky;
    grid-column: span 2;
    top: 0;
    h2 {
      font-size: 12rem;
      color: var(--aero-blue);
    }
  }
`;

const ProjectThumbnailList = () => {
  const [direction, setDirection] = useState(SortingDirection.ASC);
  const [sortingKey, setSortingKey] = useState(null);
  const [projects, setProjects] = useState(docs.projects);

  const sort = (by: string) => {
    setSortingKey(by);
    if (sortingKey === by) {
      setDirection(
        direction === SortingDirection.ASC
          ? SortingDirection.DESC
          : SortingDirection.ASC,
      );
    }
    const sorted = [...projects].sort(function (a, b) {
      if (a.data[by] < b.data[by]) {
        return -1;
      }
      if (a.data[by] > b.data[by]) {
        return 1;
      }
      return 0;
    });
    console.log(sorted, sortingKey, direction);
    setProjects(
      direction === SortingDirection.DESC ? sorted.reverse() : sorted,
    );
  };
  return (
    <Container>
      <div className='sort'>
        <div></div>
        <div className='sort-label'>Sort by</div>
        {sortingKeys.map((key) => (
          <div key={key}>
            <SecondaryButton onClick={() => sort(key)}>
              {SortingLabels[key]}
            </SecondaryButton>
          </div>
        ))}
      </div>
      <div className='list'>
        <div className='listitem--first'>
          <h2>Projects</h2>
        </div>

        {projects.map((project, index) => (
          <ProjectThumbnailItem
            role='listitem'
            key={index}
            project={project}
          />
        ))}
      </div>
    </Container>
  );
};

export default ProjectThumbnailList;
