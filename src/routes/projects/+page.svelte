<script lang="ts">
	import CommonPage from '$lib/components/CommonPage.svelte';
	import UIcon from '$lib/components/Icon/UIcon.svelte';
	import ProjectRow from '$lib/components/ProjectRow/ProjectRow.svelte';
	import { PrismicImage } from '@prismicio/svelte';

	export let data;
	const { projects } = data;

	let uid: string = '';

	const handleMouseOver = (newUid: string) => {
		uid = newUid;
	};
</script>

<CommonPage title={'Projects'} breadcrumbs={[{ label: 'Projects' }]}>
	{#if projects.length === 0}
		<div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1">
			<UIcon icon="i-carbon-cube" classes="text-3.5em" />
			<p class="font-300">Could not find anything...</p>
		</div>
	{:else}
		<div class="preview-list">
			{#each projects as project}
				{#if project.data.images[0]?.image}
					<div class:active={uid === project.uid} class:preview={true}>
						<PrismicImage field={project.data.images[0].image} class={'preview-image'} />
					</div>
				{/if}
			{/each}
		</div>
		<div class="project-list">
			{#each projects as project}
				<div
					on:mouseover={() => handleMouseOver(project.uid)}
					role="listitem"
					on:focus={() => handleMouseOver(project.uid)}
				>
					<ProjectRow {project} />
				</div>
			{/each}
		</div>
	{/if}
</CommonPage>

<style lang="scss">
	.project-list {
		z-index: 1000;
		position: relative;
		width: 100%;
	}
	.preview-list {
		z-index: 0;
		position: fixed;
		top: 6rem;
		bottom: 6rem;
		right: 2rem;
		left: 6rem;
		display: flex;
		div {
			display: none;
		}
	}
	:global(.preview-list) {
		.active {
			display: block;
		}
	}
	:global(.preview-image) {
		width: calc(100vw - 10rem);
		height: calc(100vh - 10rem);
		object-fit: contain;
	}
</style>
