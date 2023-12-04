<script lang="ts">
	import Address from '$lib/components/Address/address.svelte';
	import Grid from '$lib/components/Grid/Grid.svelte';
	import type { Content } from '@prismicio/client';

	export let slice: Content.ContactSlice;
</script>

<section
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	class="font-mono"
>
	<div class="inner">
		<Grid grid={slice.primary.grid} />
		<h3>{slice.primary.title}</h3>
		<p class="description">{slice.primary.description}</p>
		<div class="addresses">
			{#each slice.items as address}
				<Address {address} />
			{/each}
		</div>
	</div>
</section>

<style lang="scss">
	section {
		position: relative;
		height: 100vh;
		width: calc(100% - 4rem);
		margin-left: 4rem;
		h3 {
			margin: 2rem var(--grid-padding);
		}
		.description {
			margin: 2rem var(--grid-padding) 4rem var(--grid-padding);
		}
		.addresses {
			display: grid;
			grid-template-columns: 1fr 1fr 2fr 2fr;
			@media (max-width: 1350px) {
				grid-template-columns: repeat(4, 1fr);
			}
			@media (max-width: 850px) {
				grid-template-columns: repeat(1, 1fr);
			}
		}
	}
</style>
