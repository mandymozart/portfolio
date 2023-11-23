import { createClient } from '$lib/prismicio';

export async function load({ fetch, cookies, params }: { fetch: any, cookies: any, params: Record<string, string> }) {
	const client = createClient({ fetch, cookies });

	if (params.uid) {
		const page = await client.getByUID('page', params.uid);
		console.log(page)
		return { page };
	}

}