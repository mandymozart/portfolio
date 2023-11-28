<script lang="ts">
	import type { ExperienceDocument, ProjectDocument } from '../../../prismicio-types';
	import ExperienceItem from './ExperienceItem.svelte';

	export let experiences: ExperienceDocument[];
	export let projects: ProjectDocument[];
</script>

<div class="experience-list">
	{#if experiences}
		{#each experiences as experience}
			<ExperienceItem {experience} {projects} />
		{/each}
	{/if}
</div>

<style lang="scss">
	.experience-list {
		width: calc(100% - 4rem);
	}
</style>
