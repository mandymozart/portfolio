import * as Tone from 'tone';
import { sameRouteTone } from './audio.config';
import preset from './preset.json';
import presetSharp from './presetSharp.json';
import { routes, SynthTone } from './routes';

const VOLUME_BED = -36;
const VOLUME_SYNTH = -12;
const MAX_DETUNE = 300; // Max detune value in cents (3 semitones)
const DETUNE_SENSITIVITY = 0.2; // Sensitivity factor for detune based on mouse speed

export let synthParams: any = preset; // Default to day mode preset

let synth: Tone.PolySynth = null;
let sequence: Tone.Sequence = null;
let gain: Tone.Gain = null;
let filter: Tone.Filter = null;
let reverb: Tone.Reverb = null;
let chorus: Tone.Chorus = null;
let delay: Tone.FeedbackDelay = null;

let ambient: Tone.Player = null; // To hold either arctic wind or owl hoots

let lastMouseY = 0;
let lastMouseTime = 0;

let isMuted = false; 
let isPlaying = false; 
let isAudioContextStarted = false;

function startAudioContextWithPromise() {
  return new Promise((resolve) => {
    if (!isAudioContextStarted) {
      Tone.start().then(() => {
        isAudioContextStarted = true;
        console.log('Audio context started.');
        resolve();
      });
    } else {
      resolve();
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
  // Choose preset based on night mode
  synthParams = isNightMode ? presetSharp : preset;

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
  delay = new Tone.FeedbackDelay(synthParams.delayTime, synthParams.delayFeedback);
  reverb = new Tone.Reverb({ decay: synthParams.reverbDecay, wet: synthParams.reverbWet });
  chorus = new Tone.Chorus(synthParams.chorusFrequency, synthParams.chorusDelayTime, synthParams.chorusDepth);

  const vol = new Tone.Volume(VOLUME_SYNTH);

  synth.chain(filter, delay, chorus, reverb, gain, vol, Tone.Destination);

  if (ambient) {
    ambient.stop();
    ambient.dispose();  // Properly dispose of the old player to free resources
  }

  ambient = new Tone.Player(isNightMode ? '/audio/owl-hoots-and-distant-dog.mp3' : '/audio/wind-howl-interior.mp3').toDestination();
  ambient.loop = true;
  await Tone.loaded();
  ambient.volume.value = isNightMode ? 0 : VOLUME_BED; // Start audible
  ambient.start();
  
  document.addEventListener('mousemove', handleMouseMove);

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
      wet: synthParams.reverbWet,  // Update reverb wet
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
      frequency: synthParams.chorusFrequency,  // Update chorus parameters
      delayTime: synthParams.chorusDelayTime,
      depth: synthParams.chorusDepth,
    });
  }
};

export const playChord = (chord: SynthTone[]) => {
  if (isMuted) return;
  console.log(isMuted)
  if (isPlaying) return;
  isPlaying = true;

  const durationInMs = Tone.Time(chord[0].duration).toMilliseconds();

  synth.triggerAttackRelease(
    chord.map(t => t.note),
    chord[0].duration
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

  playChord(chord)
};

export const playTheme = () => {
  Tone.Transport.start();
};

export const pauseTheme = () => {
  Tone.Transport.stop();
};

export const playToneAtRoute = playChordAtRoute;

function handleMouseMove(event: MouseEvent) {
  const currentTime = performance.now();
  const deltaY = event.clientY - lastMouseY;
  const deltaTime = currentTime - lastMouseTime;

  // Calculate speed (pixels per millisecond)
  const speed = deltaY / deltaTime;

  // Determine detune amount
  let detuneAmount = speed * DETUNE_SENSITIVITY * MAX_DETUNE;

  // Clamp detune amount within the desired range
  detuneAmount = Math.max(-MAX_DETUNE, Math.min(MAX_DETUNE, detuneAmount));

  // Apply detune to the synth
  if (synth) {
    synth.set({ detune: detuneAmount });
  }

  // Update last mouse position and time
  lastMouseY = event.clientY;
  lastMouseTime = currentTime;
}
