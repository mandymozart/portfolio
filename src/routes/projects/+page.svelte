<script lang="ts">
	import CommonPage from '$lib/components/CommonPage.svelte';
	import UIcon from '$lib/components/Icon/UIcon.svelte';
	import ProjectRow from '$lib/components/ProjectRow/ProjectRow.svelte';

	export let data;
	const { items, title } = data;

</script>

<CommonPage {title}>

	{#if items.length === 0}
		<div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1">
			<UIcon icon="i-carbon-cube" classes="text-3.5em" />
			<p class="font-300">Could not find anything...</p>
		</div>
	{:else}
		<div class="projects-list">
			{#each items as project}
				<ProjectRow {project} />
			{/each}
		</div>
	{/if}
</CommonPage>

<style lang="scss">
	.projects-list {


	}
</style>
