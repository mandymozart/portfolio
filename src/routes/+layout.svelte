<script lang="ts">
	import { page } from '$app/stores';

	import '$lib/assets/scss/global.scss';
	import Clouds from '$lib/components/Clouds/Clouds.svelte';
	import NavMenu from '$lib/components/NavMenu/NavMenu.svelte';
	import { repositoryName } from '$lib/prismicio';
	import { onHydrated, theme } from '$lib/stores/theme';
	import { PrismicPreview } from '@prismicio/svelte/kit';

	import { onMount } from 'svelte';
	import 'uno.css';

	import { preloadCode } from '$app/navigation';
	import Cursor from '$lib/components/Cursor/Cursor.svelte';
	import { navItems } from '$lib/params.js';
	import { isMenuOpen } from '$lib/stores/store';
	import { fade } from 'svelte/transition';

	export let data;

	const transitionIn = { delay: 150, duration: 150 };
	const transitionOut = { duration: 100 };

	onMount(() => {
		onHydrated();
		const navRoutes = navItems.map((item) => item.route);
		preloadCode(...navRoutes);
	});
</script>

<svelte:head>
	<title>{$page.data.title}</title>
	{#if $page.data.meta_description}
		<meta name="description" content={$page.data.meta_description} />
	{/if}
	{#if $page.data.meta_title}
		<meta name="og:title" content={$page.data.meta_title} />
	{/if}
	{#if $page.data.meta_image}
		<meta name="og:image" content={$page.data.meta_image.url} />
		<meta name="twitter:card" content="summary_large_image" />
	{/if}
</svelte:head>
<Clouds />
<div
	class={`body contents layout ${$theme ? 'theme-light' : 'theme-light'}`}
	class:open={$isMenuOpen}
>
	<NavMenu />
	{#key data.path}
		<main id="main" tabindex="-1" in:fade={transitionIn} out:fade={transitionOut} class="content">
			<slot />
		</main>
	{/key}
</div>

<Cursor />

<PrismicPreview {repositoryName} />

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		flex: 1;
		padding: 0px 0px;
		width: 100%;
		height: 100vh;
		overflow: hidden;
	}
	.body {
		margin: 0px;
		background-color: var(--main);
		color: var(--main-text);
		font-family: var(--text-f);
		display: flex;
		flex-direction: column;
		transition-duration: 200ms;

		letter-spacing: 1px;

		min-height: 100vh;
	}
</style>
