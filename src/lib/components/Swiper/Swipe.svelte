<script lang="ts">
	let wrapper: HTMLDivElement;
	let SWIPE_PANEL;

	const next = () => {};
	const prev = () => {};
</script>

<div class="swipe-panel" bind:this={SWIPE_PANEL}>
	<slot />

	<div role="presentation" class="swipe-next">
		<button on:click={() => next()}>Next</button>
	</div>
	<div role="presentation" class="swipe-prev">
		<button on:click={() => prev()}>Prev</button>
	</div>
</div>

<style>
	.swipe-panel {
		position: relative;
		height: 100vh;
		width: 100vw;
		display: grid;
		grid-auto-flow: column;
		overflow: hidden;
	}
</style>
