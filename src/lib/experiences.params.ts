import Assets from './data/assets';
import { ContractType, type Experience } from './types';

const MY_EXPERIENCES: Array<Experience> = [
	{
		slug: 'open-sourcer',
		company: 'Self-employed',
		description: 'Creating awesome tools for developers.',
		contract: ContractType.SelfEmployed,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date() },
		name: 'Open Source Developer',
		color: '#ffffff',
		links: [],
		logo: Assets.Unknown,
		shortDescription: ''
	},
	{
		slug: 'software-freelance',
		company: 'Self-employed',
		description: 'Creating awesome applications for customers.',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date() },
		name: 'Freelancer',
		color: '#ffffff',
		links: [],
		logo: Assets.Unknown,
		shortDescription: ''
	},
	{
		slug: 'muriquee',
		company: 'Muriquee',
		description: 'Google Maps overlay for optimizing touring for digital nomadic artists and professionals.',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date(2014, 0, 1), to: new Date(2014,0,1) },
		name: 'CTO',
		color: '#ffffff',
		links: [],
		logo: Assets.Unknown,
		shortDescription: ''
	},
	{
		slug: 'lingoda',
		company: 'Lingoda',
		description: 'Developing UI for back than startup online language school.',
		contract: ContractType.FullTime,
		type: 'Web Development',
		location: 'Berlin',
		period: { from: new Date(2012, 3, 1), to: new Date(2023, 1, 1) },
		name: 'Head of Interfaces',
		color: '#ffffff',
		links: [],
		logo: Assets.Unknown,
		shortDescription: ''
	},
];

export default MY_EXPERIENCES;
