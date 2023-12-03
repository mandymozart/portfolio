<script lang="ts">
	import { PrismicImage, PrismicRichText } from '@prismicio/svelte';
	import type {
		ClientDocument,
		CollaboratorDocument,
		ProjectDocument,
		SkillDocument
	} from '../../../prismicio-types';
	import CommonPage from '../CommonPage.svelte';
	import SkillItem from '../ExperiencesGrid/SkillItem.svelte';
	import Grid from '../Grid/Grid.svelte';
	import PartnerItem from '../Partner/PartnerItem.svelte';
	import VideoReaction from '../Videos/VideoReaction.svelte';

	export let project: ProjectDocument;
	export let skills: SkillDocument[] | undefined;
	export let partners: CollaboratorDocument[] | ClientDocument[] | undefined;
	const screenshots = project?.data.images ?? [];
	console.log(project.data.images);
</script>

{#if project === undefined}
	<div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)]">
		<p class="font-300">Could not load project data...</p>
	</div>
{:else}
	<CommonPage
		title={project.data.name?.toString()}
		subtitle="{project.data.industry} / {project.data.type}"
		breadcrumbs={[
			{ path: '/projects', label: 'Projects' },
			{ label: project.data.name ? project.data.name?.toString() : 'Untitled' }
		]}
	>
		<div class="info font-mono">
			<Grid />
			<div class="description">
				<PrismicRichText field={project.data.description} />
			</div>
			{#if partners?.length > 0}
				<div class="partners">
					<h4>Partners</h4>
					<div class="partner-list">
						{#each partners as partner}
							<PartnerItem {partner} />
						{/each}
					</div>
				</div>
			{/if}

			{#if skills?.length > 0}
				<div class="skills">
					<h4>Tech Stack</h4>
					<div class="skill-list">
						{#each skills as skill}
							<SkillItem {skill} />
						{/each}
					</div>
				</div>
			{/if}
		</div>
		{#if screenshots.length > 0}
			{#each screenshots as item}
				<section style="margin-left: 4rem; width: calc(100% - 4rem);">
					{#if item.desktop}
						<PrismicImage class="screenshot screenshot--desktop" field={item.desktop} />
					{/if}
					{#if item.mobile}
						<PrismicImage class="screenshot screenshot--mobile" field={item.mobile} />
					{/if}
				</section>
			{/each}
		{/if}
		{#if project.data.video_id}
			<div class="video-reaction">
				<VideoReaction videoid={project.data.video_id.toString()} />
			</div>
		{/if}
		<div class="link">
			{#if project.data.link}
				<a href={project.data.link.url} target="_blank" rel="noopener noreferrer" class=" button">
					Visit project
				</a>
			{/if}
		</div>
	</CommonPage>
{/if}

<style lang="scss">
	.info {
		display: grid;
		position: relative;
		width: calc(100% - 4rem);
		margin-left: 4rem;
		grid-template-columns: 3fr 1fr 1fr 1fr;
		@media (max-width: 850px) {
			grid-template-columns: repeat(1, 1fr);
		}

		@media (max-width: 1350px) {
			grid-template-columns: 2fr 1fr 1fr;
		}
		h3.title {
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

		.description {
			padding: 2rem;
			.tags {
			}
		}
		.skills,
		.partners {
			padding: 2rem;
			h4 {
				margin-bottom: 2rem;
			}
			.skill-list,
			.partner-list {
				align-items: center;
				display: grid;
				grid-template-columns: 1fr 1fr;
				gap: 1rem;
			}
		}
		p {
			margin-bottom: 2rem;
		}
	}
	.video-reaction {
		width: auto;
		height: 20rem;
		position: fixed;
		bottom: 0;
		left: 4rem;
		z-index: 10000;
	}
	.link {
		position: fixed;
		bottom: 2rem;
		right: 2rem;
	}
</style>
