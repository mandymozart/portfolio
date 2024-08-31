import { SynthTone } from './routes';
// paramConfig.js
export const paramConfig = {
  synth: {
    oscillatorType: {
      type: 'select',
      options: ['sine', 'triangle', 'square', 'sawtooth'],
      label: 'Oscillator Type'
    },
    attack: {
      type: 'range',
      min: 0,
      max: 2,
      step: 0.01,
      label: 'Attack'
    },
    decay: {
      type: 'range',
      min: 0,
      max: 2,
      step: 0.01,
      label: 'Decay'
    },
    sustain: {
      type: 'range',
      min: 0,
      max: 1,
      step: 0.01,
      label: 'Sustain'
    },
    release: {
      type: 'range',
      min: 0,
      max: 10,
      step: 0.01,
      label: 'Release'
    }
  },
  filter: {
    filterFrequency: {
      type: 'range',
      min: 100,
      max: 5000,
      step: 1,
      label: 'Filter Frequency'
    },
    filterType: {
      type: 'select',
      options: ['lowpass', 'highpass', 'bandpass', 'notch'],
      label: 'Filter Type'
    }
  },
  reverb: {
    reverbDecay: {
      type: 'range',
      min: 0.1,
      max: 10,
      step: 0.1,
      label: 'Reverb Decay'
    },
    reverbWet: {
      type: 'range',
      min: 0,
      max: 1,
      step: 0.01,
      label: 'Reverb Wet'
    }
  },
  delay: {
    delayTime: {
      type: 'range',
      min: 0.01,
      max: 1,
      step: 0.01,
      label: 'Delay Time'
    },
    delayFeedback: {
      type: 'range',
      min: 0,
      max: 1,
      step: 0.01,
      label: 'Delay Feedback'
    }
  },
  chorus: {
    chorusFrequency: {
      type: 'range',
      min: 0.1,
      max: 10,
      step: 0.1,
      label: 'Chorus Frequency'
    },
    chorusDelayTime: {
      type: 'range',
      min: 0,
      max: 5,
      step: 0.1,
      label: 'Chorus Delay Time'
    },
    chorusDepth: {
      type: 'range',
      min: 0,
      max: 1,
      step: 0.01,
      label: 'Chorus Depth'
    }
  }
};


export const sameRouteTone: SynthTone = {
  note: 'C2',
  duration: 0.02,
};
