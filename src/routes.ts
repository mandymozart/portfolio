import { Frequency, Time } from 'tone/build/esm/core/type/Units';

export interface IRouteParams {
  [key: string]: string | number | boolean;
}

export enum IRouteKey {
  HOME = 'home',
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
  WIND_INTERIOR_HOWL = 'wind-interior-howl',
}

export interface IRoute {
  key: IRouteKey;
  label?: string;
  tone: SynthTone | SynthTone[];
  audioBedKey: AudioBedKey;
  path?: string; // this is used to relink to the next page router if required
  slug: string;  // New slug attribute
  params?: IRouteParams;
  requiredParams?: string[];
}

interface IRoutesMap {
  [key: string]: IRoute;
}

export const routes: IRoutesMap = {
  HOME: {
    key: IRouteKey.HOME,
    label: 'Home',
    tone: [
      { note: 'D3', duration: 1 },
      { note: 'A3', duration: 1 },
      { note: 'E5', duration: 1 },
    ],
    audioBedKey: AudioBedKey.ARCTIC_WIND,
    slug: '/', // Root path
  },
  IMPRINT: {
    key: IRouteKey.IMPRINT,
    label: 'Imprint',
    tone: [
      { note: 'E3', duration: 1 },
      { note: 'B3', duration: 1 },
      { note: 'E4', duration: 1 },
    ],
    audioBedKey: AudioBedKey.WIND_INTERIOR_HOWL,
    slug: '/imprint',
  },
  PRIVACY: {
    key: IRouteKey.PRIVACY,
    label: 'Privacy Policy',
    tone: [
      { note: 'F3', duration: 1 },
      { note: 'C4', duration: 1 },
      { note: 'F4', duration: 1 },
    ],
    audioBedKey: AudioBedKey.WIND_INTERIOR_HOWL,
    slug: '/privacy',
  },
  ATTRIBUTIONS: {
    key: IRouteKey.ATTRIBUTIONS,
    label: 'Attributions',
    tone: [
      { note: 'G3', duration: 1 },
      { note: 'D4', duration: 1 },
      { note: 'G4', duration: 1 },
    ],
    audioBedKey: AudioBedKey.ARCTIC_WIND,
    slug: '/attributions',
  },
  PROJECTS: {
    key: IRouteKey.PROJECTS,
    label: 'Work',
    tone: [
      { note: 'A3', duration: 1 },
      { note: 'E4', duration: 1 },
      { note: 'A4', duration: 1 },
    ],
    audioBedKey: AudioBedKey.WIND_INTERIOR_HOWL,
    slug: '/projects',
  },
  ABOUT: {
    key: IRouteKey.ABOUT,
    label: 'About',
    tone: [
      { note: 'B3', duration: 1 },
      { note: 'F#4', duration: 1 },
      { note: 'B4', duration: 1 },
    ],
    audioBedKey: AudioBedKey.ARCTIC_WIND,
    slug: '/about',
  },
  PROJECT: {
    key: IRouteKey.PROJECT,
    tone: [
      { note: 'C4', duration: 1 },
      { note: 'G4', duration: 1 },
      { note: 'C5', duration: 1 },
    ],
    requiredParams: ['uid'],
    audioBedKey: AudioBedKey.WIND_INTERIOR_HOWL,
    slug: '/project/:uid', // Slug with dynamic parameter
  },
};
