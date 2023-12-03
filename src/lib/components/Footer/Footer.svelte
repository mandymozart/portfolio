<script lang="ts">
	import Grid from '../Grid/Grid.svelte';
</script>

<footer>
	<div>Built with Svelte & SvelteKit.</div>
	<div>Deployed on Github Pages</div>
	<div></div>
	<div></div>
	<div></div>
	<div style="text-align: right;">&copy; 2023</div>
	<Grid grid="fadeOut" />
</footer>

<style lang="scss">
	footer {
		margin-left: 4rem;
		width: calc(100% - 4rem);
		position: relative;
		grid-template-columns: repeat(6, 1fr);
		display: grid;
		position: relative;
		div {
			padding: 4rem 2rem;
		}
		@media (max-width: 1350px) {
			grid-template-columns: repeat(4, 1fr);
		}
		@media (max-width: 850px) {
			grid-template-columns: repeat(1, 1fr);
		}
	}
</style>
