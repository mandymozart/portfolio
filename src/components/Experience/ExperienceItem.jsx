import styled from '@emotion/styled';
import dayjs from 'dayjs';
import useMenuStore from '../../stores/MenuStore';
import { emitRouteChange } from './../../events/routerEvents';
import useMonoSynth from './../../hooks/useMonoSynth';
import { routes } from './../../slideInRoutes';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 2fr;
  position: relative;
  margin-left: var(--content-margin-left);
  width: var(--content-width);
  @media (max-width: 1350px) {
    grid-template-columns: 1fr 2fr 1fr;
  }
  @media (max-width: 850px) {
    grid-template-columns: repeat(1, 1fr);
  }

  .logo {
    &:after {
      background: var(--primary);
      border-radius: 2rem;
    }
    padding: var(--grid-padding);
    /* border-right: 1px solid var(--primary); */
    height: 10rem;
    img {
      width: 100%;
      height: auto;
      object-fit: contain;
    }
  }
  .meta {
    padding: var(--grid-padding);
  }
  .related {
    padding: var(--grid-padding);
    a img {
      width: 100% !important;
    }
  }
`;

const ExperienceItem = ({ experience, projects }) => {
  const { playToneAtRoute } = useMonoSynth();
  const setActiveMenuItem = useMenuStore(state => state.setActiveMenuItem);
  if (!experience) return <></>;
  if (!projects) return <></>;
  const getProject = uid => {
    if (projects) {
      let pro = projects.find(p => {
        if (p.uid === uid) {
          return p;
        } else {
          return;
        }
      });
      if (pro) return pro;
    } else {
      return undefined;
    }
  };

  const navigateTo = uid => () => {
    playToneAtRoute(routes.PROJECT.key);
    setActiveMenuItem(routes.PROJECT);
    emitRouteChange({ to: routes.PROJECT, params: { uid: uid } });
  };
  return (
    <Container>
      <div className='logo'>
        <img
          src={experience.data.logo.url}
          alt={experience.data.logo.alt}
        />
      </div>
      <div className='meta'>
        <h4>{experience.data.company}</h4>
        <span className='period'>
          {dayjs(experience.data.startdate).format('YYYY')}&mdash;
          {dayjs(experience.data.enddate).format('YYYY')}
        </span>
        / {experience.data.contract}
        <br />
        <span>{experience.data.name}</span>
        <div className='description'>{experience.data.shortdescription}</div>
      </div>
      <div className='related'>
        {experience.data.projects.map((node, index) => {
          if (getProject(node.project.uid)) {
            return (
              <div key={index}>
                <a
                  href={`#${node.project.uid}`}
                  onClick={navigateTo(node.project.uid)}
                >
                  {getProject(node.project.uid)?.data.name}
                </a>
              </div>
            );
          }
          return null;
        })}
      </div>
    </Container>
  );
};

export default ExperienceItem;
