import { playToneAtRoute } from '../../audio';
import { emitRouteChange } from '../../events/routerEvents';
import { routes } from '../../slideInRoutes';
import useMenuStore from '../../stores/MenuStore';
import useProjectsStore from '../../stores/ProjectsStore';
import Tag from '../Common/Tag/Tag';
import { ProjectFilter } from './ProjectThumbnailItem';

const ProjectTags = ({ tags, category }) => {
  const { filters, setFilters } = useProjectsStore();
  const { activeMenuItem, setActiveMenuItem } = useMenuStore();

  const handleClick = (filter: ProjectFilter) => {
    if (filters.find((f) => f.uid === filter.uid)) {
      setFilters([...filters.filter((f) => f.uid !== filter.uid)]);
    } else {
      setFilters([...filters, filter]);
    }
    console.log(activeMenuItem.key === routes.PROJECT.key);
    if (activeMenuItem.key === routes.PROJECT.key) forwardToProjects();
  };

  const forwardToProjects = () => {
    playToneAtRoute(routes.PROJECTS.key);
    setActiveMenuItem(routes.PROJECTS);
    emitRouteChange({ to: routes.PROJECTS });
  };
  return (
    <>
      {tags.map((uid, index) => (
        <Tag
          key={index}
          onClick={() => handleClick({ category: category, uid: uid })}
          uid={uid}
          selected={filters.some(
            (f: ProjectFilter) => f.uid === uid && f.category === category,
          )}
          category={category}
        />
      ))}
    </>
  );
};

export default ProjectTags;
