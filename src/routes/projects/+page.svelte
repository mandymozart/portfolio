<script lang="ts">
	import CommonPage from '$lib/components/CommonPage.svelte';
	import UIcon from '$lib/components/Icon/UIcon.svelte';
	import ProjectCard from '$lib/components/ProjectCard/ProjectCard.svelte';

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
		<div class="projects-list mt-5">
			{#each items as project}
				<ProjectCard {project} />
			{/each}
		</div>
	{/if}
</CommonPage>

<style lang="scss">
	.projects-list {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 20px;

		@media (max-width: 1350px) {
			grid-template-columns: repeat(2, 1fr);
		}
		@media (max-width: 850px) {
			grid-template-columns: repeat(1, 1fr);
		}
	}
</style>
