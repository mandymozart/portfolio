const Richtext = ({ richtext }) => {
  return (
    <>
      {richtext.map((node, index) => {
        if (node.type === 'paragraph') {
          return <p key={index}>{node.text}</p>;
        }
        if (node.type === 'image') {
          return (
            <img
              src={node.url}
              alt='Image'
            />
          );
        }
      })}
    </>
  );
};

export default Richtext;
