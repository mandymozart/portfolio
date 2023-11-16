<script lang="ts">
	
	import UIcon from '$lib/components/Icon/UIcon.svelte';
	import SliderPage from '$lib/components/SliderPage.svelte';
	import TabTitle from '$lib/components/TabTitle.svelte';
	import { PrismicImage, PrismicLink, PrismicRichText } from '@prismicio/svelte';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
// Default theme
	import '@splidejs/svelte-splide/css';

	export let data: { project?: any };
	const { project } = data;

	const screenshots = project?.data.images ?? [];
</script>

<TabTitle title={project.data.name} />

<SliderPage>
	{#if project === undefined}
		<div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)]">
			<UIcon icon="i-carbon-cube" classes="text-3.5em" />
			<p class="font-300">Could not load project data...</p>
		</div>
	{:else}
		<Splide aria-label="Project Slideshow" class="h-screen ">

				{#if screenshots.length > 0}
				
				{#each screenshots as item}
				<SplideSlide class=" flex items-center justify-center">
					<PrismicImage class="screenshot w-full" field={item.image} />
				</SplideSlide>
				{/each}
				{:else}
				<SplideSlide>
					<UIcon icon="i-carbon-image" classes="text-3.5em" />
					<p class="font-300">No screenshots</p>
				</SplideSlide>
				{/if}
				<SplideSlide class="flex flex-col items-center justify-center overflow-x-hidden h-screen">
					<div class="px-10px m-y-5">
						<p>
							{project.data.name} / {project.data.type}<br />
							<PrismicLink field={project.data.link}>Live Preview</PrismicLink>
						</p>
						{#if project.data.description}
							<PrismicRichText field={project.data.description} />
						{:else}
						<div class="p-5 col-center gap-3 m-y-auto text-[var(--border)]">
							<UIcon icon="i-carbon-text-font" classes="text-3.5em" />
							<p class="font-300">No description</p>
						</div>
						{/if}
						
					</div>
				</SplideSlide>
			
		</Splide>

	{/if}
	</SliderPage>
<style lang="scss">
	:global(.screenshot){
		height: auto;
		max-height: 100vh;

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
