<script lang="ts">
	import { base } from '$app/paths';
	import Grid from '$lib/components/Grid/Grid.svelte';
	import type { Content } from '@prismicio/client';
	import { PrismicImage } from '@prismicio/svelte';

	export let slice: Content.FeaturedProjectSlice;
	export let project: Content.ProjectDocument | undefined;
	let scrollY: number;
	// $: scrollY, console.log(scrollY);

	console.log(slice.primary);
</script>

<svelte:window bind:scrollY />

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	{#if slice.primary.background.url}
		<img src={slice.primary.background.url} alt="background" />
	{/if}
	<Grid grid={slice.primary.grid} />

	<a href={`${base}/projects/${project?.uid}`}>
		{#if slice.primary.cover_desktop}
			<PrismicImage class="screenshot hidden--mobile" field={slice.primary.cover_desktop} />
		{/if}
		{#if slice.primary.cover_mobile}
			<PrismicImage
				class="screenshot hidden--desktop hidden--tablet"
				field={slice.primary.cover_mobile}
			/>
		{/if}
		<div class="overlay">
			<div class="info">
				<h3 class="title">
					{project?.data.name} / {project?.data.type}
				</h3>
			</div>
		</div>
	</a>
</section>

<style lang="scss">
	section {
		position: relative;
		font-family: var(--font);
		min-height: 100vh;
		width: calc(100% - 4rem);
		margin-left: 4rem;
		@media (max-width: 850px) {
			min-height: 100vh;
		}
		> img {
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
		&:hover > img {
			filter: blur(0);
			transform: scale(1.06);
		}
		a {
			z-index: 2;
			display: block;
			&:hover {
				background: none;
			}
		}
		.overlay {
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			display: grid;
			grid-template-columns: 2fr 1fr 2fr;
			h3 {
				margin-bottom: 3rem;
			}
			p {
				margin-bottom: 2rem;
			}
			.info {
				padding: var(--grid-padding);
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
			@media (max-width: 850px) {
				position: relative;
			}
		}
	}
</style>
