import styled from '@emotion/styled';
import { PrismicRichText } from '@prismicio/react';
import { useLocation } from 'react-router-dom';
import docs from '../../data/index.js';
import { ProjectDocument } from '../../data/types';
import PrimaryButton from '../Common/FormElements/PrimaryButton';
import SecondaryButton from '../Common/FormElements/SecondaryButton';
import PartnerItem from '../Common/Partners/PartnerItem';
import SkillItemAsync from '../Common/Skills/SkillItemAsync';
import ScreenshotsSection from '../Sections/ScreenshotsSection';
import { BASE_PATH } from './../../../config';
import MethodItem from './MethodItem';

import { Accordion } from '../Common/Accordion/Accordion';

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
        img {
          padding: 16rem 0 16rem 0;
          max-width: 100%;
        }
      }
      .details {
        .accordion {
          padding: 0 var(--grid-padding);
          margin-bottom: 5rem;
          .tech-stack-list,
          .partners-list {
            align-items: center;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 4rem;
            @media (max-width: 850px) {
              grid-template-columns: repeat(3, 1fr);
            }
          }
        }
        .links {
          display: grid;
          margin-top: 2rem;
          grid-template-columns: repeat(3, 1fr);
          position: sticky;
          top: 0;
          .link-item {
            padding: 0 var(--grid-padding);
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
  .navigation {
    display: grid;
    gap: 4rem;
    grid-template-columns: 1fr 1fr;
  }
`;

const MetaContainer = styled.div`
  padding: 2rem 0;
  font-size: 2rem;
  gap: 4rem;
  ul {
    padding: 0;
    margin: 0;
  }
`;

const getDetails = (project: any) => {
  let details = [];
  if (project.roles?.length > 0) {
    details.push({
      key: 'roles',
      title: 'Roles',
      content: (
        <MetaContainer>
          <ul>
            {project?.roles?.map((node, index) => {
              return (
                <RoleItem
                  key={index}
                  uid={node}
                />
              );
            })}
          </ul>
        </MetaContainer>
      ),
    });
  }
  if (project.partners?.length > 0) {
    details.push({
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
    });
  }

  if (project.skills.length > 0) {
    details.push({
      key: 'tech-stack',
      title: 'Tech Stack',
      content: (
        <MetaContainer>
          <div className='tech-stack-list'>
            {project.skills?.map((node, index) => (
              <SkillItemAsync
                key={index}
                uid={node}
              />
            ))}
          </div>
        </MetaContainer>
      ),
    });
    if (project.methods?.length > 0) {
      details.push({
        key: 'methods',
        title: 'Methods',
        content: (
          <MetaContainer>
            <ul>
              {project?.methods?.map((node, index) => {
                return (
                  <MethodItem
                    key={index}
                    uid={node}
                  />
                );
              })}
            </ul>
          </MetaContainer>
        ),
      });
    }
  }
  return details;
};

export const ProjectInterface = () => {
  let location = useLocation();

  const data = docs.projects.find(
    (project) => project.uid === location.pathname.replace('/', ''),
  ) as ProjectDocument;

  const project = data?.data;
  if (!project) return <>No data</>;

  const playReaction = () => {
    alert('Playing reaction');
  };

  const goToWebsite = (url: string) => {
    window.open(url, '_blank').focus();
  };

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
            {project.images[0].desktop && (
              <img
                className='screenshot hidden--mobile'
                src={BASE_PATH + project.images[0].desktop.url}
              />
            )}
            {project.images[0].mobile && (
              <img
                className='screenshot hidden--desktop hidden--tablet'
                src={BASE_PATH + project.images[0].mobile.url}
              />
            )}
          </div>
          <div className='details'>
            {getDetails(project).length > 0 && (
              <div className='accordion'>
                <Accordion items={getDetails(project)} />
              </div>
            )}
            <div className='links'>
              {project?.video_id && (
                <div className='link-item'>
                  <PrimaryButton onClick={() => playReaction()}>
                    Play Reaction
                  </PrimaryButton>
                </div>
              )}
              {project?.link?.url && (
                <div className='link-item'>
                  <SecondaryButton
                    onClick={() => goToWebsite(project?.link.url)}>
                    Visit Project
                  </SecondaryButton>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <ScreenshotsSection screenshots={project?.images} />
      {project?.video_id && (
        <div className='video-reaction'>
          {/* <VideoReaction videoid={data?.video_id.toString()} /> */}
        </div>
      )}
      <div className='navigation'>
        <PrimaryButton onClick={() => goToWebsite(project?.link.url)}>
          Return To Projects
        </PrimaryButton>
        {project?.link?.url && (
          <div className='link-item'>
            <SecondaryButton onClick={() => goToWebsite(project?.link.url)}>
              Visit Project
            </SecondaryButton>
          </div>
        )}
      </div>
    </Container>
  );
};
