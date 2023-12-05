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
	<Grid grid={slice.primary.grid} />
	<IntroVideo videoid={slice.primary.videoid} bind:togglePlay bind:playing />
	<div id="overlay" class:playing>
		<h1 class="title">{slice.primary.title}</h1>
		<div class="message">
			{slice.primary.message}
		</div>
		{#if slice.primary.videoid}
			<button
				transition:fade={{ delay: 250, duration: 300 }}
				id="startButton"
				on:click={handleClick}
				>{#if playing}Pause{:else}Play{/if}</button
			>
		{/if}
		{#if slice.variation === 'section'}
			{#if slice.primary.cta?.link_type !== 'Any'}
				<PrismicLink field={slice.primary.cta} class="button" id="cta"
					>{slice.primary.cta_label}</PrismicLink
				>
			{/if}
		{/if}
	</div>
</section>

<style lang="scss">
	section {
		position: relative;
		height: 100vh;
		width: var(--content-width);
		margin-left: var(--content-margin-left);
		scroll-snap-align: start;
		h1 {
			text-align: center;
		}
		#overlay {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			margin: 12rem;
			display: flex;
			align-items: center;
			gap: 1rem;
			flex-direction: column;
			justify-content: center;
			transition: all 0.7s ease-in-out;
			transform: translateY(0);
			.message {
				text-align: center;
			}
			&.playing {
				opacity: 0;
				transform: translateY(3rem);
			}
			@media (max-width: 1350px) {
				margin: 6rem;
			}
			@media (max-width: 850px) {
				margin: 2rem;
			}
		}
		button {
			cursor: pointer;
			border: 0;
			border-radius: 2rem;
			padding: 0.5rem 1rem;
		}
	}
</style>
