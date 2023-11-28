<script lang="ts">
	import { onMount } from 'svelte';

	let canvas: HTMLCanvasElement;

	onMount(async () => {
		const Scene = await import('./Clouds');
		Scene.createScene(canvas);
	});
</script>

<canvas bind:this={canvas}></canvas>

<style lang="scss">
	canvas {
		position: fixed;
		top: 0;
		z-index: -1;
	}
</style>
