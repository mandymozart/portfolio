import Assets from './data/assets';
import type { Skill } from './types';
import svelte from './md/svelte.md?raw';

const s = (skill: Skill) => skill;

export type ArrayElementType<ArrayType extends readonly unknown[]> =
	ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

const MY_SKILLS = [
	s({
		slug: 'js',
		color: 'yellow',
		description:
			'I built vanilla JS apps in rapid prototyping a lot to simulate simple UX flows or if I deploy apps to hard ware devices running on limited memory such as DMX controllers and IoT devices with a web interface.',
		logo: Assets.JavaScript,
		name: 'Javascript'
	}),
	s({
		slug: 'ts',
		color: 'blue',
		description:
			'If a projects scales I enjoy implementing TypeScript after the rapid prototyping stage to allow the team to understand and navigate complex architectures and reducing the need for extensive documentation.',
		logo: Assets.TypeScript,
		name: 'Typescript'
	}),
	s({
		slug: 'dart',
		color: 'blue',
		description:
			'I have been working with Dart since 2015 in a music industry startup. I see the biggest advantages in its type safety, and therefore easy to allocate backend developers coming from other languages such as Java quickly to the frontend if needed. Further more I have been using Dart in cross-platform Flutter apps for rapid prototyping and internal apps.',
		logo: Assets.Dart,
		name: 'Dart'
	}),
	s({
		slug: 'css',
		color: 'blue',
		description:
			'With my background in visual communications and strong focus on design and UX I have been enforcing strict CSS semantics and readability amongst my peers and juniors. Furthermore I believe CSS is slowly arriving to its full potential and therefore I have been advocating a pre-processor free use for a long time. I use dom encapsulation when ever possible and will fallback to BEM schemas if the project builds on legacy frameworks.',
		logo: Assets.CSS,
		name: 'CSS'
	}),
	s({
		slug: 'html',
		color: 'orange',
		description:
			'Sometimes a simple HTML can solve most of your problems. ;)',
		logo: Assets.HTML,
		name: 'HTML'
	}),
	s({
		slug: 'sass',
		color: 'pink',
		description:
			'If possible I try to avoid using pre-processors and use dom encapsulation when possible.',
		logo: Assets.Sass,
		name: 'Sass'
	}),
	s({
		slug: 'reactjs',
		color: 'cyan',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.ReactJs,
		name: 'React Js'
	}),
	s({
		slug: 'svelte',
		color: 'orange',
		description: svelte,
		logo: Assets.Svelte,
		name: 'Svelte'
	}),
	s({
		slug: 'angular',
		color: 'orange',
		description: 'I have worked on angularjs and Angular in various projects since 2013 in combination with GoogleMaps and Ionic for mobile applications. I love it for its clear project structure. Recently I am leaning towards react or svelte as a primary go to framework nevertheless.',
		logo: Assets.Angular,
		name: 'Angular'
	}),
	s({
		slug: 'tailwind',
		color: 'orange',
		description: 'For rapid prototypes I prefer using tailwind to reduce designer feedback rounds.',
		logo: Assets.Tailwind,
		name: 'Tailwind'
	})
];

export default MY_SKILLS;

export const getSkills = (...slugs: Array<string>): Array<Skill> =>
	MY_SKILLS.filter((it) => slugs.includes(it.slug));
