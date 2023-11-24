<script lang="ts">
	import Chip from '../Chip/Chip.svelte';

	export let skills: any[];
	console.log(skills);
</script>

<section class="grid row-a">
	<h3>Skills</h3>
	<div class="skills-list">
		{#each skills as skill}
			<Chip>{skill.data.name}</Chip>
			<img src={skill.data.logo.url} alt={skill.data.logo.alt} class="w-full" />
		{/each}
	</div>
</section>

<style lang="scss">
	h3 {
		position: sticky;
		line-height: 4rem;
	}
	.skill-list {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
		gap: 2rem;
		align-items: center;
		/* img {
            width: 100%;
        } */
	}
</style>
