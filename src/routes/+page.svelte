<script lang="ts">
	import ProjectSlider from '$lib/components/ProjectSlider/ProjectSlider.svelte';
	import { HOME, TITLE_SUFFIX } from '$lib/params';
	import { useTitle } from '$lib/utils/helpers';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';

	const { title } = HOME;

	export let data;
	const { projects } = data;

	
</script>

<svelte:head>
	<title>{useTitle(title, TITLE_SUFFIX)}</title>
</svelte:head>
<main>
	<Splide options={{direction:'ttb', height:'100vh' ,
	wheel:true}}>
	{#if projects.length === 0}
	<SplideSlide class="flex items-center justify-center w-full h-screen">
		<p class="font-mono">Could not find anything...</p>
	</SplideSlide>
	{:else}
		{#each projects as project}
		<SplideSlide >
			
			<ProjectSlider {project} />
		</SplideSlide>
		{/each}
	{/if}
</Splide>
</main>

<style lang="scss">
	:global(.splide__pagination__page.is-active) {
		background-color: black;
	}
	:global(.splide__pagination) {
		top: 4rem;
		bottom: auto;
		left: auto;
		padding: 0 1em;
		position: absolute;
		right: 4rem;
		z-index: 1;
	}
	:global(.splide__arrow){
		transition: opacity .1s ease-in;
		background: none;
	}
	:global(.splide__arrow:disabled){
		opacity: 0;
	}
	:global(.splide__pagination--ttb) {
		top: 5rem;
	}
	:global(.splide__arrows.splide__arrows--ltr .splide__arrow--next){
		right: 4rem;
	}
	:global(.splide__arrows.splide__arrows--ltr .splide__arrow--prev){
		left: 4rem;
	}
	:global(.splide__arrows.splide__arrows--ttb .splide__arrow--next){
		bottom: 4rem;
	}
	:global(.splide__arrows.splide__arrows--ttb .splide__arrow--prev){
		top: 4rem;
	}
</style>
