<script lang="ts">
	import { base } from '$app/paths';
	import Grid from '../Grid/Grid.svelte';

	export let project: any;
</script>

<a href={`${base}/projects/${project.uid}`}>
	<span class="title">
		<span class="label title--label" class:relatedIndustry={project.data.industry}>
			{project.data.name}
		</span>
	</span>
	<span class="hidden--desktop hidden--tablet">&mdash;<br /></span>
	<div class="industry">
		<span class="label industry--label">
			{project.data.industry}
		</span>
	</div>
	<div class="type hidden--mobile">
		<span class="label industry--label">{project.data.type}</span>
	</div>
	<Grid />
</a>

<style lang="scss">
	a {
		cursor: pointer;
		display: grid;
		grid-template-columns: 4fr 1fr 1fr;
		text-decoration: none;
		font-size: 1rem;
		margin-left: var(--content-margin-left);
		padding: 0.5rem 0;
		position: relative;
		transition: all 0.2s ease-in;
		.title {
			border-radius: 2rem;
			display: block;

			background: transparent;
		}
		.label {
			padding: 0.5rem 0;
			border-radius: 1rem 2rem 1rem 2rem;
			display: inline-block;
			transition: all 0.2s ease-in;
			&:hover {
				background: white !important;
			}
		}
		&:hover .label {
			background-color: var(--background-color);
			padding: 0.5rem var(--grid-padding);
		}
		> * {
			padding: 0 var(--grid-padding);
		}
		.type {
			text-align: right;
		}
		&:hover {
			background: transparent;
		}

		@media (max-width: 850px) {
			.title,
			.industry,
			.type,
			span {
				display: inline;
				.label {
					padding: 0;
				}
			}
			display: block;
			padding: var(--grid-padding) 0;
		}

		@media (max-width: 1350px) {
			grid-template-columns: 2fr 1fr 1fr;
		}
	}
	:global(.project-row-image-prismic) {
		width: 100%;
		height: auto;
	}
</style>
