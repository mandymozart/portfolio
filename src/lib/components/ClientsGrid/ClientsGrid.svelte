<script lang="ts">
	import Header from '../Header/Header.svelte';
	import ClientItem from './ClientItem.svelte';

	export let clients: any[];
	console.log(clients);
</script>

<Header title={'Clients'} />
<div class="client-list">
	{#each clients as client}
		<ClientItem {client} />
	{/each}
</div>

<style lang="scss">
	.client-list {
		margin: 2rem;
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		gap: 2rem;
		align-items: center;
		@media (max-width: 1350px) {
			grid-template-columns: repeat(6, 1fr);
		}
		@media (max-width: 850px) {
			grid-template-columns: repeat(4, 1fr);
			gap: 1rem;
		}
	}
</style>
