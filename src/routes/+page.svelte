<script lang="ts">
	import { base } from '$app/paths';
	import Chip from '$lib/components/Chip/Chip.svelte';
	import Hero from '$lib/components/Hero/Hero.svelte';
	import ProjectSlider from '$lib/components/ProjectSlider/ProjectSlider.svelte';
	import { HOME, TITLE_SUFFIX } from '$lib/params';
	import { useTitle } from '$lib/utils/helpers';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';

	const { title } = HOME;

	export let data;
	const { projects, page } = data;
</script>

<svelte:head>
	<title>{useTitle(title, TITLE_SUFFIX)}</title>
</svelte:head>
<main>
	<Splide
		modules={[]}
		options={{
			direction: 'ttb',
			height: '100vh',
			waitForTransition: true,
			lazyLoad: true,
			wheel: true
		}}
	>
		{#if projects.length === 0}
			<SplideSlide class="flex items-center justify-center w-full h-screen">
				<p class="font-mono">Could not find anything...</p>
			</SplideSlide>
		{:else}
			<SplideSlide class="flex items-center justify-center w-full h-screen">
				<Hero {page} />
			</SplideSlide>
			{#each projects as project}
				<SplideSlide>
					<ProjectSlider {project} />
				</SplideSlide>
			{/each}
			<SplideSlide class="flex items-center justify-center flex-col font-mono w-full h-screen">
				<h3>Story telling</h3>
				<p>Being passionate about user journeys and art, I developed a sense for story telling.</p>
				<a href={`${base}/story`}><Chip>Read more</Chip></a>
			</SplideSlide>
		{/if}
	</Splide>
</main>

<style lang="scss">
	main {
		/* background: rgba(50, 102, 150, 1); */
	}
	:global(.splide__pagination__page.is-active) {
		background-color: transparent;
		color: red;
		transform: scale(1);
	}
	:global(.splide__pagination) {
		counter-reset: pagination-num;
		color: black;
		top: 1rem;
		bottom: auto;
		left: auto;
		padding: 0;
		position: absolute;
		right: 1rem;
		z-index: 1;
	}

	:global(.splide__pagination__page:before) {
		counter-increment: pagination-num;
		content: counter(pagination-num);
		font-family: monospace;
		font-size: 1rem;
		background: none;
	}
	:global(.splide__pagination__page) {
		background-color: transparent;
	}
	:global(.splide__arrow) {
		transition: opacity 0.1s ease-in;
		background: none;
	}
	:global(.splide__arrow:disabled) {
		opacity: 0;
	}
	:global(.splide__pagination--ltr) {
		right: 6rem;
	}
	:global(.splide__pagination--ttb .splide__pagination__page) {
		transform: rotate(90deg) translate(0, -0.25rem);
	}
	:global(.splide__pagination--ttb) {
		top: 0;
		right: 0;
		width: 4rem;
		bottom: 0;
		display: flex;
		justify-content: space-between;
		padding: 2rem 0;
		align-items: center;
	}
	:global(.splide__arrows) {
	}
	:global(.splide__arrows.splide__arrows--ltr .splide__arrow--next) {
		right: 6rem;
		border: 1px solid black;
		background-color: white;
	}
	:global(.splide__arrows.splide__arrows--ltr .splide__arrow--prev) {
		left: 6rem;
		border: 1px solid black;
		background-color: white;
	}
	:global(.splide__arrows.splide__arrows--ttb .splide__arrow--next) {
		bottom: 2rem;
		border: 1px solid black;
		background-color: white;
	}
	:global(.splide__arrows.splide__arrows--ttb .splide__arrow--prev) {
		border: 1px solid black;
		background-color: white;
		right: 0 !important;
		width: 2rem;
		height: 2rem;
	}
</style>
