import { Timecode } from 'smpte-timecode';

export enum Language {
  ENGLISH = 'en-US',
  GERMAN = 'de-DE',
}

export enum CustomType {
  PARTNER = 'partner',
  CLIENT = 'client',
  PROJECT = 'project',
  SKILL = 'skill',
  METHOD = 'method',
  ROLE = 'role',
}

export enum LinkType {
  DOCUMENT = 'Document',
  WEB = 'Web',
}

interface Link {
  tags?: string[];
  lang?: Language;
  slug?: string;
  /* ISO Date */
  first_publication_date?: string;
  last_publication_date?: string;
  uid?: string;
  isBroken?: false;
  link_type: LinkType;
}

export interface WebLink extends Link {
  url: string;
  target: string;
  link_type: LinkType.WEB;
}

export interface DocumentLink extends Link {
  id: string;
  type: CustomType;
  link_type: LinkType.DOCUMENT;
}

export interface PartnerLink {
  partner: DocumentLink;
}
export interface SkillLink {
  skill: DocumentLink;
}

export interface TranscriptCue {
  in: Timecode;
  out?: Timecode;
  text: string;
  lang?: Language;
}

export interface ImageEdit {
  x: number;
  y: number;
  zoom: number;
  background: string | 'transparent';
}

export interface ImageDimensions {
  width: number;
  height: number;
}

export interface Image {
  dimensions: ImageDimensions;
  alt: string | null;
  copyright: string | null;
  url: string;
  id: string;
  edit: ImageEdit;
}

export interface ResponsiveImage {
  desktop: Record<string, unknown>;
  mobile: Record<string, unknown>;
  image: Image;
}

export interface RichTextBlock {
  type: string;
  text: string;
  spans: Array<unknown>;
  direction: string;
}

export interface RoleData {
  name: string;
}
export interface MethodData {
  name: string;
  years: number;
  logo?: Image;
}
export interface SkillData {
  name: string;
  years: number;
  logo: Image;
}
export interface CollaboratorData {
  name: string;
  employees: number;
  logo: Image;
  description: string;
  link: WebLink;
}

export interface ClientData {
  name: string;
  logo: Image;
  link: WebLink;
}

export interface ProjectData {
  name: string;
  description: Array<RichTextBlock>;
  industry: string;
  type: string;
  link: WebLink | null;
  fromDate: string;
  toDate: string;
  video_id: string | null;
  transcript: Array<TranscriptCue>;
  images: Array<ResponsiveImage>;
  skills: Array<SkillLink>;
  partners: Array<PartnerLink>;
  methods: Array<string>;
  roles: Array<string>;
}

interface CustomDocument {
  id: string;
  uid: string;
  type: CustomType;
  url: string | null;
  href: string | '';
  tags: Array<string> | [];
  first_publication_date: string | null;
  last_publication_date: string | null;
  slugs: Array<string>;
  linked_documents: Array<DocumentLink> | [];
  lang: Language;
  alternate_languages: Array<Language>; // ?
}

export interface ProjectDocument extends CustomDocument {
  type: CustomType.PROJECT;
  data: ProjectData;
}
export interface PartnerDocument extends CustomDocument {
  type: CustomType.PARTNER | CustomType.CLIENT;
  data: CollaboratorData | ClientData;
}
export interface SkillDocument extends CustomDocument {
  type: CustomType.SKILL;
  data: SkillData;
}
export interface MethodDocument extends CustomDocument {
  type: CustomType;
  data: MethodData;
}
export interface RoleDocument extends CustomDocument {
  type: CustomType.ROLE;
  data: RoleData;
}
