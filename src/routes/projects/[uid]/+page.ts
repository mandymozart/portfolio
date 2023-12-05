import { createClient } from '$lib/prismicio';
import type {
	ClientDocument,
	CollaboratorDocument,
	SkillDocument
} from '../../../prismicio-types.js';

export async function load({
	fetch,
	cookies,
	params
}: {
	fetch: any;
	cookies: any;
	params: Record<string, string>;
}) {
	const client = createClient({ fetch, cookies });

	if (params.uid) {
		const project = await client.getByUID('project', params.uid);
		const collaborators = await client.getAllByType('collaborator');
		const clients = await client.getAllByType('client');
		const allSkills = await client.getAllByType('skill');

		// partners
		let partners: (CollaboratorDocument | ClientDocument)[] = [];
		project.data.partners.forEach((p) => {
			let partner = collaborators.find((c) => {
				if (p.partner.uid === c.uid) return true;
				else return false;
			});
			if (partner) partners.push(partner);
		});
		project.data.partners.forEach((p) => {
			let partner = clients.find((c) => {
				if (p.partner.uid === c.uid) return true;
				else return false;
			});
			if (partner) partners.push(partner);
		});
		// skills & methods
		let skills: SkillDocument[] = [];
		let methods: SkillDocument[] = [];
		project.data.skills.forEach((s) => {
			let skillResults = allSkills.filter(
				(aS) => aS.uid === s.skill.uid && !aS.tags.some((t) => t === 'Method')
			);
			skills.push(...skillResults);

			let methodResults = allSkills.filter(
				(aS) => aS.uid === s.skill.uid && aS.tags.some((t) => t === 'Method')
			);
			methods.push(...methodResults);
		});
		return { project, collaborators, partners, skills, methods };
	}
}

export async function entries() {
	const client = createClient();

	const projects = await client.getAllByType('project');

	return projects.map((project) => {
		return { uid: project.uid };
	});
}
