<script lang="ts">
	import { base } from '$app/paths';
	import { fade } from 'svelte/transition';

	export let videoid;
	let video: HTMLVideoElement;
	export let playing = false;
	export const togglePlay = () => {
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

<style lang="scss">
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
