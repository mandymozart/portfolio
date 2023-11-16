<script lang="ts">
        
    import { PrismicImage, PrismicLink, PrismicRichText } from '@prismicio/svelte';
    import { Splide, SplideSlide } from '@splidejs/svelte-splide';
    import '@splidejs/svelte-splide/css';

    export let project: any;
	const screenshots = project?.data.images ?? [];

</script>
<div class="flex flex-col items-center overflow-x-hiddenw-full h-screen">
	{#if project === undefined}
		<div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)]">
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
				{/if}
				<SplideSlide class="flex flex-col items-center justify-center overflow-x-hidden h-screen">
						<div class="font-mono">
                            <p>

                                {project.data.name} / {project.data.type}<br />
                                <PrismicLink field={project.data.link}>Visit app</PrismicLink>
                            </p>
							<PrismicRichText field={project.data.description} />
                        </div>
				</SplideSlide>
			
		</Splide>

	{/if}
</div>
<style lang="scss">
	:global(.screenshot){
		height: auto;
		max-height: 100vh;

		@media (max-width: 1350px) {
			
		}
		@media (max-width: 850px) {
			
		}
	}
	
</style>
