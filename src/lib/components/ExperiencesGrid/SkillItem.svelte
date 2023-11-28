<script lang="ts">
	export let skill: any;
</script>

<div>
	<img src={skill.data.logo.url} alt={skill.data.logo.alt} class="w-full" />
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
