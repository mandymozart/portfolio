<script lang="ts">
	import Grid from '$lib/components/Grid/Grid.svelte';
	import IntroVideo from '$lib/components/Videos/IntroVideo.svelte';
	import type { Content } from '@prismicio/client';
	import { PrismicLink } from '@prismicio/svelte';
	import { fade } from 'svelte/transition';

	export let slice: Content.HeroSlice;
	let togglePlay: () => void;
	let playing: boolean;
	function handleClick() {
		togglePlay();
	}
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<IntroVideo videoid={slice.primary.videoid} bind:togglePlay bind:playing />
	<div id="overlay" class:playing>
		<h1 class="title font-mono">{slice.primary.title}</h1>
		<div class="message font-mono">
			{slice.primary.message}
		</div>
		{#if slice.primary.videoid}
			<button
				transition:fade={{ delay: 250, duration: 300 }}
				class="font-mono"
				id="startButton"
				on:click={handleClick}
				>{#if playing}Pause{:else}Play{/if}</button
			>
		{/if}
		{#if slice.variation === 'section'}
			{#if slice.primary.cta}
				<PrismicLink field={slice.primary.cta} class="font-mono" id="cta"
					>{slice.primary.cta_label}</PrismicLink
				>
			{/if}
		{/if}
	</div>

	<Grid fadeIn={true} />
</section>

<style lang="scss">
	section {
		position: relative;
		height: 100vh;
		width: 100vw;
		scroll-snap-align: start;
		border-top: 1px solid black;
		&:first-of-type {
			border-bottom: 1px solid black;
			border-top: none;
		}
		h1 {
		}
		#overlay {
			position: absolute;
			top: 6rem;
			left: 6rem;
			right: 6rem;
			bottom: 6rem;
			display: flex;
			align-items: center;
			gap: 1rem;
			flex-direction: column;
			justify-content: center;
			transition: all 0.7s ease-in-out;
			transform: translateY(0);
			&.playing {
				opacity: 0;
				transform: translateY(3rem);
			}
		}
		button {
			border: 1px solid black;
			border-radius: 2rem;
			padding: 0.5rem 1rem;
		}
	}
</style>
