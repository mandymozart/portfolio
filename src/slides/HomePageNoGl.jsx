'use client'

import styled from '@emotion/styled';
import ClientListSimple from '../components/Common/Partners/ClientListSimple.jsx';
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
import SubSection from './../components/Sections/SubSection';

const Container = styled.section`
overflow: hidden;
  width: 100%   ;
  .gradient {
    height: 50vh;
    &--collision-in {
      background: rgb(55,63,48);
      background: linear-gradient(0deg, rgba(55,63,48,1) 0%, rgba(48,63,63,1) 35%, rgba(175,140,255,0) 100%);
    }
    &--collision-out {
      background: rgb(55,63,48);
      background: linear-gradient(180deg, rgba(55,63,48,1) 0%, rgba(48,63,63,1) 35%, rgba(175,140,255,0) 100%);
    }
    &--contact-in {
      background: rgb(191,180,247);
      background: linear-gradient(0deg, rgba(191,180,247,1) 0%, rgba(188,180,247,1) 44%, rgba(140,196,255,0) 100%);
    }
  }
`;

const Spacer = styled.div`
  height: 10rem;
`;



const HomePageNoGl = () => {
  return (
    <Container>
      <HeroSection />
      {/* <ProcessSection /> */}
      <ClientListSimple />
      <SubSection title={<>Selected<br /> Projects</>}></SubSection>
      <FeatureProjectResRadio2Section />
      <FeatureProjectLiahSection />
      <FeatureProjectSwmaSection />
      <Spacer/>
      <FeatureProjectLagerhausSection />
      <SubSection title={'Arts & Culture'}>
        Collaborating with experimental design influencers pushes my creativity
        and often the limits of technology.
      </SubSection>
      <div className='gradient gradient--collision-in'></div>
      <FeatureProjectCollisionsSection />
      <div className='gradient gradient--collision-out'></div>
      <Spacer/>
      <FeatureProjectFourthGardenSection />
      <Spacer/>
      <FeatureProjectNaivesAndVisionariesSection />
      <FeatureProjectEdmtSection />
      {/* <ServicesSection /> */}
      <div className='gradient gradient--contact-in'></div>
      <ContactSection />
    </Container>
  );
};

export default HomePageNoGl