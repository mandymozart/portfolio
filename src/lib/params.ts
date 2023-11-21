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
		'As a dedicated web developer I make projects possible. With a communication design background it is my focus is to build UI/UX on top of legacy systems as well as state of the art frameworks and JAMStacks. If applicable I use experiences I collected as CTO with design thinking and agile methodologies to built sustainable and responsible software. I have a passion for experimental interfaces, real time tools and feminist design theory and art.',
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
		{
			platform: Platform.Website,
			link: 'https://www.mandymozart.com'
		}
	], 
	skills: [
		"Svelte","React","ReactNative","Angular","Threejs","TypeScript","Dart","Flutter","PixiJS"
	]
};

export const EXPERIENCES: ExperiencePageParams = {
	title: 'Experiences',
	items: MY_EXPERIENCES
};

export const RESUME: ResumePageParams = {
	title: 'Resumé',
	link: 'https://docs.google.com/document/d/1bN_f-HRh0CEjE9PzOSdaPVhWmVmaSXegHH65dNL9TIE/edit?usp=sharing'
};
