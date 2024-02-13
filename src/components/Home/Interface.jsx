import styled from '@emotion/styled';
import ClientList from '../Common/Partners/ClientList.jsx';
import ContactSection from '../Sections/ContactSection';
import FeatureProjectCollisionsSection from '../Sections/FeatureProjectCollisionsSection';
import FeatureProjectDogHeartCitySection from '../Sections/FeatureProjectDogHeartCitySection';
import FeatureProjectEdmtSection from '../Sections/FeatureProjectEdmtSection';
import FeatureProjectFourthGardenSection from '../Sections/FeatureProjectFourthGardenSection';
import FeatureProjectLagerhausSection from '../Sections/FeatureProjectLagerhausSection';
import FeatureProjectLiahSection from '../Sections/FeatureProjectLiahSection';
import FeatureProjectNaivesAndVisionariesSection from '../Sections/FeatureProjectNaivesAndVisionariesSection';
import FeatureProjectResRadio2Section from '../Sections/FeatureProjectResRadio2Section';
import FeatureProjectSwmaSection from '../Sections/FeatureProjectSwmaSection';
import HeroSection from '../Sections/HeroSection';
import IntroSection from '../Sections/IntroSection';
import ProcessSection from '../Sections/ProcessSection';
import ServicesSection from '../Sections/ServicesSection';
import SubSection from '../Sections/SubSection';
import { getSectionPageCount } from './sections.ts';

const Container = styled.section`
  width: 100vw;
  height: calc(${getSectionPageCount()} * 100vh);
`;

export const Interface = () => {
  console.log('Section Page Count', getSectionPageCount());
  // One page is 5 sec + 1 sec spacer in between
  console.log(
    'Required Sequence Length',
    getSectionPageCount() * 6,
    (getSectionPageCount() * 6) / 60,
  );
  return (
    <Container>
      <IntroSection />
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
      <SubSection title={'Games'}>
        Audiovisual apps for entertainment, promotion and creation.
      </SubSection>
      <FeatureProjectDogHeartCitySection />
      <FeatureProjectEdmtSection />
      <ServicesSection />
      <ContactSection />
    </Container>
  );
};
