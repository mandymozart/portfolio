'use client'

import styled from '@emotion/styled';
import { useEffect, useRef } from 'react';
import { playChord } from '../audio';
import ClientListSimple from '../components/Common/Partners/ClientListSimple.jsx';
import ContactSection from '../components/Sections/ContactSection.jsx';
import FeatureProjectCollisionsSection from '../components/Sections/FeatureProjectCollisionsSection.jsx';
import FeatureProjectEdmtSection from '../components/Sections/FeatureProjectEdmtSection.jsx';
import FeatureProjectFourthGardenSection from '../components/Sections/FeatureProjectFourthGardenSection.jsx';
import FeatureProjectLagerhausSection from '../components/Sections/FeatureProjectLagerhausSection.jsx';
import FeatureProjectLiahSection from '../components/Sections/FeatureProjectLiahSection.jsx';
import FeatureProjectNaivesAndVisionariesSection from '../components/Sections/FeatureProjectNaivesAndVisionariesSection.jsx';
import FeatureProjectResRadio2Section from '../components/Sections/FeatureProjectResRadio2Section.jsx';
import FeatureProjectSwmaSection from '../components/Sections/FeatureProjectSwmaSection.jsx';
import HeroSection from '../components/Sections/HeroSection.jsx';
import SubSection from '../components/Sections/SubSection.jsx';

const chordSequence = ['Bb','Bm','Bb','Bm','Bb','Eb','Cm','Bb','G0','Gm','Am7','Bm6',
  'Gm','Cm','Cm6','Gmadd2','Gm','Cm','Cm6','Gm/D','Gm7/D','Cm7/G','Eb','Gm','Eb','Cm'
]

const chordTonesMap = {
  'Bb': [{ note: 'Bb4', duration: 1 }, { note: 'D5', duration: 1 }, { note: 'F5', duration: 1 }],
  'Bm': [{ note: 'B4', duration: 1 }, { note: 'D5', duration: 1 }, { note: 'F#5', duration: 1 }],
  'Eb': [{ note: 'Eb4', duration: 1 }, { note: 'G4', duration: 1 }, { note: 'Bb4', duration: 1 }],
  'Cm': [{ note: 'C4', duration: 1 }, { note: 'Eb4', duration: 1 }, { note: 'G4', duration: 1 }],
  'Gm': [{ note: 'G4', duration: 1 }, { note: 'Bb4', duration: 1 }, { note: 'D5', duration: 1 }],
  'Am7': [{ note: 'A4', duration: 1 }, { note: 'C5', duration: 1 }, { note: 'E5', duration: 1 }, { note: 'G5', duration: 1 }],
  'Bm6': [{ note: 'B4', duration: 1 }, { note: 'D5', duration: 1 }, { note: 'G5', duration: 1 }],
  'Cm6': [{ note: 'C4', duration: 1 }, { note: 'Eb4', duration: 1 }, { note: 'A4', duration: 1 }],
  'Gmadd2': [{ note: 'G4', duration: 1 }, { note: 'A4', duration: 1 }, { note: 'Bb4', duration: 1 }, { note: 'D5', duration: 1 }],
  'Gm/D': [{ note: 'G4', duration: 1 }, { note: 'Bb4', duration: 1 }, { note: 'D5', duration: 1 }],
  'Gm7/D': [{ note: 'G4', duration: 1 }, { note: 'Bb4', duration: 1 }, { note: 'D5', duration: 1 }, { note: 'F5', duration: 1 }],
  'Cm7/G': [{ note: 'C4', duration: 1 }, { note: 'Eb4', duration: 1 }, { note: 'G4', duration: 1 }, { note: 'Bb4', duration: 1 }],
};

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

const HomePage = () => {
  const sectionsRef = useRef([]);
  const chordIndexRef = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Section is entering the viewport
            const chordName = chordSequence[chordIndexRef.current];
            const chord = chordTonesMap[chordName];
  
            if (chord) {
              playChord(chord);
              chordIndexRef.current = (chordIndexRef.current + 1) % chordSequence.length;
            }
          } else if (!entry.isIntersecting && entry.boundingClientRect.top > 0) {
            // Section is exiting the viewport while scrolling up
            chordIndexRef.current = (chordIndexRef.current - 1 + chordSequence.length) % chordSequence.length;
            const chordName = chordSequence[chordIndexRef.current];
            const chord = chordTonesMap[chordName];
  
            if (chord) {
              playChord(chord);
            }
          }
        });
      },
      {
        threshold: 0.2, // Adjust this value to determine when a section is "in view"
      }
    );
  
    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });
  
    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <Container>
      <HeroSection />
      <ClientListSimple ref={(el) => (sectionsRef.current[1] = el)} />
      <SubSection title={<>Selected<br /> Projects</>} ref={(el) => (sectionsRef.current[2] = el)} />
      <FeatureProjectResRadio2Section ref={(el) => (sectionsRef.current[3] = el)} />
      <FeatureProjectLiahSection ref={(el) => (sectionsRef.current[4] = el)} />
      <FeatureProjectSwmaSection ref={(el) => (sectionsRef.current[5] = el)} />
      <Spacer />
      <FeatureProjectLagerhausSection ref={(el) => (sectionsRef.current[6] = el)} />
      <SubSection title={'Arts & Culture'} ref={(el) => (sectionsRef.current[7] = el)}>
        Collaborating with experimental design influencers pushes my creativity
        and often the limits of technology.
      </SubSection>
      <div className='gradient gradient--collision-in'></div>
      <FeatureProjectCollisionsSection ref={(el) => (sectionsRef.current[8] = el)} />
      <div className='gradient gradient--collision-out'></div>
      <Spacer />
      <FeatureProjectFourthGardenSection ref={(el) => (sectionsRef.current[9] = el)} />
      <Spacer />
      <FeatureProjectNaivesAndVisionariesSection ref={(el) => (sectionsRef.current[10] = el)} />
      <FeatureProjectEdmtSection ref={(el) => (sectionsRef.current[11] = el)} />
      <div className='gradient gradient--contact-in'></div>
      <ContactSection ref={(el) => (sectionsRef.current[12] = el)} />
    </Container>
  );
};


export default HomePage