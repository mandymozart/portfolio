<script lang="ts">
	import ClientsGrid from '$lib/components/ClientsGrid/ClientsGrid.svelte';
	import CommonPage from '$lib/components/CommonPage.svelte';
	import ExperienceCard from '$lib/components/ExperienceCard/ExperienceCard.svelte';
	import SkillsGrid from '$lib/components/SkillsGrid/SkillsGrid.svelte';

	export let data: { experiences: any[]; skills: any[]; clients: any[] };
	const { experiences, skills, clients } = data;
</script>

<CommonPage title={'Experiences'}>
	<div class="font-mono">
		{#each experiences as job}
			<ExperienceCard experience={job} />
		{/each}

		<SkillsGrid {skills} />
		<ClientsGrid {clients} />
	</div>
</CommonPage>
