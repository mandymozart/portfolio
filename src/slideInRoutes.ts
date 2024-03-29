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

export interface SlideInRoute {
  key: SlideInRouteName;
  label?: string;
  type: SlideInRouteType;
  variant?: SlideInRouteVariant;
  tone: SynthTone;
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
    tone: {
      note: 'B#2',
      duration: 0.3,
    },
  },
  IMPRINT: {
    key: SlideInRouteName.IMPRINT,
    label: 'Imprint',
    type: SlideInRouteType.STATIC,
    tone: { note: 'F#3', duration: 0.05 },
    variant: SlideInRouteVariant.FOOTER,
  },
  PRIVACY: {
    key: SlideInRouteName.PRIVACY,
    label: 'Privacy Policy',
    type: SlideInRouteType.STATIC,
    tone: { note: 'F3', duration: 0.05 },
    variant: SlideInRouteVariant.FOOTER,
  },
  ATTRIBUTIONS: {
    key: SlideInRouteName.ATTRIBUTIONS,
    label: 'Attributions',
    type: SlideInRouteType.STATIC,
    tone: { note: 'E3', duration: 0.05 },
    variant: SlideInRouteVariant.FOOTER,
  },
  PROJECTS: {
    key: SlideInRouteName.PROJECTS,
    label: 'Work',
    type: SlideInRouteType.STATIC,
    tone: { note: 'F4', duration: 0.05 },
    variant: SlideInRouteVariant.DEFAULT,
  },
  ABOUT: {
    key: SlideInRouteName.ABOUT,
    label: 'About',
    type: SlideInRouteType.STATIC,
    tone: { note: 'G#4', duration: 0.05 },
    variant: SlideInRouteVariant.DEFAULT,
  },
  PROJECT: {
    key: SlideInRouteName.PROJECT,
    type: SlideInRouteType.STATIC,
    variant: SlideInRouteVariant.DEFAULT,
    tone: { note: 'A#3', duration: 0.2 },
    requiredParams: ['uid'],
  },
};
