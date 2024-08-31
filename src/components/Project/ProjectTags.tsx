import Tag from '../Common/Tag/Tag';

const ProjectTags = ({ tags, category }) => {
  return (
    <>
      {tags.map((uid, index) => (
        <Tag
          key={index}
          uid={uid}
          category={category}
        />
      ))}
    </>
  );
};

export default ProjectTags;
