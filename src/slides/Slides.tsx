import styled from '@emotion/styled';
import { FC } from 'react';
import { routes } from '../routes';
import SlideIn from './../components/Common/SlideIn/SlideIn';
import AboutPage from './AboutPage';
import AttributionsPage from './AttributionsPage';
import ImprintPage from './ImprintPage';
import PrivacyPolicyPage from './PrivacyPolicyPage';
import ProjectDetailPage from './ProjectPage';
import ProjectsPage from './ProjectsPage';

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
      <SlideIn route={routes.ABOUT}>
        <AboutPage />
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
      <SlideIn route={routes.PRIVACY}>
        <PrivacyPolicyPage />
      </SlideIn>
    </Container>
  );
};

export default Slides;
