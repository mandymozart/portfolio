<script lang="ts">
	import { TITLE_SUFFIX } from '$lib/params';
	import { useTitle } from '$lib/utils/helpers';

	import Footer from '$lib/components/Footer/Footer.svelte';
	import ContactSlice from '$lib/slices/Contact/index.svelte';
	import FeaturedProjectSlice from '$lib/slices/FeaturedProject/index.svelte';
	import HeroSection from '$lib/slices/Hero/HeroSection.svelte';
	import HeroSlice from '$lib/slices/Hero/index.svelte';
	import ProcessSlice from '$lib/slices/Process/index.svelte';
	import type { ProjectDocument } from '../prismicio-types.js';

	export let data;

	const { projects, page } = data;

	const getProjectById = (id: string) => {
		return projects.find((p: ProjectDocument) => p.id === id);
	};
</script>

<svelte:head>
	<title>{useTitle('Tilman Porschütz', TITLE_SUFFIX)}</title>
</svelte:head>
<HeroSection />
{#if page.data.slices.length === 0}
	<p>Could not find anything...</p>
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
<Footer />

<style lang="scss">
	.sections {
		position: relative;
		width: 100%;
		overflow-x: hidden;
	}
</style>
