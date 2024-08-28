'use client'

import styled from '@emotion/styled';
import ClientList from './../components/Common/Partners/ClientList.jsx';
import ContactSection from './../components/Sections/ContactSection';
import FeatureProjectCollisionsSection from './../components/Sections/FeatureProjectCollisionsSection';
import FeatureProjectEdmtSection from './../components/Sections/FeatureProjectEdmtSection';
import FeatureProjectFourthGardenSection from './../components/Sections/FeatureProjectFourthGardenSection';
import FeatureProjectLagerhausSection from './../components/Sections/FeatureProjectLagerhausSection';
import FeatureProjectLiahSection from './../components/Sections/FeatureProjectLiahSection';
import FeatureProjectNaivesAndVisionariesSection from './../components/Sections/FeatureProjectNaivesAndVisionariesSection';
import FeatureProjectResRadio2Section from './../components/Sections/FeatureProjectResRadio2Section';
import FeatureProjectSwmaSection from './../components/Sections/FeatureProjectSwmaSection';
import HeroSection from './../components/Sections/HeroSection';
import ProcessSection from './../components/Sections/ProcessSection';
import ServicesSection from './../components/Sections/ServicesSection';
import SubSection from './../components/Sections/SubSection';

const Container = styled.section`
  width: 100%   ;
`;

const HomePageNoGl = () => {
  return (
    <Container>
      <HeroSection />
      <ProcessSection />
      <ClientList />
      <SubSection title={'Selected Projects'}></SubSection>
      <FeatureProjectResRadio2Section />
      <FeatureProjectLiahSection />
      <FeatureProjectSwmaSection />
      <FeatureProjectLagerhausSection />
      <SubSection title={'Arts & Culture'}>
        Collaborating with experimental design influencers pushes my creativity
        and often the limits of technology.
      </SubSection>
      <FeatureProjectCollisionsSection />
      <FeatureProjectFourthGardenSection />
      <FeatureProjectNaivesAndVisionariesSection />
      <FeatureProjectEdmtSection />
      <ServicesSection />
      <ContactSection />
    </Container>
  );
};

export default HomePageNoGl