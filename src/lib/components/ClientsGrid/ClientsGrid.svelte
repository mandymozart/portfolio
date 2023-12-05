<script lang="ts">
	import Grid from '../Grid/Grid.svelte';
	import Header from '../Header/Header.svelte';
	import ClientItem from './ClientItem.svelte';

	export let clients: any[];
</script>

<Header title={'Clients'} />
<div class="client-list">
	{#each clients as client}
		<ClientItem {client} />
	{/each}
	<Grid />
</div>

<style lang="scss">
	.client-list {
		position: relative;
		margin-left: var(--content-margin-left);
		width: var(--content-width);
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		align-items: center;
		@media (max-width: 1350px) {
			grid-template-columns: repeat(8, 1fr);
		}
		@media (max-width: 850px) {
			grid-template-columns: repeat(4, 1fr);
		}
	}
</style>
