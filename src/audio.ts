import * as Tone from 'tone';
import cloudSequence from './assets/cloudSequence.json';
import { sameRouteTone } from './audio.config';
import preset from './preset.json';
import { AudioBedKey, routes, SynthTone } from './slideInRoutes';

const VOLUME_BED = -42;
const VOLUME_SYNTH = -24;
export const synthParams: any = {
  oscillatorType: preset.oscillatorType as any,
  attack: preset.attack,
  decay: preset.decay,
  sustain: preset.sustain,
  release: preset.release,
  filterFrequency: preset.filterFrequency,
  filterType: preset.filterType as any,
  reverbDecay: preset.reverbDecay,
  delayTime: preset.delayTime,
  delayFeedback: preset.delayFeedback,
};

let synth: Tone.PolySynth = null;
let sequence: Tone.Sequence = null;
let gain: Tone.Gain = null;
let filter: Tone.Filter = null;
let reverb: Tone.Reverb = null;
let delay: Tone.FeedbackDelay = null;

let arcticWind: Tone.Player = null;
let windHowl: Tone.Player = null;
let currentPlayingAudio: Tone.Player = null; // Track the currently playing audio

export const initAudio = async () => {
  // Initialize the synth
  synth = new Tone.PolySynth(Tone.Synth, {
    oscillator: {
      type: synthParams.oscillatorType,
    },
    envelope: {
      attack: synthParams.attack,
      decay: synthParams.decay,
      sustain: synthParams.sustain,
      release: synthParams.release,
    },
  });

  gain = new Tone.Gain(0.1);
  filter = new Tone.Filter(synthParams.filterFrequency, synthParams.filterType);
  reverb = new Tone.Reverb({ decay: synthParams.reverbDecay, wet: 0.7 });
  delay = new Tone.FeedbackDelay(synthParams.delayTime, synthParams.delayFeedback);

  const vol = new Tone.Volume(VOLUME_SYNTH);

  synth.chain(filter, delay, reverb, gain, vol, Tone.Destination);

  sequence = new Tone.Sequence((time, note) => {
    synth.triggerAttackRelease(note.name, note.duration, time, note.velocity);
  }, cloudSequence.tracks[0].notes);

  // Initialize the audio players
  arcticWind = new Tone.Player('/audio/arctic-wind.mp3').toDestination();
  windHowl = new Tone.Player('/audio/wind-howl-interior.mp3').toDestination();

  // Loop the audio files
  arcticWind.loop = true;
  windHowl.loop = true;

  // Wait for all buffers to load
  await Tone.loaded();

  // Set initial volumes and start the players
  arcticWind.volume.value = VOLUME_BED; // Start audible
  windHowl.volume.value = -Infinity; // Start silent

  arcticWind.start();
  windHowl.start();

  // Set the current playing audio to arctic wind
  currentPlayingAudio = arcticWind;

  console.log('Synth and audio players initialized and loaded');
};

export const updateSynthParams = (newParams: Partial<typeof synthParams>): void => {
  Object.assign(synthParams, newParams);
  
  if (synth) {
    synth.set({
      oscillator: {
        type: synthParams.oscillatorType,
      },
      envelope: {
        attack: synthParams.attack,
        decay: synthParams.decay,
        sustain: synthParams.sustain,
        release: synthParams.release,
      },
    });
  }
  
  if (filter) {
    filter.set({
      frequency: synthParams.filterFrequency,
      type: synthParams.filterType,
    });
  }
  
  if (reverb) {
    reverb.set({
      decay: synthParams.reverbDecay,
      wet: 0.3,
    });
  }
  
  if (delay) {
    delay.set({
      delayTime: synthParams.delayTime,
      feedback: synthParams.delayFeedback,
    });
  }
};

export const playChordAtRoute = (key?: string) => {
  const selectedRoute = Object.values(routes).find(
    (route) => route.key === key,
  );
  let chord: SynthTone[] = [];

  if (selectedRoute && Array.isArray(selectedRoute.tone)) {
    chord = selectedRoute.tone;
  } else if (selectedRoute) {
    chord = [selectedRoute.tone as SynthTone];
  } else {
    chord = [sameRouteTone];
  }

  synth.triggerAttackRelease(
    chord.map(t => t.note),
    chord[0].duration
  );

  // Determine the audio to play based on the audioBedKey
  let nextAudio: Tone.Player | null = null;

  if (selectedRoute?.audioBedKey === AudioBedKey.WIND_INTERIOR_HOWL) {
    nextAudio = windHowl;
  } else if (selectedRoute?.audioBedKey === AudioBedKey.ARCTIC_WIND) {
    nextAudio = arcticWind;
  }

  // Fade between audio files if necessary
  if (nextAudio && nextAudio !== currentPlayingAudio) {
    currentPlayingAudio?.volume.rampTo(-Infinity, 2); // Fade out the current audio over 2 seconds
    nextAudio.volume.rampTo(VOLUME_BED, 2); // Fade in the next audio over 2 seconds
    currentPlayingAudio = nextAudio; // Update the current playing audio
  }
};

export const playTheme = () => {
  Tone.Transport.start();
};

export const pauseTheme = () => {
  Tone.Transport.stop();
};


export const playToneAtRoute = playChordAtRoute