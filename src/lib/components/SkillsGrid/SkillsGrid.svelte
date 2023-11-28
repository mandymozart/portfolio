<script lang="ts">
	import Header from '../Header/Header.svelte';
	import SkillItem from './SkillItem.svelte';

	export let skills: any[];
	let textOnly: boolean = false;
	const toggleDisplay = () => {
		textOnly = !textOnly;
	};
</script>

<Header title={'Skills'} />
<div class="skill-list {textOnly ? 'textOnly' : ''}">
	<!-- <button on:click={() => toggleDisplay()}
		>{#if textOnly}List{:else}Text{/if}</button
	> -->
	{#each skills as skill}
		<SkillItem {skill} {textOnly} />
	{/each}
</div>

<style lang="scss">
	.skill-list {
		position: relative;
		margin: 2rem;
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		gap: 2rem;
		align-items: center;
		img {
			max-width: 100%;
		}
		button {
			position: absolute;
			top: 0;
			right: 0;
		}
		&.textOnly {
			display: block;
		}
	}
</style>
