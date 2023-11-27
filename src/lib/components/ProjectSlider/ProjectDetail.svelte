<script lang="ts">
	import { PrismicImage, PrismicLink, PrismicRichText } from '@prismicio/svelte';
	import Breadcrumbs from '../Breadcrumbs/Breadcrumbs.svelte';
	import Chip from '../Chip/Chip.svelte';
	import Header from '../Header/Header.svelte';

	export let project: any;
	const screenshots = project?.data.images ?? [];
</script>

<div class="body w-full">
	{#if project === undefined}
		<div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)]">
			<p class="font-300">Could not load project data...</p>
		</div>
	{:else}
		<Breadcrumbs
			breadcrumbs={[
				{
					path: '/projects',
					label: 'Projects'
				},
				{
					label: project.data.name
				}
			]}
		/>
		<Header title={project.data.name}>{project.data.industry} / {project.data.type}</Header>
		<section class="section-text font-mono">
			<div class="info">
				<div class="description">
					<PrismicRichText field={project.data.description} />
				</div>
				<div class="tags">
					{#each project.tags as tag}
						<Chip>{tag}</Chip>
					{/each}
				</div>
			</div>
		</section>
		{#if screenshots.length > 0}
			{#each screenshots as item}
				<section>
					<PrismicImage class="screenshot screenshot--desktop w-full" field={item.image} />
					{#if item.image.mobile}<PrismicImage
							class="screenshot screenshot--mobile w-full"
							field={item.image.mobile}
						/>{/if}
				</section>
			{/each}
		{/if}

		<div
			class="link font-mono row-center font-mono cursor-pointer py-[5px] px-[15px] m-[2.5px] decoration-none inline-block border-[1px] border-solid border-[var(--border)] rounded-[20px] tracking-wider text-[0.9em] text-[var(--tertiary-text)] duration-[150ms]"
		>
			{#if project.data.link}
				<PrismicLink field={project.data.link}>Visit project</PrismicLink>
			{/if}
		</div>
	{/if}
</div>

<style lang="scss">
	.body h3.title {
		height: 4rem;
		position: sticky;
		padding: 0 2rem;
		border-bottom: 1px solid black;
		display: flex;
		align-items: center;
		justify-content: space-between;
		span {
			font-size: 1rem;
			font-weight: 400;
		}
	}
	.project-info {
		padding: 6rem;
	}
	.section-text {
		padding: 2rem 2rem;
	}
	.link {
		position: fixed;
		bottom: 2rem;
		right: 6rem;
		text-align: right;
		background: white;
		a {
			text-decoration: none;
		}
		&:hover {
			background: white;
		}
	}
	.tags {
		margin-top: 2rem;
	}
	p {
		margin-bottom: 2rem;
	}
	:global(.screenshot) {
		width: 100%;
		display: block;

		@media (max-width: 1350px) {
		}
		@media (max-width: 850px) {
			// &.screenshot--desktop {
			// 	display: none;
			// }
		}
	}
</style>
