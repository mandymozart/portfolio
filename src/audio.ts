import * as Tone from 'tone';
import cloudSequence from './assets/cloudSequence.json';
import { sameRouteTone } from './audio.config';
import { routes } from './slideInRoutes';

let synth: Tone.PolySynth = null;
let sequence: Tone.Sequence = null;
let vol: number = 0.5;
let gain: Tone.Gain = null;

export const initAudio = () => {
  synth = new Tone.PolySynth().toDestination();
  gain = new Tone.Gain(0.1).toDestination();
  const vol = new Tone.Volume(-12).toDestination();
  // const osc = new Tone.Oscillator().connect(vol).start();

  sequence = new Tone.Sequence((time, note) => {
    synth
      .connect(vol)
      .triggerAttackRelease(note.name, note.duration, time, note.velocity);
  }, cloudSequence.tracks[0].notes);

  console.log('Synth Initialized');
};

export const playToneAtRoute = (key?: string) => {
  const selectedRoute = Object.values(routes).find(
    (route) => route.key === key,
  );
  const tone = selectedRoute ? selectedRoute.tone : sameRouteTone;

  synth.triggerAttackRelease(tone.note, tone.duration);
};

// export const setVolume = (volume: number) => {
//   Tone.Volume.value = volume;
// };

/* definitely fucked up instancing */
export const playTheme = () => {
  Tone.Transport.start();
};
export const pauseTheme = () => {
  Tone.Transport.stop();
};
