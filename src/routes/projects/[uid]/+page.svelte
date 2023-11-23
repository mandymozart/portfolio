<script lang="ts">
	import UIcon from '$lib/components/Icon/UIcon.svelte';
	import ProjectSlider from '$lib/components/ProjectSlider/ProjectSlider.svelte';
	import SliderPage from '$lib/components/SliderPage.svelte';
	import TabTitle from '$lib/components/TabTitle.svelte';
	// Default theme
	import '@splidejs/svelte-splide/css';

	export let data: { project?: any };
	const { project } = data;
</script>

<TabTitle title={project.data.name} />

<SliderPage>
	{#if project === undefined}
		<div class="font-mono">
			<UIcon icon="i-carbon-cube" classes="text-3.5em" />
			<p class="font-300">Could not load project data...</p>
		</div>
	{:else}
		<ProjectSlider {project} />
	{/if}
</SliderPage>

<style lang="scss">
	:global(.screenshot) {
		height: 100%;
		width: 100%;
		/* max-width: 100%; */
		object-fit: scale-down;

		@media (max-width: 1350px) {
		}
		@media (max-width: 850px) {
		}
	}
	:global(.splide__pagination__page.is-active) {
		background-color: black;
	}
	:global(.splide__pagination) {
		top: 0.5em;
		bottom: auto;
		left: auto;
		padding: 0 1em;
		position: absolute;
		right: 0;
		z-index: 1;
	}
</style>
