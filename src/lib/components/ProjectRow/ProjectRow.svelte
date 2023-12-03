<script lang="ts">
	import { base } from '$app/paths';
	import { PrismicImage } from '@prismicio/svelte';
	import Grid from '../Grid/Grid.svelte';

	export let project: any;
</script>

<a class="font-mono" href={`${base}/projects/${project.uid}`}>
	<span class="title">
		<span class="label title--label" class:relatedIndustry={project.data.industry}>
			{project.data.name}
		</span>
	</span>
	<div class="image">
		<PrismicImage
			class="project-row-image-prismic project-row-image-prismic--mobile"
			field={project.data.images[0].image.mobile}
		/>
	</div>
	<div class="industry">
		<span class="label industry--label">
			{project.data.industry}
		</span>
	</div>
	<div class="type"><span class="label industry--label">{project.data.type}</span></div>
	<Grid />
</a>

<style lang="scss">
	a {
		cursor: pointer;
		display: grid;
		grid-template-columns: 4fr 1fr 1fr;
		text-decoration: none;
		font-size: 1rem;
		margin-left: 4rem;
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
			padding: 0.5rem 2rem;
		}
		> * {
			padding: 0 2rem;
		}
		.type {
			text-align: right;
		}
		.image {
			display: none;
			img {
				width: 100%;
			}
		}
		&:hover {
			background: transparent;
		}

		@media (max-width: 850px) {
			grid-template-columns: repeat(1, 1fr);
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
