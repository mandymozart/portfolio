<script lang="ts">
	import CommonPage from '$lib/components/CommonPage.svelte';
	import UIcon from '$lib/components/Icon/UIcon.svelte';
	import { PrismicRichText } from '@prismicio/svelte';

	export let data;
	const { page } = data;
</script>

<CommonPage title={page?.data.title}>
	{#if page === undefined}
		<div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1">
			<UIcon icon="i-carbon-cube" classes="text-3.5em" />
			<p class="font-300">Could not find anything...</p>
		</div>
	{:else}
		<div class="font-mono content description">
			<PrismicRichText field={page.data.content} />
		</div>
	{/if}
</CommonPage>

<style lang="scss">
	:global(.content h3) {
		position: sticky;
		top: 0;
		background: #ffffff;
		line-height: 4rem;
		border-bottom: 2px solid var(--text);
	}
	:global(.content.description img) {
		max-width: 25vw;
		height: auto;
	}
</style>
