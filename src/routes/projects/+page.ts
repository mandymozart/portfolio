import { createClient } from '$lib/prismicio';

export async function load({ fetch, cookies }: { fetch: any, cookies: any}) {
	const client = createClient({ fetch, cookies });

	const projects = await client.getAllByType('project');
	return { projects: projects }

}

export async function entries() {
	const client = createClient();

	const projects = await client.getAllByType('project');

	return projects.map((project) => {
		return { uid: project.uid };
	});
}
