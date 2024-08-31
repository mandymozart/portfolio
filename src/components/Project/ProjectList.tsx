'use client';
import styled from '@emotion/styled';
import { playChord } from '../../audio.js';
import docs from '../../data/index.js';
import { SynthTone } from '../../routes.js';
import { BREAKPOINT_SM } from './../../../config';
import ProjectItem from './ProjectItem.js';

const chordSequence = [
  'Dm', 'C', 'Eb', 'Dm', 'Em', 'F', 'E', 'F', 'G', 'Am', 
  'Bb', 'Dm', 'Dmadd2', 'Dm', 'C', 'Eb', 'D', 'Em', 'F', 
  'Em', 'F', 'G', 'Am', 'Bb', 'Dm'
];

const chordTonesMap: { [chordName: string]: SynthTone[] } = {
  'Dm': [
    { note: 'D4', duration: 1 }, 
    { note: 'F4', duration: 1 }, 
    { note: 'A4', duration: 1 }
  ],
  'C': [
    { note: 'C4', duration: 1 }, 
    { note: 'E4', duration: 1 }, 
    { note: 'G4', duration: 1 }
  ],
  'Eb': [
    { note: 'Eb4', duration: 1 }, 
    { note: 'G4', duration: 1 }, 
    { note: 'Bb4', duration: 1 }
  ],
  'Em': [
    { note: 'E4', duration: 1 }, 
    { note: 'G4', duration: 1 }, 
    { note: 'B4', duration: 1 }
  ],
  'F': [
    { note: 'F4', duration: 1 }, 
    { note: 'A4', duration: 1 }, 
    { note: 'C5', duration: 1 }
  ],
  'E': [
    { note: 'E4', duration: 1 }, 
    { note: 'G#4', duration: 1 }, 
    { note: 'B4', duration: 1 }
  ],
  'G': [
    { note: 'G4', duration: 1 }, 
    { note: 'B4', duration: 1 }, 
    { note: 'D5', duration: 1 }
  ],
  'Am': [
    { note: 'A4', duration: 1 }, 
    { note: 'C5', duration: 1 }, 
    { note: 'E5', duration: 1 }
  ],
  'Bb': [
    { note: 'Bb4', duration: 1 }, 
    { note: 'D5', duration: 1 }, 
    { note: 'F5', duration: 1 }
  ],
  'D': [
    { note: 'D4', duration: 1 }, 
    { note: 'F#4', duration: 1 }, 
    { note: 'A4', duration: 1 }
  ],
  'Dmadd2': [
    { note: 'D4', duration: 1 }, 
    { note: 'E4', duration: 1 }, 
    { note: 'F4', duration: 1 }, 
    { note: 'A4', duration: 1 }
  ],
};


const Container = styled.div`
  position: relative;
  max-width: var(--content-width);
  margin: 0 auto;
  h2 {
    padding: 8rem var(--grid-padding) 16rem var(--grid-padding);
    font-size: 12rem;
    color: var(--aero-blue);
    @media (max-width: ${BREAKPOINT_SM}) {
      font-size: 4rem;
      padding: 2rem var(--grid-padding) 2rem var(--grid-padding);
    }
    position: sticky;
    top: 6rem;
    z-index: -1;
  }
  .list {
    padding: var(--grid-padding);
    transition: all 0.8s ease-in-out;
    > div {
      padding: 2rem 0;
      border-bottom: 1px solid;
    }
  }
`;

let chordIndex = 0;
let isPlaying = false;

const ProjectList = () => {
  const handleHover = () => {
    if (isPlaying) return; // Prevent overlapping triggers

    isPlaying = true;
    const chordName = chordSequence[chordIndex];
    const chord = chordTonesMap[chordName];
    playChord(chord);

    // Move to the next chord in the sequence
    chordIndex = (chordIndex + 1) % chordSequence.length;

    // Reset the isPlaying flag after a delay (e.g., 500ms)
    setTimeout(() => {
      isPlaying = false;
    }, 500);
  };

  return (
    <Container>
      <h2>Projects</h2>
      <div className="list">
        {docs.projects.map((project, index) =>
          <ProjectItem
            role="listitem"
            key={index}
            onMouseEnter={handleHover}
            index={index}
            className="listitem"
            project={project}
          />,
        )}
      </div>
    </Container>
  );
};

export default ProjectList;
