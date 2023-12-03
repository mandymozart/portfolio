<script lang="ts">
	import { base } from '$app/paths';
	import type { PrismicText } from '@prismicio/svelte/*';
	import { fade } from 'svelte/transition';
	export let videoid: PrismicText | undefined;
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
		left: 2rem;
		bottom: 2rem;
		display: flex;
		align-items: start;
		gap: 1rem;
		flex-direction: column;
		justify-content: flex-end;
		button {
			pointer-events: all;
			transform: translateY(0);
			cursor: pointer;
		}
		&.playing {
			opacity: 1;
			button {
				transform: translateY(0) translateX(0);
			}
		}
	}
	.stage {
		pointer-events: none;
	}
	video {
		opacity: 0.1;
		pointer-events: none;
		cursor: default;
		transform: scale(1.06);
		height: 20rem;
		&.playing {
			opacity: 1;
			filter: blur(0px);
			transform: translateY(0) scale(1);
		}
	}
</style>
