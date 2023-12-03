<script lang="ts">
	import type { Breadcrumb } from '$lib/types';
	import Breadcrumbs from './Breadcrumbs/Breadcrumbs.svelte';
	import Footer from './Footer/Footer.svelte';
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
	<Footer />
</div>

<style lang="scss">
	.body {
		font-family: var(--font);
		position: absolute;
		top: 0;
		width: 100%;
		overflow: hidden;
	}
</style>
