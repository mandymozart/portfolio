<script lang="ts">
	import { page } from '$app/stores';

	import '$lib/assets/scss/global.scss';
	import Clouds from '$lib/components/Clouds/Clouds.svelte';
	import NavMenu from '$lib/components/NavMenu/NavMenu.svelte';
	import { repositoryName } from '$lib/prismicio';
	import { onHydrated } from '$lib/stores/theme';
	import { PrismicPreview } from '@prismicio/svelte/kit';

	import { onMount } from 'svelte';
	import 'uno.css';

	import { afterNavigate, beforeNavigate, preloadCode } from '$app/navigation';
	import { navItems } from '$lib/params.js';
	import { isMenuOpen } from '$lib/stores/store';
	import { fade } from 'svelte/transition';

	export let data;
	let loading: boolean;

	const transitionIn = { delay: 400, duration: 2000 };
	const transitionOut = { duration: 400 };

	beforeNavigate((navigation) => {
		loading = true;
	});
	afterNavigate(() => {
		loading = false;
	});

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
<div class={'layout'} class:loading class:open={$isMenuOpen}>
	<NavMenu />
	<div class="loader">
		<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
			><path
				d="M20.27,4.74a4.93,4.93,0,0,1,1.52,4.61,5.32,5.32,0,0,1-4.1,4.51,5.12,5.12,0,0,1-5.2-1.5,5.53,5.53,0,0,0,6.13-1.48A5.66,5.66,0,0,0,20.27,4.74ZM12.32,11.53a5.49,5.49,0,0,0-1.47-6.2A5.57,5.57,0,0,0,4.71,3.72,5.17,5.17,0,0,1,9.53,2.2,5.52,5.52,0,0,1,13.9,6.45,5.28,5.28,0,0,1,12.32,11.53ZM19.2,20.29a4.92,4.92,0,0,1-4.72,1.49,5.32,5.32,0,0,1-4.34-4.05A5.2,5.2,0,0,1,11.6,12.5a5.6,5.6,0,0,0,1.51,6.13A5.63,5.63,0,0,0,19.2,20.29ZM3.79,19.38A5.18,5.18,0,0,1,2.32,14a5.3,5.3,0,0,1,4.59-4,5,5,0,0,1,4.58,1.61,5.55,5.55,0,0,0-6.32,1.69A5.46,5.46,0,0,0,3.79,19.38ZM12.23,12a5.11,5.11,0,0,0,3.66-5,5.75,5.75,0,0,0-3.18-6,5,5,0,0,1,4.42,2.3,5.21,5.21,0,0,1,.24,5.92A5.4,5.4,0,0,1,12.23,12ZM11.76,12a5.18,5.18,0,0,0-3.68,5.09,5.58,5.58,0,0,0,3.19,5.79c-1,.35-2.9-.46-4-1.68A5.51,5.51,0,0,1,11.76,12ZM23,12.63a5.07,5.07,0,0,1-2.35,4.52,5.23,5.23,0,0,1-5.91.2,5.24,5.24,0,0,1-2.67-4.77,5.51,5.51,0,0,0,5.45,3.33A5.52,5.52,0,0,0,23,12.63ZM1,11.23a5,5,0,0,1,2.49-4.5,5.23,5.23,0,0,1,5.81-.06,5.3,5.3,0,0,1,2.61,4.74A5.56,5.56,0,0,0,6.56,8.06,5.71,5.71,0,0,0,1,11.23Z"
				><animateTransform
					attributeName="transform"
					type="rotate"
					dur="1.5s"
					values="0 12 12;360 12 12"
					repeatCount="indefinite"
				/></path
			></svg
		>
	</div>
	{#key data.path}
		<main id="main" tabindex="-1" in:fade={transitionIn} out:fade={transitionOut} class="content">
			<slot />
		</main>
	{/key}
</div>

<!-- <Cursor /> -->

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
	.layout {
		margin: 0px;
		display: flex;
		flex-direction: column;
		letter-spacing: 0.1;

		min-height: 100vh;
		.loader {
			transition: opacity 0.3s linear;
			opacity: 0;
			pointer-events: none;
			position: fixed;
			top: 1rem;
			left: 2rem;
			z-index: 100001;
			svg {
				width: 2rem;
			}
		}
		&.loading {
			.loader {
				opacity: 1;
			}
		}
	}
</style>
