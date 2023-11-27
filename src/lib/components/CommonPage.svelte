<script lang="ts">
	import type { Breadcrumb } from '$lib/types';
	import Breadcrumbs from './Breadcrumbs/Breadcrumbs.svelte';
	import Header from './Header/Header.svelte';
	import TabTitle from './TabTitle.svelte';

	export let title: string = 'Title';

	export let breadcrumbs: Breadcrumb[];
</script>

<TabTitle bind:title />
<div class="body">
	<Breadcrumbs {breadcrumbs} />
	<Header {title}></Header>
	<slot />
</div>

<style lang="scss">
	.body {
		margin: 0 4rem 6rem 4rem;
	}
</style>
