<script lang="ts">
	import { TITLE_SUFFIX } from '$lib/params';
	import { useTitle } from '$lib/utils/helpers';

	import ContactSlice from '$lib/slices/Contact/ContactSlice.svelte';
	import FeaturedProjectSlice from '$lib/slices/FeaturedProject/FeaturedProjectSlice.svelte';
	import HeroSlice from '$lib/slices/Hero/HeroSlice.svelte';
	import ProcessSlice from '$lib/slices/Process/ProcessSlice.svelte';
	import type { ProjectDocument } from '../prismicio-types.js';

	export let data;

	const { projects, page } = data;

	const getProjectById = (id: string) => {
		console.log(projects);

		return projects.find((p: ProjectDocument) => p.id === id);
	};
	console.log(page.data.slices);
</script>

<svelte:head>
	<title>{useTitle('Tilman Porschütz', TITLE_SUFFIX)}</title>
</svelte:head>

{#if page.data.slices.length === 0}
	<p class="font-mono">Could not find anything...</p>
{:else}
	{#each page.data.slices as slice}
		{#if slice.slice_type === 'hero'}
			<HeroSlice {slice} />
		{:else if slice.slice_type === 'featured_project'}
			<FeaturedProjectSlice {slice} project={getProjectById(slice.primary.project.id)} />
		{:else if slice.slice_type == 'contact'}
			<ContactSlice {slice} />
		{:else if slice.slice_type == 'process'}
			<ProcessSlice {slice} />
		{:else}
			Slice Does not exist in frontend
		{/if}
	{/each}
{/if}

<style lang="scss">
	.sections {
		position: relative;
		width: 100%;
		overflow-x: hidden;
	}
</style>
