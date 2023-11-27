<script lang="ts">
	import dayjs from 'dayjs';
	import Chip from '../Chip/Chip.svelte';
	export let experience;
</script>

<section class="font-mono flex items-center gap-lg">
	<div class="logo">
		<img src={experience.data.logo.url} alt={experience.data.logo.alt} />
	</div>
	<div class="meta">
		<span class="period"
			>{dayjs(experience.data.startdate).format('YYYY')}&mdash;{dayjs(
				experience.data.enddate
			).format('YYYY')}</span
		><br />
		<span>{experience.data.name}</span>
		<div class="description">{experience.data.shortdescription}</div>
		{#each experience.data.projects as project}
			<Chip>{project.project.uid}</Chip>
		{/each}
	</div>
</section>

<style lang="scss">
	section {
		margin-bottom: 1rem;
	}
	.logo {
		img {
			width: 12rem;
			height: 12rem;
			object-fit: contain;
		}
	}
</style>
