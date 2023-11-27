<script lang="ts">
	import Chip from '../Chip/Chip.svelte';

	export let skill: any;
</script>

<div>
	<img src={skill.data.logo.url} alt={skill.data.logo.alt} class="w-full" />
	<Chip>{skill.data.name}</Chip>
</div>

<style lang="scss">
	div {
		display: flex;
		flex-direction: column;
	}
	img {
		margin-bottom: 1rem;
	}
</style>
