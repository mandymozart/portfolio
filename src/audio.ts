import { Volume } from 'Tone/component/channel/Volume';
import { Filter } from 'Tone/component/filter/Filter';
import { Gain } from 'Tone/core/context/Gain';
import { ToneAudioBuffer } from 'Tone/core/context/ToneAudioBuffer';
import { getContext, start } from 'Tone/core/Global';
import { Time } from 'Tone/core/type/Time';
import { Chorus } from 'Tone/effect/Chorus';
import { FeedbackDelay } from 'Tone/effect/FeedbackDelay';
import { Reverb } from 'Tone/effect/Reverb';
import { Sequence } from 'Tone/event/Sequence';
import { PolySynth } from 'Tone/instrument/PolySynth';
import { Synth } from 'Tone/instrument/Synth';
import { Player } from 'Tone/source/buffer/Player';

import { sameRouteTone } from './audio.config';
import preset from './preset.json';
import presetSharp from './presetSharp.json';
import { routes, SynthTone } from './routes';

export interface ParamConfig {
  label: string;
  type: 'range' | 'select';
  min?: number;
  max?: number;
  step?: number;
  options?: string[];
}

export interface Config {
  [section: string]: {
    [paramName: string]: ParamConfig;
  };
}

const VOLUME_BED = -36;
const VOLUME_SYNTH = -12;
const MAX_DETUNE = 300; // Max detune value in cents (3 semitones)
const DETUNE_SENSITIVITY = 0.2; // Sensitivity factor for detune based on mouse speed

export let synthParams: any = preset; // Default to day mode preset

let synth: PolySynth<Synth> = null;
let sequence: Sequence = null;
let gain: Gain = null;
let filter: Filter = null;
let reverb: Reverb = null;
let chorus: Chorus = null;
let delay: FeedbackDelay = null;

let ambient: Player = null; // To hold either arctic wind or owl hoots

let lastMouseY = 0;
let lastMouseTime = 0;

let isMuted = false;
let isPlaying = false;
let isAudioContextStarted = false;

function startAudioContextWithPromise() {
  return new Promise((resolve) => {
    if (!isAudioContextStarted) {
      start().then(() => {
        isAudioContextStarted = true;
        console.log('Audio context started.');
        resolve(null);
      });
    } else {
      resolve(null);
    }
  });
}

document.addEventListener('click', startAudioContextWithPromise);
document.addEventListener('touchstart', startAudioContextWithPromise);
document.addEventListener('keypress', startAudioContextWithPromise);

export const toggleMute = () => {
  isMuted = !isMuted;
};

export const isAudioMuted = () => isMuted;

export const initAudio = async (isNightMode: boolean) => {
  synthParams = isNightMode ? presetSharp : preset;

  synth = new PolySynth(Synth, {
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

  gain = new Gain(0.1);
  filter = new Filter(synthParams.filterFrequency, synthParams.filterType);
  delay = new FeedbackDelay(synthParams.delayTime, synthParams.delayFeedback);
  reverb = new Reverb({
    decay: synthParams.reverbDecay,
    wet: synthParams.reverbWet,
  });
  chorus = new Chorus(
    synthParams.chorusFrequency,
    synthParams.chorusDelayTime,
    synthParams.chorusDepth,
  );

  const vol = new Volume(VOLUME_SYNTH);

  synth.chain(
    filter,
    delay,
    chorus,
    reverb,
    gain,
    vol,
    getContext().destination,
  );

  if (ambient) {
    ambient.stop();
    ambient.dispose(); // Properly dispose of the old player to free resources
  }

  ambient = new Player(
    isNightMode
      ? '/audio/owl-hoots-and-distant-dog.mp3'
      : '/audio/wind-howl-interior.mp3',
  ).toDestination();
  ambient.loop = true;
  await ToneAudioBuffer.loaded();
  ambient.volume.value = isNightMode ? 0 : VOLUME_BED; // Start audible
  if (ambient.state === 'started') {
    ambient.stop();
  }
  ambient.start();
  ambient.start();

  document.addEventListener('mousemove', handleMouseMove);

  console.log('Synth and audio players initialized and loaded');
};

export const updateSynthParams = (
  newParams: Partial<typeof synthParams>,
): void => {
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
      wet: synthParams.reverbWet, // Update reverb wet
    });
  }

  if (delay) {
    delay.set({
      delayTime: synthParams.delayTime,
      feedback: synthParams.delayFeedback,
    });
  }

  if (chorus) {
    chorus.set({
      frequency: synthParams.chorusFrequency, // Update chorus parameters
      delayTime: synthParams.chorusDelayTime,
      depth: synthParams.chorusDepth,
    });
  }
};

export const playChord = (chord: SynthTone[]) => {
  if (isMuted) return;
  console.log(isMuted);
  if (isPlaying) return;
  isPlaying = true;

  const durationInMs = Time(chord[0].duration).toMilliseconds();

  synth.triggerAttackRelease(
    chord.map((t) => t.note),
    chord[0].duration,
  );

  setTimeout(() => {
    isPlaying = false;
  }, durationInMs);
};

export const playChordAtRoute = (key?: string) => {
  if (isMuted) return;
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

  playChord(chord);
};

export const playTheme = () => {
  getContext().transport.start();
};

export const pauseTheme = () => {
  getContext().transport.stop();
};

export const playToneAtRoute = playChordAtRoute;

function handleMouseMove(event: MouseEvent) {
  const currentTime = performance.now();
  const deltaY = event.clientY - lastMouseY;
  const deltaTime = currentTime - lastMouseTime;

  const speed = deltaY / deltaTime;

  let detuneAmount = speed * DETUNE_SENSITIVITY * MAX_DETUNE;

  detuneAmount = Math.max(-MAX_DETUNE, Math.min(MAX_DETUNE, detuneAmount));

  if (synth) {
    synth.set({ detune: detuneAmount });
  }

  lastMouseY = event.clientY;
  lastMouseTime = currentTime;
}
