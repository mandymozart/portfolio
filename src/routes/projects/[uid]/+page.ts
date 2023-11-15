
import { createClient } from '$lib/prismicio';

export async function load({ fetch, cookies, params }: { fetch: any, cookies: any, params: Record<string, string> }) {
	const client = createClient({ fetch, cookies });

	if (params.uid) {
		// const project = MY_PROJECTS.find((item) => {
		// 	return item.slug === params.uid;
		// });

		const project = await client.getByUID('project', params.uid);
		console.log(project)
		return { project };
	}

}

export async function entries() {
	const client = createClient();

	const projects = await client.getAllByType('project');

	return projects.map((project) => {
		return { uid: project.uid };
	});
}
