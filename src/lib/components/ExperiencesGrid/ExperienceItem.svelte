<script lang="ts">
	import { base } from '$app/paths';
	import dayjs from 'dayjs';
	import type { ExperienceDocument, ProjectDocument } from '../../../prismicio-types';
	export let experience: ExperienceDocument;
	export let projects: ProjectDocument[] | undefined;
	const getProject = (uid: string) => {
		if (projects) {
			let pro: ProjectDocument | undefined = projects.find((p) => {
				if (p.uid === uid) {
					return p;
				} else {
					return;
				}
			});
			if (pro) return pro;
		} else {
			return undefined;
		}
	};
</script>

<div class="item font-mono">
	<div class="logo">
		<img src={experience.data.logo.url} alt={experience.data.logo.alt} />
	</div>
	<div class="meta">
		<span class="period"
			>{dayjs(experience.data.startdate).format('YYYY')}&mdash;{dayjs(
				experience.data.enddate
			).format('YYYY')}</span
		>
		/ {experience.data.contract}<br />

		<span>{experience.data.name}</span>
		<div class="description">{experience.data.shortdescription}</div>
	</div>
	<div class="related">
		{#each experience.data.projects as project}
			{#if getProject(project.project.uid)}
				<a href="{base}/projects/{project.project.uid}"
					>{getProject(project.project.uid)?.data.name}</a
				>,
			{/if}
		{/each}
	</div>
</div>

<style lang="scss">
	.item {
		display: grid;
		grid-template-columns: 1fr 3fr 2fr;
	}
	.logo {
		&:after {
			background: black;
			border-radius: 2rem;
		}
		padding: 2rem 4rem;
		border-right: 1px solid black;
		height: 10rem;
		img {
			width: 100%;
			height: auto;
			object-fit: contain;
		}
	}
	.meta {
		padding: 2rem;
	}
	.related {
		padding: 2rem;
		a img {
			width: 100% !important;
		}
	}
</style>
