<script lang="ts">
	import { page } from '$app/stores';
	import NavMenu from '$lib/components/NavMenu/NavMenu.svelte';
	import '$lib/index.scss';
	import { repositoryName } from '$lib/prismicio';
	import { onHydrated, theme } from '$lib/stores/theme';
	import { PrismicPreview } from '@prismicio/svelte/kit';
	import { onMount } from 'svelte';
	import 'uno.css';

	onMount(() => onHydrated());
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

<div class={`body contents ${$theme ? 'theme-light' : 'theme-light'}`}>
	<NavMenu />
	<div class="content"><slot /></div>
</div>
<PrismicPreview {repositoryName} />

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		flex: 1;
		padding: 0px 0px;
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

	:global(p) {
		margin: 0px;
	}

	:global(h1, h2, h3, h4, h5, h6) {
		margin: 5px 0px;
	}
	:global(a) {
		color: var(--main);
		&:hover {
			color: red;
			background-color: hsla(0, 0%, 100%);
		}
	}
</style>
