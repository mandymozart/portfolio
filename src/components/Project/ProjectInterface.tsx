import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import docs from '../../data/index.js';
import { ProjectDocument } from '../../data/types';
import useMenuStore from '../../stores/MenuStore';
import { Accordion } from '../Common/Accordion/Accordion';
import PrimaryButton from '../Common/FormElements/PrimaryButton';
import SecondaryButton from '../Common/FormElements/SecondaryButton';
import PartnerItem from '../Common/Partners/PartnerItem';
import Richtext from '../Common/Richtext/Richtext';
import SkillItemAsync from '../Common/Skills/SkillItemAsync';
import ScreenshotsSection from '../Sections/ScreenshotsSection';
import {
  BASE_PATH,
  BREAKPOINT_L,
  BREAKPOINT_MD,
  BREAKPOINT_SM,
  BREAKPOINT_XS,
  BREAKPOINT_XXS,
} from './../../../config';
import MethodItem from './MethodItem';

import {
  fastTranslateVariants,
  staggerVariants,
  translateVariants,
} from '../../animations/site.js';
import { playToneAtRoute } from '../../audio.js';
import { emitRouteChange } from '../../events/routerEvents';
import { routes } from '../../slideInRoutes';
import ProjectTags from './ProjectTags';
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
      @media (max-width: ${BREAKPOINT_MD}) {
        display: block;
      }
      height: 18rem;
      padding: 0 var(--grid-padding);
      position: sticky;
      top: 0;
      color: var(--aero-blue);
      h2 {
        font-size: 6rem;
      }
      .tags button {
        margin-left: 1rem;
        @media (max-width: ${BREAKPOINT_MD}) {
          margin-left: 0;
          margin-right: 1rem;
        }
      }
    }
    .meta {
      display: grid;
      position: relative;
      grid-template-columns: 3fr 3fr;

      @media (max-width: ${BREAKPOINT_L}) {
      }
      @media (max-width: ${BREAKPOINT_MD}) {
      }
      @media (max-width: ${BREAKPOINT_SM}) {
        display: block;
      }
      @media (max-width: ${BREAKPOINT_XS}) {
      }
      @media (max-width: ${BREAKPOINT_XXS}) {
      }

      @media (max-width: ${BREAKPOINT_MD}) {
        grid-template-columns: 2fr 2fr;
      }
      @media (max-width: ${BREAKPOINT_MD}) {
        grid-template-columns: 1fr;
      }
      .description {
        padding: 0 var(--grid-padding);
        p {
          margin: 0 0 4rem 0;
          font-size: 3rem;
          line-height: 4rem;
          @media (max-width: ${BREAKPOINT_MD}) {
            font-size: 2rem;
            line-height: 3rem;
          }
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
            @media (max-width: ${BREAKPOINT_SM}) {
              grid-template-columns: repeat(6, 1fr);
            }
          }
          .partners-list {
            display: block;
          }
        }
        .links {
          display: grid;
          margin-top: 2rem;
          grid-template-columns: repeat(3, 1fr);
          @media (max-width: ${BREAKPOINT_MD}) {
            grid-template-columns: repeat(2, 1fr);
          }
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
    grid-template-columns: 1fr 1fr;
    padding-top: var(--grid-padding);
    .link-item {
      padding: 0 var(--grid-padding);
    }
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
              <motion.div
                key={index}
                custom={[index * 0.1, index * 0.01]}
                variants={fastTranslateVariants}
                initial='initial'
                animate='enter'
                exit='exit'>
                <PartnerItem
                  key={index}
                  link={node}
                />
              </motion.div>
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
              <motion.div
                key={index}
                custom={[index * 0.1, index * 0.01]}
                variants={fastTranslateVariants}
                initial='initial'
                animate='enter'
                exit='exit'>
                <SkillItemAsync uid={node} />
              </motion.div>
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

export const getChars = (word) => {
  let chars = [];
  word.split('').forEach((char, i) => {
    chars.push(
      <motion.span
        custom={[i * 0.02, (word.length - i) * 0.01]}
        variants={translateVariants}
        initial='initial'
        animate='enter'
        exit='exit'
        key={char + i}>
        {char}
      </motion.span>,
    );
  });
  return chars;
};

export const ProjectInterface = () => {
  let location = useLocation();
  const setActiveMenuItem = useMenuStore((state) => state.setActiveMenuItem);

  const data = docs.projects.find(
    (project) => project.uid === location.pathname.replace('/', ''),
  ) as ProjectDocument;

  const project = data?.data;
  if (!project) return <>No data</>;

  const playReaction = () => {
    alert('Playing reaction');
  };

  const back = () => () => {
    playToneAtRoute(routes.PROJECTS.key);
    setActiveMenuItem(routes.PROJECTS);
    emitRouteChange({ to: routes.PROJECTS });
  };

  const goToWebsite = (url: string) => {
    window.open(url, '_blank').focus();
  };
  console.log(project);
  return (
    <Container>
      <section className='page page-hero'>
        <header>
          <h2>{getChars(project?.name)}</h2>
          <div className='tags'>
            <ProjectTags
              tags={project.industries}
              category={'industries'}
            />
            <ProjectTags
              tags={project.types}
              category={'types'}
            />
          </div>
        </header>
        <div className='meta'>
          <div className='description'>
            <Richtext richtext={project?.description} />
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
                  <motion.div
                    initial='offscreen'
                    whileInView='onscreen'
                    custom={0}
                    variants={staggerVariants}>
                    <PrimaryButton onClick={() => playReaction()}>
                      Play Reaction
                    </PrimaryButton>
                  </motion.div>
                </div>
              )}
              {project?.link?.url && (
                <div className='link-item'>
                  <motion.div
                    initial='offscreen'
                    whileInView='onscreen'
                    custom={3}
                    variants={staggerVariants}>
                    <SecondaryButton
                      onClick={() => goToWebsite(project?.link.url)}>
                      Visit Project
                    </SecondaryButton>
                  </motion.div>
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
        <div className='link-item'>
          <motion.div
            initial='offscreen'
            whileInView='onscreen'
            custom={0}
            variants={staggerVariants}>
            <PrimaryButton onClick={back()}>Return To Projects</PrimaryButton>
          </motion.div>
        </div>
        {project?.link?.url && (
          <div className='link-item'>
            <motion.div
              initial='offscreen'
              whileInView='onscreen'
              custom={3}
              variants={staggerVariants}>
              <SecondaryButton onClick={() => goToWebsite(project?.link.url)}>
                Visit Project
              </SecondaryButton>
            </motion.div>
          </div>
        )}
      </div>
    </Container>
  );
};
