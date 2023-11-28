import { createClient } from '$lib/prismicio';

export async function load({ fetch, cookies }: { fetch: any, cookies: any}) {
	const client = createClient({ fetch, cookies });

	const experiences = await client.getAllByType('experience');
	const projects = await client.getAllByType('project');
	const skills = await client.getAllByType('skill');
	const clients = await client.getAllByType('client');
	return { experiences, skills, clients, projects }

}

export async function entries() {
	const client = createClient();

	const experience = await client.getAllByType('experience');

	return experience.map((experience) => {
		return { uid: experience.uid };
	});
}
