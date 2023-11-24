<script>
	import { onMount } from 'svelte';

	let el;

	onMount(async () => {
		const Scene = await import('./Clouds');
		Scene.createScene(el);
	});
</script>

<canvas bind:this={el}></canvas>
