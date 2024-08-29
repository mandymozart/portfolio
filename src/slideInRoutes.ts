import { Frequency, Time } from 'tone/build/esm/core/type/Units';

export interface SlideInRouteParams {
  [key: string]: string | number | boolean;
}

export enum SlideInRouteType {
  STATIC = 'static',
  ASYNC = 'async',
  ROOT = 'root', // doesn't actually exist in the routes map
}

export enum SlideInRouteVariant {
  DEFAULT = 'default',
  FOOTER = 'footer',
}
export enum SlideInRouteName {
  HOME = '',
  PRIVACY = 'privacy',
  IMPRINT = 'imprint',
  PROCESS = 'process',
  PROJECTS = 'projects',
  ATTRIBUTIONS = 'attributions',
  ABOUT = 'about',
  PROJECT = 'project',
}

export interface SynthTone {
  note: Frequency;
  duration: Time;
  time?: Time | undefined;
  velocity?: number | undefined;
}

export enum AudioBedKey {
  ARCTIC_WIND = 'arctic-wind',
  WIND_INTERIOR_HOWL = 'wind-interior-howl'
}

export interface SlideInRoute {
  key: SlideInRouteName;
  label?: string;
  type: SlideInRouteType;
  variant?: SlideInRouteVariant;
  tone: SynthTone | SynthTone[];
  audioBedKey: AudioBedKey;
  path?: string; // this is used to relink to the next page router if required
  params?: SlideInRouteParams;
  requiredParams?: string[];
}

interface SlideInRoutesMap {
  [key: string]: SlideInRoute;
}

export const routes: SlideInRoutesMap = {
  HOME: {
    key: SlideInRouteName.HOME,
    type: SlideInRouteType.ROOT,
    tone: [
      { note: 'D3', duration: 1 }, // Root of the Dorian mode
      { note: 'A3', duration: 1 }, // Perfect fifth
      { note: 'E5', duration: 1 }, // Octave
    ],
    audioBedKey: AudioBedKey.ARCTIC_WIND,
  },
  IMPRINT: {
    key: SlideInRouteName.IMPRINT,
    label: 'Imprint',
    type: SlideInRouteType.STATIC,
    tone: [
      { note: 'E3', duration: 1 }, // Second degree
      { note: 'B3', duration: 1 }, // Perfect fifth
      { note: 'E4', duration: 1 }, // Octave
    ],
    variant: SlideInRouteVariant.FOOTER,
    audioBedKey: AudioBedKey.WIND_INTERIOR_HOWL,
  },
  PRIVACY: {
    key: SlideInRouteName.PRIVACY,
    label: 'Privacy Policy',
    type: SlideInRouteType.STATIC,
    tone: [
      { note: 'F3', duration: 1 }, // Minor third in the Dorian mode
      { note: 'C4', duration: 1 }, // Perfect fifth
      { note: 'F4', duration: 1 }, // Octave
    ],
    variant: SlideInRouteVariant.FOOTER,
    audioBedKey: AudioBedKey.WIND_INTERIOR_HOWL,
  },
  ATTRIBUTIONS: {
    key: SlideInRouteName.ATTRIBUTIONS,
    label: 'Attributions',
    type: SlideInRouteType.STATIC,
    tone: [
      { note: 'G3', duration: 1 }, // Fourth degree
      { note: 'D4', duration: 1 }, // Perfect fifth
      { note: 'G4', duration: 1 }, // Octave
    ],
    variant: SlideInRouteVariant.FOOTER,
    audioBedKey: AudioBedKey.ARCTIC_WIND,
  },
  PROJECTS: {
    key: SlideInRouteName.PROJECTS,
    label: 'Work',
    type: SlideInRouteType.STATIC,
    tone: [
      { note: 'A3', duration: 1 }, // Fifth degree
      { note: 'E4', duration: 1 }, // Perfect fifth
      { note: 'A4', duration: 1 }, // Octave
    ],
    variant: SlideInRouteVariant.DEFAULT,
    audioBedKey: AudioBedKey.WIND_INTERIOR_HOWL,
  },
  ABOUT: {
    key: SlideInRouteName.ABOUT,
    label: 'About',
    type: SlideInRouteType.STATIC,
    tone: [
      { note: 'B3', duration: 1 }, // Sixth degree
      { note: 'F#4', duration: 1 }, // Perfect fifth
      { note: 'B4', duration: 1 }, // Octave
    ],
    variant: SlideInRouteVariant.DEFAULT,
    audioBedKey: AudioBedKey.ARCTIC_WIND,
  },
  PROJECT: {
    key: SlideInRouteName.PROJECT,
    type: SlideInRouteType.STATIC,
    variant: SlideInRouteVariant.DEFAULT,
    tone: [
      { note: 'C4', duration: 1 }, // Seventh degree (leading tone)
      { note: 'G4', duration: 1 }, // Perfect fifth
      { note: 'C5', duration: 1 }, // Octave
    ],
    requiredParams: ['uid'],
    audioBedKey: AudioBedKey.WIND_INTERIOR_HOWL,
  },
};
