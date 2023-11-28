<script lang="ts">
	import { base } from '$app/paths';
	import type { Breadcrumb } from '$lib/types';
	export let breadcrumbs: Array<Breadcrumb> | [];
</script>

<div class="breadcrumbs font-mono">
	<div>
		<a href="{base}/">Home </a> &gt;
	</div>

	{#each breadcrumbs as breadcrumb}
		{#if breadcrumb.path}
			<div>
				<a href="{base}{breadcrumb.path}">{breadcrumb.label}</a> &gt;
			</div>
		{:else}
			<div>
				{breadcrumb.label}
			</div>
		{/if}
	{/each}
</div>

<style lang="scss">
	.breadcrumbs {
		text-transform: capitalize;
		display: grid;
		height: 4rem;
		width: calc(100% - 4rem);
		grid-template-columns: repeat(6, 1fr);
		> div {
			padding: 2rem 2rem 1rem 2rem;
		}
	}
</style>
