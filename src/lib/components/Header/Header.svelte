<script lang="ts">
	export let title: string | undefined;
</script>

<h3>{title}<span><slot /></span></h3>

<style lang="scss">
	h3 {
		height: 4rem;
		position: sticky;
		padding: 0 2rem;
		border-bottom: 1px solid black;
		display: flex;
		align-items: center;
		justify-content: space-between;
		text-transform: capitalize;
		span {
			font-size: 1rem;
			font-weight: 400;
		}
	}
</style>
