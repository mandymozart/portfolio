<script lang="ts">
	export let skill: any;
	export let textOnly: boolean;
</script>

<div class="font-mono {textOnly ? 'textOnly' : ''}">
	{#if !textOnly}
		<img src={skill.data.logo.url} alt={skill.data.logo.alt} class="w-full" />
	{:else}
		{skill.data.name},&nbsp;
	{/if}
</div>

<style lang="scss">
	div {
		display: flex;
		padding: 0 var(--grid-padding);
		flex-direction: column;
		&.textOnly {
			display: inline;
		}
	}
	img {
		margin-bottom: 1rem;
	}
</style>
