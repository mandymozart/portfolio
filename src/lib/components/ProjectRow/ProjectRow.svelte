<script lang="ts">
	import { base } from '$app/paths';
	import { PrismicImage } from '@prismicio/svelte';

	export let project: any;
</script>

<a class="font-mono" href={`${base}/projects/${project.uid}`}>
	<span class="title">
		{project.data.name}
	</span>
	<div class="image">
		<PrismicImage
			class="project-row-image-prismic project-row-image-prismic--mobile"
			field={project.data.images[0].image.mobile}
		/>
	</div>

	<div class="industry">{project.data.industry}</div>
	<div class="type">{project.data.type}</div>
</a>

<style lang="scss">
	a {
		cursor: pointer;
		display: grid;
		grid-template-columns: 3fr 1fr 1fr;
		line-height: 3rem;
		text-decoration: none;
		font-size: 1rem;
		padding: 0 2rem;
		border-bottom: 1px solid black;
		.image {
			display: none;
			img {
				width: 100%;
			}
		}

		@media (max-width: 1350px) {
		}
		@media (max-width: 850px) {
			display: block;
			.image {
				display: block;
			}
		}
	}
	:global(.project-row-image-prismic) {
		width: 100%;
		height: auto;
	}
</style>
