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
		<Grid fadeOut={true} />
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
		width: 100%;
		scroll-snap-align: start;
		.inner {
			margin: 6rem 4rem;
		}
		h3 {
			margin: 2rem 2rem;
		}
		.description {
			margin: 2rem 2rem 4rem 2rem;
		}
		.addresses {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
		}
	}
</style>
