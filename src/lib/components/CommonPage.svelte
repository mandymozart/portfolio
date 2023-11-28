<script lang="ts">
	import type { Breadcrumb } from '$lib/types';
	import Breadcrumbs from './Breadcrumbs/Breadcrumbs.svelte';
	import Grid from './Grid/Grid.svelte';
	import Header from './Header/Header.svelte';
	import TabTitle from './TabTitle.svelte';

	export let title: string | undefined = 'Title';
	export let subtitle: string | undefined = '';

	export let breadcrumbs: Breadcrumb[] | [];
</script>

<TabTitle bind:title />
<div class="body">
	<Breadcrumbs {breadcrumbs} />
	<Header {title} {subtitle}></Header>

	<slot />
</div>
<Grid />

<style lang="scss">
	.body {
		margin: 0 0 8rem 4rem;
		position: absolute;
		top: 0;
		width: calc(100% - 4rem);
		overflow: hidden;
	}
</style>
