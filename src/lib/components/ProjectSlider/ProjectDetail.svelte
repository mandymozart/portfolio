<script lang="ts">
	import { PrismicImage, PrismicLink, PrismicRichText } from '@prismicio/svelte';
	import type {
		ClientDocument,
		CollaboratorDocument,
		ProjectDocument,
		SkillDocument
	} from '../../../prismicio-types';
	import CommonPage from '../CommonPage.svelte';
	import SkillItem from '../ExperiencesGrid/SkillItem.svelte';
	import PartnerItem from '../Partner/PartnerItem.svelte';

	export let project: ProjectDocument;
	export let skills: SkillDocument[] | undefined;
	export let partners: CollaboratorDocument[] | ClientDocument[] | undefined;
	const screenshots = project?.data.images ?? [];
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
			<div class="description">
				<PrismicRichText field={project.data.description} />
				<div class="tags">
					{#each project.tags as tag}
						#{tag}&nbsp;
					{/each}
				</div>
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
	</CommonPage>
{/if}

<style lang="scss">
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
	.link {
		position: fixed;
		bottom: 2rem;
		right: 2rem;
		text-align: right;
		background: white;
		a {
			text-decoration: none;
		}
		&:hover {
			background: white;
		}
	}
	.info {
		display: grid;
		width: calc(100% - 4rem);
		grid-template-columns: 3fr 1fr 1fr 1fr;
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
	}
	p {
		margin-bottom: 2rem;
	}
	.screenshot {
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
