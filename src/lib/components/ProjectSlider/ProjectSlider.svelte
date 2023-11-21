<script lang="ts">
        
    import { PrismicImage, PrismicLink, PrismicRichText } from '@prismicio/svelte';
    import { Splide, SplideSlide } from '@splidejs/svelte-splide';
    import '@splidejs/svelte-splide/css';
	import Chip from '../Chip/Chip.svelte';

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
					<PrismicImage class="screenshot screenshot--desktop w-full" field={item.image} />
					{#if item.image.mobile}<PrismicImage class="screenshot screenshot--mobile w-full" field={item.image.mobile} />{/if}
				</SplideSlide>
				{/each}
				{/if}
				<SplideSlide class="flex flex-col items-center justify-center overflow-x-hidden h-screen">
						<div class="project-info font-mono">
                            <p>
                                {project.data.name} / {project.data.type}<br />
                            </p>
							<p>
								<PrismicRichText field={project.data.description}/>
							</p>
							
                        </div>
				</SplideSlide>
			
		</Splide>
		<div class="sidebar font-mono">
			<div class="info">
				<div class="title font-mono">
						{project.data.name} / {project.data.type}
				</div>
				<div class="tags">
					{#each project.tags as tag}
						<Chip>{tag}</Chip>
					{/each}
				</div>
				
			</div>
		</div>
		<div class="link">
			{#if project.data.link}
			<PrismicLink field={project.data.link}><Chip>Visit project</Chip></PrismicLink>
			{/if}
		</div>
		
	{/if}
</div>
<style lang="scss">
	.project-info {
		padding: 6rem;

	}
	.sidebar {
		position: absolute;
		top: 1rem;
		left: 5rem;
		right: 50vw;
	}
	.link {
		position: absolute;
		bottom: 1rem;
		right: 1rem;
			text-align: right;
		}
	p {
		margin-bottom: 2rem;
	}
	:global(.screenshot){
		max-height: 100vh;
		max-width: 100vw;
		object-fit: contain;

		@media (max-width: 1350px) {
			
		}
		@media (max-width: 850px) {
			// &.screenshot--desktop {
			// 	display: none;
			// }
		}
	}
	
</style>
