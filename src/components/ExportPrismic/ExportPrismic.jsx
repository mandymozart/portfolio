import styled from '@emotion/styled';
import { usePrismicDocumentsByType } from '@prismicio/react';

const Container = styled.div``;

export const ExportPrismic = () => {
  const [skills] = usePrismicDocumentsByType('skill', {
    params: {
      pageSize: 100,
    },
  });
  const [collaborators] = usePrismicDocumentsByType('collaborator', {
    params: {
      pageSize: 100,
    },
  });
  const [clients] = usePrismicDocumentsByType('client', {
    params: {
      pageSize: 100,
    },
  });
  const [experiences] = usePrismicDocumentsByType('experience', {
    params: {
      pageSize: 100,
    },
  });
  const [methods] = usePrismicDocumentsByType('method', {
    params: {
      pageSize: 100,
    },
  });
  const [projects] = usePrismicDocumentsByType('project', {
    params: {
      pageSize: 100,
    },
  });

  const exportData = () => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify({
        skills: skills.results,
        collaborators: collaborators.results,
        clients: clients.results,
        experiences: experiences.results,
        methods: methods.results,
        projects: projects.results,
      })
    )}`;
    const link = document.createElement('a');
    link.href = jsonString;
    link.download = 'data.json';

    link.click();
  };

  if (!skills && !collaborators && !projects && !clients && !methods)
    return <></>;
  return (
    <Container>
      <pre>
        <code>
          Skills: {skills?.results.length}
          Clients: {clients?.results.length}
          Collaborators: {collaborators?.results.length}
          Experiences: {experiences?.results.length}
          Methods: {methods?.results.length}
          Projects: {projects?.results.length}
        </code>
      </pre>
      <button onClick={exportData}>Export</button>
    </Container>
  );
};
