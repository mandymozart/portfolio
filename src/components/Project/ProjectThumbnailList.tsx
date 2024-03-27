'use client';
import styled from '@emotion/styled';
import { useEffect } from 'react';
import docs from '../../data/index.js';
import { ProjectDocument } from '../../data/types.js';
import useProjectsStore, {
  ProjectFilter,
  SortingDirection,
  sortingKeys,
} from '../../stores/ProjectsStore';
import SecondaryButton from '../Common/FormElements/SecondaryButton';
import {
  BREAKPOINT_L,
  BREAKPOINT_MD,
  BREAKPOINT_SM,
  BREAKPOINT_XS,
  BREAKPOINT_XXS,
} from './../../../config';
import ProjectListFilters from './ProjectListFilters.js';
import ProjectThumbnailItem from './ProjectThumbnailItem';
export const SortingLabels = {
  fromDate: 'Release',
  name: 'Name',
};

const Container = styled.div`
  position: relative;
  max-width: var(--content-width);
  margin: 0 auto;
  @media (max-width: ${BREAKPOINT_L}) {
  }
  @media (max-width: ${BREAKPOINT_MD}) {
  }
  @media (max-width: ${BREAKPOINT_SM}) {
  }
  @media (max-width: ${BREAKPOINT_XS}) {
  }
  @media (max-width: ${BREAKPOINT_XXS}) {
  }

  .controls {
    position: sticky;
    align-items: center;
    margin-bottom: 4rem;
    top: 0;
    z-index: 1;

    display: grid;
    grid-template-columns: 4fr 2fr;
    @media (max-width: ${BREAKPOINT_MD}) {
      grid-template-columns: 3fr 1fr;
    }
    @media (max-width: ${BREAKPOINT_SM}) {
      display: flex;
      flex-direction: column-reverse;
      width: 100%;
    }
    @media (max-width: ${BREAKPOINT_XS}) {
      display: none;
    }
  }
  .sort {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 var(--grid-padding);
    gap: 4rem;
    @media (max-width: ${BREAKPOINT_MD}) {
      display: flex;
      justify-content: space-between;
      padding: 0 var(--grid-padding);
      gap: 2rem;
    }
  }
  .filter {
    text-align: left;
    pointer-events: all;
    line-height: 3rem;
    padding: 0 var(--grid-padding);
    button {
      margin-right: 1rem;
    }
  }

  .list {
    padding: var(--grid-padding);
    display: grid;
    gap: 4rem;
    transition: all 0.8s ease-in-out;
    grid-template-columns: repeat(3, 1fr);
    @media (max-width: ${BREAKPOINT_MD}) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: ${BREAKPOINT_SM}) {
      display: flex;
      flex-direction: column;
    }
    @media (max-width: ${BREAKPOINT_XS}) {
    }
  }
  .listitem {
    &--first {
      position: sticky;
      grid-column: span 2;
      @media (max-width: ${BREAKPOINT_SM}) {
        display: flex;
      }
      top: 2rem;
      h2 {
        font-size: 12rem;
        color: var(--aero-blue);
        @media (max-width: ${BREAKPOINT_SM}) {
          font-size: 8rem;
        }
        @media (max-width: ${BREAKPOINT_XS}) {
          font-size: 4rem;
        }
      }
    }
    &:last-of-type {
      /* padding-bottom: 4rem; */
    }
  }
`;

const ProjectThumbnailList = () => {
  const {
    direction,
    setDirection,
    sortingKey,
    setSortingKey,
    projects,
    setProjects,
    filters,
  } = useProjectsStore();

  const filterProjects = (
    projects: ProjectDocument[],
    filters: ProjectFilter[],
  ): ProjectDocument[] => {
    return projects.filter((project) => {
      return filters.every((filter) => {
        if (filter.category === 'industries') {
          return project.data.industries.includes(filter.uid);
        } else if (filter.category === 'types') {
          return project.data.types.includes(filter.uid);
        } else if (filter.category === 'roles') {
          return project.data.roles.includes(filter.uid);
        }
        // Add more conditions for other categories if needed
        return true;
      });
    });
  };

  const sort = (key?: string) => {
    let newDirection = null;
    const prevKey = sortingKey;
    if (prevKey === key) {
      newDirection =
        direction === SortingDirection.ASC
          ? SortingDirection.DESC
          : SortingDirection.ASC;
    }

    console.log(direction);
    let filteredProjects: ProjectDocument[] = docs.projects;

    // Filter projects based on applied filters
    if (filters.length > 0) {
      filteredProjects = filterProjects(filteredProjects, filters);
    }

    const sorted = filteredProjects.sort(function (a, b) {
      if (a.data[key] < b.data[key]) {
        return -1;
      }
      if (a.data[key] > b.data[key]) {
        return 1;
      }
      return 0;
    });
    if (newDirection) setDirection(newDirection);
    if (key) setSortingKey(key);
    setProjects(
      newDirection === SortingDirection.DESC ? sorted.reverse() : sorted,
    );
  };

  useEffect(() => {
    sort(sortingKey);
  }, []);

  useEffect(() => {
    sort();
  }, [filters]);

  return (
    <Container>
      <div className='controls'>
        <div>
          {filters.length > 0 && (
            <div className='filter'>
              <ProjectListFilters />
            </div>
          )}
        </div>
        <div className='sort'>
          {sortingKeys.map((key) => (
            <SecondaryButton
              key={key}
              onClick={() => sort(key)}>
              {SortingLabels[key]}{' '}
              {sortingKey === key && (
                <span>
                  {direction === SortingDirection.ASC ? (
                    <>&uarr;</>
                  ) : (
                    <>&darr;</>
                  )}
                </span>
              )}
            </SecondaryButton>
          ))}
        </div>
      </div>
      <div className='list'>
        <div className='listitem--first'>
          <h2>Projects</h2>
        </div>

        {projects.map((project, index) => (
          <ProjectThumbnailItem
            role='listitem'
            key={index}
            index={index}
            className='listitem'
            project={project}
          />
        ))}
      </div>
    </Container>
  );
};

export default ProjectThumbnailList;
