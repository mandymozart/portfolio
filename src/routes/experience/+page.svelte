<script lang="ts">
	import ClientsGrid from '$lib/components/ClientsGrid/ClientsGrid.svelte';
	import CommonPage from '$lib/components/CommonPage.svelte';
	import ExperiencesGrid from '$lib/components/ExperiencesGrid/ExperiencesGrid.svelte';
	import SkillsGrid from '$lib/components/SkillsGrid/SkillsGrid.svelte';
	import type {
		ClientDocument,
		ExperienceDocument,
		ProjectDocument,
		SkillDocument
	} from '../../prismicio-types';

	export let data: {
		experiences: ExperienceDocument[];
		skills: SkillDocument[];
		clients: ClientDocument[];
		projects: ProjectDocument[];
	};
	const { experiences, skills, clients, projects } = data;
</script>

<CommonPage title={'Experiences'} breadcrumbs={[{ label: 'Experiences' }]}>
	<ExperiencesGrid {experiences} {projects} />
	<ClientsGrid {clients} />
	<SkillsGrid {skills} />
</CommonPage>

<style lang="scss">
	h3.title {
		height: 4rem;
		position: sticky;
		padding: 0;
		border-bottom: 1px solid black;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.breadcrumbs {
		padding: 1rem 2rem 0 2rem;
	}
</style>
