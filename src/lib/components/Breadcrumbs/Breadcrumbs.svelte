<script lang="ts">
	import { base } from '$app/paths';
	import type { Breadcrumb } from '$lib/types';
	export let breadcrumbs: Array<Breadcrumb>;
</script>

<div class="breadcrumbs font-mono">
	<a href="{base}/">Home</a>
	&gt;
	{#each breadcrumbs as breadcrumb}
		{#if breadcrumb.path}
			<a href="{base}{breadcrumb.path}">{breadcrumb.label}</a>
			&gt;&nbsp;
		{:else}
			{breadcrumb.label}
		{/if}
	{/each}
</div>

<style lang="scss">
	.breadcrumbs {
		padding: 1rem 2rem 0 2rem;
		text-transform: capitalize;
	}
</style>
