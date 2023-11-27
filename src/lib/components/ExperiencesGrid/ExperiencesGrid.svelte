<script lang="ts">
	import ExperienceItem from './ExperienceItem.svelte';

	export let experiences: any[];
	console.log(experiences);
</script>

<div class="experience-list">
	{#each experiences as experience}
		<ExperienceItem {experience} />
	{/each}
</div>

<style lang="scss">
	.experience-list {
		margin: 2rem;
	}
</style>
