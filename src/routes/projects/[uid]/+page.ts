
import { createClient } from '$lib/prismicio';

export async function load({ fetch, cookies, params }: { fetch: any, cookies: any, params: Record<string, string> }) {
	const client = createClient({ fetch, cookies });

	if (params.uid) {
		const project = await client.getByUID('project', params.uid);
		const collaborators = await client.getAllByType('collaborator');
		const clients = await client.getAllByType('client');
		const allSkills = await client.getAllByType('skill');

		// partners
		let partners: any[] = [];
		project.data.partners.forEach((p) =>{
			let partner = collaborators.find(c => { 
				if(p.partner.uid === c.uid) return true; else  return false
			})
			if(partner) partners.push(partner)
		})
		project.data.partners.forEach((p) =>{
			let partner = clients.find(c => { 
				if(p.partner.uid === c.uid) return true; else  return false
			})
			if(partner) partners.push(partner)
		})
		// skills
		let skills: any[] = [];
		project.data.skills.forEach((s) =>{
			let skill = allSkills.find(aS => { 
				if(aS.uid === s.skill.uid) return aS; else  return false
			})
			if(skill) skills.push(skill)
		})
		return { project, collaborators, partners, skills };
	}

}

export async function entries() {
	const client = createClient();

	const projects = await client.getAllByType('project');

	return projects.map((project) => {
		return { uid: project.uid };
	});
}
