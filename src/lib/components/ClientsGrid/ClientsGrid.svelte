<script lang="ts">
	export let clients: any[];
	console.log(clients);
</script>

<section class="grid row-a">
	<h3>Clients</h3>
	<div class="client-list">
		{#each clients as client}
			<img src={client.data.logo.url} alt={client.data.logo.alt} class="w-full" />
		{/each}
	</div>
</section>

<style lang="scss">
	h3 {
		position: sticky;
		line-height: 4rem;
	}
	.client-list {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
		gap: 2rem;
		align-items: center;
		/* img {
            width: 100%;
        } */
	}
</style>
