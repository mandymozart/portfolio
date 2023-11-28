<script lang="ts">
	import { base } from '$app/paths';
	import type { PrismicText } from '@prismicio/svelte';
	import { fade } from 'svelte/transition';
	export let videoid: PrismicText;
	let video: HTMLVideoElement;
	$: playing = false;
	const togglePlay = () => {
		if (playing) {
			video.pause();
			playing = false;
		} else {
			video.play();
			playing = true;
		}
	};
</script>

<div class="stage">
	{#if videoid}
		<video
			transition:fade={{ delay: 250, duration: 300 }}
			bind:this={video}
			loop
			playsinline
			class:playing
		>
			<source src="{base}/videos/{videoid}.webm" type="video/webm" />
			<track default kind="captions" srclang="en" src="{base}/videos/{videoid}.vtt" />
		</video>
	{/if}
</div>

<div id="overlay" class:playing>
	<button id="startButton" on:click={() => togglePlay()}
		>{#if playing}Pause{:else}Play Reaction{/if}</button
	>
</div>

<style lang="scss">
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
	.stage {
		position: absolute;
		margin: auto;
		width: 100%;
		height: 100%;
		overflow: hidden;
		clip-path: 0 0;
		transform: translatez(0);
	}
	video {
		opacity: 0.1;
		transform: translatez(0);
		transition: all 2s ease-in-out;
		transform: translateY(5rem);
		position: absolute;
		top: -100%;
		bottom: -100%;
		left: -100%;
		right: -100%;
		filter: blur(15px);
		object-fit: cover;
		transform: scale(1.06); /* scale up to hide the edge blur */
		margin: auto;
		min-width: 100%;
		min-height: 100%;
		&.playing {
			opacity: 1;
			filter: blur(0px);
			transform: translateY(0) scale(1);
		}
	}
</style>
