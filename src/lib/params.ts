import MY_EXPERIENCES from './experiences.params';
import {
	Platform,
	type ExperiencePageParams,
	type HomePageParams,
	type ResumePageParams
} from './types';
import { Icons } from './utils';

export const TITLE_SUFFIX = 'Slick template with Svelte';

export const NavBar = {
	home: 'Home',
	personal: 'Projects',
	career: 'Experiences',
	resume: 'Resume',
};

export const getPlatfromIcon = (platform: Platform): Icons => {
	switch (platform) {
		case Platform.GitHub:
			return Icons.GitHub;
		case Platform.Linkedin:
			return Icons.LinkedIn;
		case Platform.StackOverflow:
			return Icons.StackOverflow;
		case Platform.Facebook:
			return Icons.Facebook;
		case Platform.Email:
			return Icons.Email;
		case Platform.Twitter:
			return Icons.Twitter;
		case Platform.Youtube:
			return Icons.Youtube;
	}
};

export const HOME: HomePageParams = {
	title: 'Home',
	name: 'Tilman',
	lastName: 'PORSCHÜTZ',
	description:
		'Frontend Developer, UI/UX Architect, Requirements Engineer',
	links: [
		{ platform: Platform.GitHub, link: 'https://github.com/mandymozart' },
		{
			platform: Platform.Linkedin,
			link: 'https://www.linkedin.com/mandy.mozart'
		},
		{
			platform: Platform.Email,
			link: 'mandymozart@viennastruggle.com'
		},
	]
};

export const EXPERIENCES: ExperiencePageParams = {
	title: 'Experiences',
	items: MY_EXPERIENCES
};

export const RESUME: ResumePageParams = {
	title: 'Resumé',
	item: ''
};
