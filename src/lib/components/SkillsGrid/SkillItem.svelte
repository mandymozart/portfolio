<script lang="ts">
	import type { SkillDocument } from '../../../prismicio-types';

	export let skill: SkillDocument;
	export let textOnly: boolean;
</script>

<div class="font-mono {textOnly ? 'textOnly' : ''}">
	{#if skill.data.logo.url}
		<img src={skill.data.logo.url} alt={skill.data.logo.alt} class="w-full" />
	{:else}
		{skill.data.name}
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
		/* filter: brightness(0.5) saturate(0%);
		&:hover {
			filter: brightness(1) saturate(100%);
		} */
	}
</style>
