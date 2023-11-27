<script lang="ts">
	import { onMount } from 'svelte';

	let canvas: HTMLCanvasElement;
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

	onMount(async () => {
		const Scene = await import('./Clouds');
		Scene.createScene(canvas, video);
	});
</script>

<video bind:this={video} loop playsinline>
	<source src="videos/intro.webm" type="video/webm" />
</video>

<canvas bind:this={canvas}></canvas>

<div id="overlay">
	<button id="startButton" on:click={() => togglePlay()}
		>{#if playing}Pause{:else}Play{/if}</button
	>
</div>

<style lang="scss">
	#overlay {
		position: absolute;
		top: 6rem;
		left: 6rem;
	}
	canvas {
		position: fixed;
		top: 0;
		z-index: -1;
	}
</style>
