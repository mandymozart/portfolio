<script lang="ts">
	export let client: any;
</script>

<div>
	<img src={client.data.logo.url} alt={client.data.logo.alt} class="w-full" />
</div>

<style lang="scss">
	div {
		padding: 0 var(--grid-padding);
		display: flex;
		flex-direction: column;
	}
	img {
		margin-bottom: 1rem;
	}
</style>
