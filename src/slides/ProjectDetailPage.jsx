'use client';
import { ProjectInterface } from '../components/Project/ProjectInterface';
import useProjectStore from '../stores/ProjectStore';

function ProjectDetailPage() {
  const uid = useProjectStore(state => state.activeProject);
  return (
    <>
      <ProjectInterface uid={uid} />
    </>
  );
}

export default ProjectDetailPage;
