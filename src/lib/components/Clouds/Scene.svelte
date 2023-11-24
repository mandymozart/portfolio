<script>
	import { onMount } from 'svelte';
	let el;

	onMount(async () => {
		const Scene = await import('./Scene');
		Scene.createScene(el);
	});
</script>

<section>
	<canvas bind:this={el}></canvas>
</section>

<style lang="scss">
</style>
