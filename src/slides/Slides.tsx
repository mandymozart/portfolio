import SlideIn from '@/components/SlideIn/SlideIn';
import { routes } from '@/slideInRoutes';
import AttributionsPage from '@/slides/AttributionsPage';
import ExperiencePage from '@/slides/ExperiencePage';
import ImprintPage from '@/slides/ImprintPage';
import PrivacyPolicyPage from '@/slides/PrivacyPolicyPage';
import ProjectDetailPage from '@/slides/ProjectDetailPage';
import ProjectsPage from '@/slides/ProjectsPage';
import ResumePage from '@/slides/ResumePage';
import styled from '@emotion/styled';
import { FC } from 'react';

const Container = styled.div`
  position: fixed;
  top: var(--header-height);
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
`;

const Slides: FC = () => {
  return (
    <Container>
      <SlideIn route={routes.PROJECT}>
        <ProjectDetailPage />
      </SlideIn>
      <SlideIn route={routes.PROJECTS}>
        <ProjectsPage />
      </SlideIn>
      <SlideIn route={routes.EXPERIENCES}>
        <ExperiencePage />
      </SlideIn>
      <SlideIn route={routes.RESUME}>
        <ResumePage />
      </SlideIn>
      <SlideIn route={routes.IMPRINT}>
        <ImprintPage />
      </SlideIn>
      <SlideIn route={routes.ATTRIBUTIONS}>
        <AttributionsPage />
      </SlideIn>
      <SlideIn route={routes.PRIVACY}>
        <PrivacyPolicyPage />
      </SlideIn>
    </Container>
  );
};

export default Slides;
