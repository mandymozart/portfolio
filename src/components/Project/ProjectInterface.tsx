import styled from '@emotion/styled';
import { PrismicRichText } from '@prismicio/react';
import { useLocation } from 'react-router-dom';
import { projects } from '../../data/index.json';
import { ProjectDocument } from '../../data/types';
import PartnerItem from '../Partners/PartnerItem';
import ScreenshotsSection from '../Sections/ScreenshotsSection';
import SkillItemAsync from '../Skills/SkillItemAsync';
import MethodItem from './MethodItem';

import { Accordion } from '../Accordion/Accordion';

import RoleItem from './RoleItem';

const Container = styled.div`
  padding-top: var(--header-height);
  max-width: var(--content-width);
  margin: 0 auto;

  .page-hero {
    min-height: 100vh;
    > header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 18rem;
      padding: 0 var(--grid-padding);
      h2 {
        font-size: 6rem;
        span {
          font-size: 1rem;
          font-weight: 400;
        }
      }
    }
    .meta {
      display: grid;
      position: relative;
      width: var(--content-width);
      margin-left: var(--content-margin-left);
      grid-template-columns: 3fr 3fr;

      @media (max-width: 1350px) {
        grid-template-columns: 2fr 2fr;
      }
      @media (max-width: 850px) {
        grid-template-columns: 1fr;
      }
      .description {
        padding: var(--grid-padding);
        p {
          margin: 0 0 4rem 0;
          font-size: 3rem;
          line-height: 4rem;
        }
      }
      .details {
        .tech-stack-list,
        .partners-list {
          align-items: center;
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 1rem;
          @media (max-width: 850px) {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      }
      p {
        margin-bottom: 2rem;
      }
    }
  }
  .video-reaction {
    width: auto;
    height: 20rem;
    position: fixed;
    bottom: 0;
    left: 4rem;
    z-index: 10000;
  }
  .link {
    position: fixed;
    bottom: var(--grid-padding);
    right: var(--grid-padding);
  }
`;

const MetaContainer = styled.div`
  padding: 2rem 0;
  font-size: 2rem;
`;

export const ProjectInterface = () => {
  let location = useLocation();

  const data = projects.find(
    (project) => project.uid === location.pathname.replace('/', ''),
  ) as ProjectDocument;

  const project = data?.data;
  if (!project) return <>No data</>;

  const details = [
    {
      key: 'tech-stack',
      title: 'Tech Stack',
      content: (
        <MetaContainer>
          <div className='tech-stack-list'>
            {project.skills.map((node, index) => (
              <SkillItemAsync
                key={index}
                link={node}
              />
            ))}
          </div>
        </MetaContainer>
      ),
    },
    {
      key: 'partners',
      title: 'Partners',
      content: (
        <MetaContainer>
          <div className='partners-list'>
            {project?.partners?.map((node, index) => (
              <PartnerItem
                key={index}
                link={node}
              />
            ))}
          </div>
        </MetaContainer>
      ),
    },
    {
      key: 'roles',
      title: 'Roles',
      content: (
        <MetaContainer>
          <ul>
            {project?.roles?.map((node, index) => {
              return (
                <RoleItem
                  key={index}
                  link={node}
                />
              );
            })}
          </ul>
        </MetaContainer>
      ),
    },
    {
      key: 'methods',
      title: 'Methods',
      content: (
        <MetaContainer>
          <ul>
            {project?.methods?.map((node, index) => {
              return (
                <MethodItem
                  key={index}
                  link={node}
                />
              );
            })}
          </ul>
        </MetaContainer>
      ),
    },
  ];

  return (
    <Container>
      <section className='page page-hero'>
        <header>
          <h2>{project?.name}</h2>
          <div>
            {project?.industry}/{project?.type}
          </div>
        </header>
        <div className='meta'>
          <div className='description'>
            <PrismicRichText field={project?.description} />
          </div>
          <div className='details'>
            <Accordion items={details} />
          </div>
        </div>
      </section>
      <ScreenshotsSection screenshots={project?.images} />
      {project?.video_id && (
        <div className='video-reaction'>
          {/* <VideoReaction videoid={data?.video_id.toString()} /> */}
        </div>
      )}
      <div className='link'>
        {project?.link?.url && (
          <a
            href={project?.link.url}
            target='_blank'
            rel='noopener noreferrer'
            className='button'>
            Visit project
          </a>
        )}
      </div>
    </Container>
  );
};
