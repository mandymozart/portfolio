<script lang="ts">
	import UIcon from '$lib/components/Icon/UIcon.svelte';
	import ProjectDetail from '$lib/components/ProjectSlider/ProjectDetail.svelte';
	import TabTitle from '$lib/components/TabTitle.svelte';
	// Default theme
	import '@splidejs/svelte-splide/css';
	import type {
		ClientDocument,
		CollaboratorDocument,
		ProjectDocument,
		SkillDocument
	} from '../../../prismicio-types';

	export let data: {
		project?: ProjectDocument;
		partners: CollaboratorDocument[] | ClientDocument[];
		skills: SkillDocument[];
		methods: SkillDocument[];
	};
	const { project, partners, skills, methods } = data;
</script>

<TabTitle title={project?.data.name?.toString()} />

{#if project === undefined}
	<div>
		<UIcon icon="i-carbon-cube" classes="text-3.5em" />
		<p class="font-300">Could not load project data...</p>
	</div>
{:else}
	<ProjectDetail {project} {partners} {skills} {methods} />
{/if}
