import * as Tone from 'tone';
import cloudSequence from './assets/cloudSequence.json';
import { sameRouteTone } from './audio.config';
import { routes } from './slideInRoutes';

let synth: Tone.PolySynth = null;
let sequence: Tone.Sequence = null;
export const initAudio = () => {
  synth = new Tone.PolySynth().toDestination();

  sequence = new Tone.Sequence((time, note) => {
    synth.triggerAttackRelease(note.name, note.duration, time, note.velocity);
  }, cloudSequence.tracks[0].notes).start(0);

  console.log('Synth Initialized');
};

export const playToneAtRoute = (key?: string) => {
  const selectedRoute = Object.values(routes).find(
    (route) => route.key === key,
  );
  const tone = selectedRoute ? selectedRoute.tone : sameRouteTone;

  synth.triggerAttackRelease(tone.note, tone.duration);
};

/* definitely fucked up instancing */
export const playTheme = () => {
  Tone.Transport.start();
};
export const pauseTheme = () => {
  Tone.Transport.stop();
};
