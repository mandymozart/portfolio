<script lang="ts">
	export let client: any;
	console.log(client);
</script>

<div>
	<img src={client.data.logo.url} alt={client.data.logo.alt} class="w-full" />
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
