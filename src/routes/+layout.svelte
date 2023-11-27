<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import Clouds from '$lib/components/Clouds/Clouds.svelte';
	import NavMenu from '$lib/components/NavMenu/NavMenu.svelte';
	import '$lib/index.scss';
	import { repositoryName } from '$lib/prismicio';
	import { onHydrated, theme } from '$lib/stores/theme';
	import { PrismicPreview } from '@prismicio/svelte/kit';
	import '@splidejs/svelte-splide/css';
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
<Clouds />
<div class={`body contents ${$theme ? 'theme-light' : 'theme-light'}`}>
	<a
		href={`${base}/`}
		class="home font-mono row-center font-mono cursor-pointer py-[5px] px-[15px] m-[2.5px] decoration-none inline-block border-[1px] border-solid border-[var(--border)] rounded-[20px] tracking-wider text-[0.9em] text-[var(--tertiary-text)] duration-[150ms]"
		>Home</a
	>
	<NavMenu />
	<div class="content"><slot /></div>
	<div class="sidebar"></div>
</div>
<PrismicPreview {repositoryName} />

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		flex: 1;
		padding: 0px 0px;
	}
	.home {
		position: fixed;
		bottom: 2rem;
		left: 6rem;
		z-index: 10;
		text-decoration: none;
	}
	.sidebar {
		width: 4rem;
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		border-left: 1px solid black;
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
		margin: 0;
	}
	:global(a) {
		color: var(--main);
		&:hover {
			color: red;
			background-color: hsla(0, 0%, 100%);
		}
	}
</style>
