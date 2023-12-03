<script lang="ts">
	import Grid from '$lib/components/Grid/Grid.svelte';
	import Process from '$lib/components/Process/Process.svelte';
	import type { Content } from '@prismicio/client';
	import { PrismicRichText } from '@prismicio/svelte';

	export let slice: Content.ProcessSlice;
</script>

<section
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	class="font-mono"
>
	<Grid grid={slice.primary.grid} />
	<div class="inner">
		<h3>{slice.primary.title}</h3>
		<div class="description">
			<PrismicRichText field={slice.primary.description} />
		</div>
		<div class="processes">
			{#each slice.items as process}
				<Process {process} />
			{/each}
		</div>
	</div>
</section>

<style lang="scss">
	section {
		position: relative;
		min-height: 100vh;
		width: calc(100% - 4rem);
		margin-left: 4rem;
		scroll-snap-align: start;
		h3 {
			margin: 2rem 2rem;
		}
		.description {
			margin: 2rem 2rem 4rem 2rem;
		}
		.processes {
			display: grid;
			grid-template-columns: repeat(6, 1fr);
			@media (max-width: 1350px) {
				grid-template-columns: repeat(4, 1fr);
			}
			@media (max-width: 850px) {
				grid-template-columns: repeat(1, 1fr);
				gap: 1rem;
			}
		}
	}
</style>
