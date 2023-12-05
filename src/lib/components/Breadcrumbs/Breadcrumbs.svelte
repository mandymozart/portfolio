<script lang="ts">
	import { base } from '$app/paths';
	import type { Breadcrumb } from '$lib/types';
	import Grid from '../Grid/Grid.svelte';
	export let breadcrumbs: Array<Breadcrumb> | [];
</script>

<div class="breadcrumbs">
	<div>
		<a href="{base}/">Home </a> &gt;
	</div>

	{#each breadcrumbs as breadcrumb}
		{#if breadcrumb.path}
			<div>
				<a href="{base}{breadcrumb.path}">{breadcrumb.label}</a> &gt;&nbsp;
			</div>
		{:else}
			<div>
				{breadcrumb.label}
			</div>
		{/if}
	{/each}
	<Grid grid={'fadeIn'} />
</div>

<style lang="scss">
	.breadcrumbs {
		position: relative;
		text-transform: capitalize;
		display: grid;
		height: 4rem;
		width: var(--content-width);
		margin-left: var(--content-margin-left);
		grid-template-columns: repeat(6, 1fr);
		> div {
			padding: 2rem var(--grid-padding) 1rem var(--grid-padding);
		}
		@media (max-width: 1350px) {
			grid-template-columns: repeat(4, 1fr);
			height: auto;
		}
		@media (max-width: 850px) {
			display: block;
			padding: 2rem var(--grid-padding) var(--grid-padding);
			> div {
				display: inline;
				padding: 0;
			}
		}
	}
</style>
