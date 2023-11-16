<script lang="ts">
	import { base } from '$app/paths';
	import { PrismicLink } from '@prismicio/svelte';
	import Card from '../Card/Card.svelte';
	import CardDivider from '../Card/CardDivider.svelte';
	import Chip from '../Chip/Chip.svelte';

	export let project: any;
</script>

<Card href={`${base}/projects/${project.uid}`}>
	<div class="row justify-between items-center">
		{project.data.name}
		<div class="row">
			<PrismicLink field={project.data.link}>Visit website</PrismicLink>
		</div>
	</div>
	<CardDivider />
	<div
		class="row m-b-15px justify-between text-[var(--secondary-text)] text-0.9em font-italic font-300"
	>
		<p>{project.data.type}</p>
	</div>
	<p class="text-[0.95em] text-[var(--secondary-text)] font-300 m-t-20px m-b-40px flex-1">
		{project.data.description}
	</p>
	<div class="row justify-between text-0.8em font-400">
		<Chip>2000</Chip>
	</div>
	<CardDivider />
	<div class="row">
		Tags
	</div>
</Card>
