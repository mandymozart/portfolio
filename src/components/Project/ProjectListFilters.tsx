import useProjectsStore from '../../stores/ProjectsStore';
import Tag from '../Common/Tag/Tag';
import { ProjectFilter } from './ProjectThumbnailItem';

const ProjectListFilters = () => {
  const { filters, setFilters } = useProjectsStore();

  const handleClick = (filter: ProjectFilter) => {
    if (filters.find((f) => f.uid === filter.uid)) {
      setFilters([...filters.filter((f) => f.uid !== filter.uid)]);
    } else {
      setFilters([...filters, filter]);
    }
  };

  return (
    <>
      {filters.length > 0 && (
        <Tag
          label='Clear'
          onClick={() => setFilters([])}
        />
      )}
      {filters.map((filter, index) => (
        <Tag
          key={index}
          onClick={() =>
            handleClick({ category: filter.category, uid: filter.uid })
          }
          uid={filter.uid}
          selected={filters.some(
            (f: ProjectFilter) =>
              f.uid === filter.uid && f.category === filter.category,
          )}
          category={filter.category}
        />
      ))}
    </>
  );
};

export default ProjectListFilters;
