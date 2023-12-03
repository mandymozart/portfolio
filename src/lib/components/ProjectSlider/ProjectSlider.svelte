<script lang="ts">
	import { base } from '$app/paths';
	import VideoReaction from '$lib/components/Videos/VideoReaction.svelte';
	import { PrismicImage } from '@prismicio/svelte';
	import type { ProjectDocument } from '../../../prismicio-types';

	export let project: ProjectDocument | undefined;
</script>

<a href={`${base}/projects/${project.uid}`}>
	{#if project.data.images.length > 0}
		{#if project.data.images[0].desktop}
			<PrismicImage class="screenshot screenshot--desktop" field={project.data.images[0].desktop} />
		{/if}
		{#if project.data.images[0].mobile}
			<PrismicImage class="screenshot screenshot--mobile" field={project.data.images[0].mobile} />
		{/if}
	{/if}
	<div class="overlay font-mono">
		<div class="info">
			<h3 class="title font-mono">
				{project.data.name} / {project.data.type}
			</h3>
		</div>
	</div>
	{#if project.data.videoid}
		<div class="video-reaction">
			<VideoReaction videoid={project.data.videoid} />
		</div>
	{/if}
</a>

<style lang="scss">
	a {
		z-index: 2;
		display: block;
	}
	.project-info {
		padding: 6rem 0;
	}
	.overlay {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		display: grid;
		grid-template-columns: 2fr 1fr 2fr;
		.info {
			padding: 2rem;
		}
		@media (max-width: 850px) {
			position: relative;
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
</style>
