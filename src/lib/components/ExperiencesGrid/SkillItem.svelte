<script lang="ts">
	export let skill: any;
</script>

<div>
	{#if skill.data.logo.url}
		<img src={skill.data.logo.url} alt={skill.data.logo.alt} />
	{:else}
		{skill.data.name}
	{/if}
</div>

<style lang="scss">
	div {
		display: flex;
		flex-direction: column;
	}
	img {
		margin-bottom: 1rem;
		width: 100%;
	}
</style>
