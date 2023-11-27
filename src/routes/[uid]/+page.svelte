<script lang="ts">
	import CommonPage from '$lib/components/CommonPage.svelte';
	import UIcon from '$lib/components/Icon/UIcon.svelte';
	import PageContent from '$lib/components/PageContent/PageContent.svelte';

	export let data;
	const { page } = data;
</script>

<CommonPage
	title={page ? JSON.stringify(page.data.title).slice(1, -1) : ''}
	breadcrumbs={[{ label: page ? JSON.stringify(page.data.title).slice(1, -1) : 'Untitled' }]}
>
	{#if page === undefined}
		<div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1">
			<UIcon icon="i-carbon-cube" classes="text-3.5em" />
			<p class="font-300">Could not find anything...</p>
		</div>
	{:else}
		<PageContent content={page.data.content} />
	{/if}
</CommonPage>

<style lang="scss">
</style>
