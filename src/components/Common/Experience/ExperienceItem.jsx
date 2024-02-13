import styled from '@emotion/styled';
import dayjs from 'dayjs';
import { playToneAtRoute } from '../../../audio';
import docs from '../../../data/index.js';
import { emitRouteChange } from '../../../events/routerEvents';
import { routes } from '../../../slideInRoutes';
import useMenuStore from '../../../stores/MenuStore';
import Arrow from '../Icons/Arrow.jsx';

const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  padding: var(--grid-padding) 0;
  position: relative;
  /* width: var(--content-width); */
  @media (max-width: 1350px) {
    grid-template-columns: 2fr 2fr;
  }
  @media (max-width: 850px) {
    grid-template-columns: 1fr;
  }

  .logo {
    &:after {
      background: var(--primary);
      border-radius: 2rem;
    }
    padding: var(--grid-padding) var(--primary) var(--primary) 0;
    /* border-right: 1px solid var(--primary); */
    position: sticky;
    top: 0;

    img {
      width: 100%;
      height: auto;
      object-fit: contain;
    }
  }
  .meta {
    padding-right: var(--grid-padding);
  }
  .related {
    h3 {
      font-weight: 700;
      margin-bottom: 2rem;
      margin-top: 2rem;
    }
    padding: var(--grid-padding) 0;
    a {
      display: flex;
      line-height: 3rem;
      text-decoration: none;
      align-items: center;
      svg {
        width: 1.5rem;
        margin-left: 1rem;
      }
    }
  }
`;

const ExperienceItem = ({ experience }) => {
  const setActiveMenuItem = useMenuStore((state) => state.setActiveMenuItem);
  if (!experience) return <></>;
  const getProject = (uid) => {
    if (docs.projects) {
      let pro = docs.projects.find((p) => {
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

  const navigateTo = (uid) => () => {
    playToneAtRoute(routes.PROJECT.key);
    setActiveMenuItem(routes.PROJECT);
    emitRouteChange({ to: routes.PROJECT, params: { uid: uid } });
  };
  return (
    <Container>
      <div className='meta'>
        {/* <h4>{experience.data.company}</h4> */}
        <span className='period'>
          {dayjs(experience.data.startdate).format('YYYY')}&mdash;
          {dayjs(experience.data.enddate).format('YYYY')}
        </span>{' '}
        / {experience.data.contract}
        <br />
        <span>{experience.data.name}</span>
        <div className='description'>{experience.data.shortdescription}</div>
        <div className='related'>
          <h3>Related Projects</h3>
          {experience.data.projects.map((uid, index) => {
            if (getProject(uid)) {
              return (
                <div key={index}>
                  <a
                    href={`#${uid}`}
                    onClick={navigateTo(uid)}>
                    {getProject(uid)?.data.name} <Arrow />
                  </a>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
      <div className='logo'>
        {experience.data.logo.url && (
          <img
            src={experience.data.logo.url}
            alt={experience.data.logo.alt}
          />
        )}
      </div>
    </Container>
  );
};

export default ExperienceItem;
