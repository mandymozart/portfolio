<script lang="ts">
	import Grid from '$lib/components/Grid/Grid.svelte';
	import ProjectSlider from '$lib/components/ProjectSlider/ProjectSlider.svelte';
	import type { Content } from '@prismicio/client';

	export let slice: Content.FeaturedProjectSlice;
	export let project: Content.ProjectDocument | undefined;
	let scrollY: number;
	// $: scrollY, console.log(scrollY);

	console.log(slice.primary.grid);
</script>

<svelte:window bind:scrollY />

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	{#if slice.primary.background.url}
		<img src={slice.primary.background.url} alt="background" />
	{/if}
	<Grid grid={slice.primary.grid} />
	<ProjectSlider {project} />
</section>

<style lang="scss">
	section {
		position: relative;
		min-height: 100vh;
		width: calc(100% - 4rem);
		margin-left: 4rem;
		@media (max-width: 850px) {
			min-height: 100vh;
		}
		img {
			width: 100%;
			height: 100vh;
			object-fit: cover;
			position: absolute;
			top: 0;
			opacity: 1;
			transition: all 3s ease-out;
			filter: blur(40px);
			transform: scale(1);
		}
		&:hover img {
			filter: blur(0);
			transform: scale(1.06);
		}
	}
</style>
