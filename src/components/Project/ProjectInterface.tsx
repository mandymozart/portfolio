import styled from '@emotion/styled';
import { PrismicRichText } from '@prismicio/react';
import { useLocation } from 'react-router-dom';
import PartnerItem from '../Partners/PartnerItem';
import ScreenshotsSection from '../Sections/ScreenshotsSection';
import { projects } from './../../mockData/data.json';
import SkillItemAsync from './../Skills/SkillItemAsync';

const Container = styled.div`
  padding-top: var(--header-height);
  header {
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
    grid-template-columns: 3fr 1fr 1fr 1fr;

    @media (max-width: 1350px) {
      grid-template-columns: 2fr 1fr 1fr;
    }
    @media (max-width: 850px) {
      grid-template-columns: repeat(1, 1fr);
    }
    .description {
      padding: var(--grid-padding);
      p {
        margin: 0 0 4rem 0;
        font-size: 3rem;
        line-height: 4rem;
      }
    }
    .tech-stack,
    .partners,
    .roles,
    .methods {
      padding: var(--grid-padding);
      h3 {
        margin-bottom: 2rem;
      }
      .tech-stack-list,
      .partners-list {
        align-items: center;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
        @media (max-width: 850px) {
          grid-template-columns: 1fr 1fr 1fr;
        }
      }
    }
    p {
      margin-bottom: 2rem;
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

export const ProjectInterface = () => {
  let location = useLocation();

  const data = projects.find(
    (project) => project.uid === location.pathname.replace('/', ''),
  );

  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState<any>(null);
  // const [data, setData] = useState<any>(null);

  // const getData = async (uid: string) => {
  //   setLoading(true);
  //   const event: RouteLoadedEvent = {
  //     to: routes.PROJECT,
  //     params: { uid: uid },
  //   };
  //   setError(null);
  //   try {
  //     const response = await client.getByUID('project', uid);
  //     setData(response.data);
  //   } catch (err: any) {
  //     setError(err);
  //   } finally {
  //     emitRouteLoaded(event);
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   getData(location.pathname.replace('/', ''));
  // }, [location]); // dependencies

  // if (loading) return 'Loading...';
  // if (error) return `Error: ${error?.message}`;
  const project = data?.data;
  if (!project) return <>No data</>;

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
          <div className='partners'>
            <h3>Partners</h3>
            <div className='partners-list'>
              {project?.partners?.map((edges, index) => (
                <div key={index}>
                  <PartnerItem partnerLink={edges.partner} />
                </div>
              ))}
            </div>
          </div>
          <div className='tech-stack'>
            <h3>Tech Stack</h3>
            <div className='tech-stack-list'>
              {project?.skills?.map((edges, index) => (
                <SkillItemAsync
                  key={index}
                  uid={edges.skill.uid}
                />
              ))}
            </div>
          </div>
          <div className='participation'>
            <div className='roles'>
              <h3>Roles</h3>
              <div>{project?.roles}</div>
            </div>
            <div className='methods'>
              <h3>Methods</h3>
              {/* <div>{data?.methods}</div> */}
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
