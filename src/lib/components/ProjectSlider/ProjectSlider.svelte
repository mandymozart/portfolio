<script lang="ts">
	import { base } from '$app/paths';
	import Swipe from '$lib/components/Swiper/Swipe.svelte';
	import SwipeItem from '$lib/components/Swiper/SwipeItem.svelte';
	import VideoReaction from '$lib/components/Videos/VideoReaction.svelte';
	import { PrismicImage, PrismicRichText } from '@prismicio/svelte';
	import type { ProjectDocument } from '../../../prismicio-types';

	export let project: ProjectDocument | undefined;
	const screenshots = project?.data.images ?? [];
</script>

{#if project === undefined}
	<div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)]">
		<p class="font-300">Could not load project data...</p>
	</div>
{:else}
	<a href={`${base}/projects/${project.uid}`}>
		<Swipe>
			{#if screenshots.length > 0}
				{#each screenshots as item}
					<SwipeItem>
						<PrismicImage class="screenshot screenshot--desktop w-full" field={item.image} />
					</SwipeItem>
				{/each}
			{/if}
		</Swipe>
		<div class="overlay font-mono">
			<div class="info">
				<h3 class="title font-mono">
					{project.data.name} / {project.data.type}
				</h3>
				<div class="description">
					<PrismicRichText field={project.data.description} />
				</div>
			</div>
		</div>
		{#if project.data.videoid}
			<div class="video-reaction">
				<VideoReaction videoid={project.data.videoid} />
			</div>
		{/if}
	</a>
{/if}

<style lang="scss">
	.project-info {
		padding: 6rem;
	}
	.overlay {
		position: absolute;
		left: 4rem;
		top: 0;
		width: 100%;
		display: grid;
		grid-template-columns: 2fr 1fr 2fr;
		.info {
			padding: 2rem;
		}
	}
	.link {
		text-align: right;
		a {
			text-decoration: none;
		}
		&:hover {
			background: white;
		}
	}
	h3 {
		margin-bottom: 3rem;
	}
	p {
		margin-bottom: 2rem;
	}
	a {
		&:hover {
			background: none;
		}
	}
	:global(.screenshot) {
		max-height: 100vh;
		max-width: 100vw;
		object-fit: contain;

		@media (max-width: 1350px) {
		}
		@media (max-width: 850px) {
		}
	}
</style>
