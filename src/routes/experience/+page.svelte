<script lang="ts">
	import ClientsGrid from '$lib/components/ClientsGrid/ClientsGrid.svelte';
	import CommonPage from '$lib/components/CommonPage.svelte';
	import ExperiencesGrid from '$lib/components/ExperiencesGrid/ExperiencesGrid.svelte';
	import SkillsGrid from '$lib/components/SkillsGrid/SkillsGrid.svelte';

	export let data: { experiences: any[]; skills: any[]; clients: any[] };
	const { experiences, skills, clients } = data;
</script>

<CommonPage title={'Experiences'} breadcrumbs={[{ label: 'Experiences' }]}>
	<ExperiencesGrid {experiences} />
	<SkillsGrid {skills} />
	<ClientsGrid {clients} />
</CommonPage>

<style lang="scss">
	h3.title {
		height: 4rem;
		position: sticky;
		padding: 0 2rem;
		border-bottom: 1px solid black;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.breadcrumbs {
		padding: 1rem 2rem 0 2rem;
	}
</style>
