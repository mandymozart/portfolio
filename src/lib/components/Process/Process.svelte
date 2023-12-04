<script lang="ts">
	import { PrismicImage } from '@prismicio/svelte';
	import type { ProcessSliceDefaultItem } from '../../../prismicio-types';

	export let process: ProcessSliceDefaultItem;
</script>

<div>
	<h4>{process.title}</h4>
	{process.description}
	{#if process.illustration}
		<PrismicImage field={process.illustration} />
	{/if}
</div>

<style lang="scss">
	div {
		padding: 0 var(--grid-padding);
		h4 {
			margin-bottom: 2rem;
		}
		margin-bottom: 4rem;
	}
</style>
