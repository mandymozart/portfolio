import { SynthTone } from '../../slideInRoutes';

enum SectionType {
  EMPTY = 'empty',
  DEFAULT = 'default',
  FEATURE = 'feature',
}
type Section = {
  key?: string;
  type: SectionType;
  pages: number;
  range?: [number, number]; // [start, end] Theatre.js
  tone?: SynthTone;
  backgroundColor?: string;
  color?: string;
};
export const getSectionPageCount = () => {
  return sections.reduce((acc, section) => acc + section.pages, 0);
};

export function getSectionByKey(key: string): Section | undefined {
  return sections.find((section) => section.key === key);
}

export const sections: Section[] = [
  {
    key: 'intro',
    type: SectionType.EMPTY,
    pages: 4,
  },
  {
    key: 'hero',
    type: SectionType.DEFAULT,
    pages: 1,
  },
  {
    key: 'process',
    type: SectionType.DEFAULT,
    pages: 1,
  },
  {
    key: 'selected-projects',
    type: SectionType.DEFAULT,
    pages: 1,
  },
  {
    key: 'resradio-2',
    type: SectionType.FEATURE,
    pages: 2,
  },
  {
    key: 'liah',
    type: SectionType.FEATURE,
    pages: 2,
  },
  {
    key: 'swma',
    type: SectionType.FEATURE,
    pages: 2,
  },
  {
    key: 'lagerhaus',
    type: SectionType.FEATURE,
    pages: 2,
  },
  {
    key: 'arts-culture',
    type: SectionType.DEFAULT,
    pages: 1,
    backgroundColor: 'var(--perfume)',
    color: 'var(--primary)',
  },
  {
    key: 'collisions-munich',
    type: SectionType.FEATURE,
    pages: 2,
    backgroundColor: '#373f30',
  },
  {
    key: 'fourth-garden',
    type: SectionType.FEATURE,
    pages: 2,
  },
  {
    key: 'naivesandvisionaries',
    type: SectionType.FEATURE,
    pages: 2,
  },
  {
    key: 'games',
    type: SectionType.DEFAULT,
    pages: 1,
  },
  {
    key: 'dogheartcity',
    type: SectionType.FEATURE,
    pages: 2,
  },
  {
    key: 'edmt',
    type: SectionType.FEATURE,
    pages: 2,
  },
  {
    key: 'services',
    type: SectionType.DEFAULT,
    pages: 1,
    backgroundColor: 'var(--aero-blue)',
    color: 'var(--background)',
  },
  {
    key: 'contact',
    type: SectionType.DEFAULT,
    pages: 1,
  },
];
