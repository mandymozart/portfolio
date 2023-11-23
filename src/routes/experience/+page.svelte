<script lang="ts">
	import Chip from '$lib/components/Chip/Chip.svelte';
	import CommonPage from '$lib/components/CommonPage.svelte';
	import ExperienceCard from '$lib/components/ExperienceCard/ExperienceCard.svelte';

	export let data: { experiences: any[]; skills: any[] };
	const { experiences, skills } = data;
</script>

<CommonPage title={'Experiences'}>
	<div class="font-mono">
		{#each experiences as job}
			<ExperienceCard experience={job} />
		{/each}

		{#each skills as skill}
			<Chip>{skill}</Chip>
		{/each}
	</div>
</CommonPage>
