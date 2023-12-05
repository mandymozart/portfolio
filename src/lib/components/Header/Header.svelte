<script lang="ts">
	import Grid from '../Grid/Grid.svelte';

	export let title: string | undefined;
	export let subtitle: string | undefined;
</script>

<h3 class="font-mono">
	<div>
		{title}
		<span class="font-mono"><slot />{subtitle ? subtitle : ''}</span>
	</div>
	<Grid />
</h3>

<style lang="scss">
	h3 {
		position: relative;
		width: var(--content-width);
		margin: 0;
		margin-left: var(--content-margin-left); /* border-bottom: 1px solid black; */
		> div {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 2rem var(--grid-padding) 1rem var(--grid-padding);
		}
		span {
			font-size: 1rem;
			font-weight: 400;
		}
	}
</style>
