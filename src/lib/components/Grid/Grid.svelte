<script lang="ts">
	export let fade: boolean = false;
	export let fadeIn: boolean = false;
	export let fadeOut: boolean = false;
</script>

<div class="grid" class:fadeIn class:fadeOut class:fade>
	<div class="column"></div>
	<div class="column"></div>
	<div class="column"></div>
	<div class="column"></div>
	<div class="column"></div>
	<div class="column"></div>
</div>

<style lang="scss">
	:root {
		--grid-color: rgba(65, 65, 65, 0.539);
	}
	.grid {
		pointer-events: none;
		display: grid;
		position: absolute;
		top: 0;
		opacity: 0.2;
		left: 4rem;
		grid-template-columns: repeat(6, 1fr);
		width: calc(100% - 8rem);
		height: 100vh;
		.column {
			box-sizing: border-box;
			border-right: 1px solid transparent;
			border-image: linear-gradient(to bottom, var(--grid-color), var(--grid-color)) 1 100%;
			&:last-of-type {
				border: 0;
			}
		}
		&.fade .column {
			border-image: linear-gradient(
				to bottom,
				var(--grid-color) 0%,
				rgba(255, 255, 255, 0) 25%,
				rgba(255, 255, 255, 0) 75%,
				var(--grid-color) 100%
			);
		}
		&.fadeOut .column {
			border-image: linear-gradient(to bottom, var(--grid-color), rgba(255, 255, 255, 0)) 1 100%;
		}
		&.fadeIn .column {
			border-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), var(--grid-color)) 1 100%;
		}
	}
</style>
