<script lang="ts">
	export let grid: 'default' | 'fadeIn' | 'fadeOut' | 'none' = 'default';
</script>

<div class="grid {grid}">
	<div class="column"></div>
	<div class="column column--tablet"></div>
	<div class="column column--tablet"></div>
	<div class="column column--tablet"></div>
	<div class="column column--desktop"></div>
	<div class="column column--desktop"></div>
</div>

<style lang="scss">
	.grid {
		pointer-events: none;
		display: grid;
		position: absolute;
		top: 0;
		z-index: -1;
		opacity: 0.2;
		grid-template-columns: repeat(6, 1fr);
		width: 100%;
		bottom: 0;
		.column {
			box-sizing: border-box;
			border-right: 1px solid transparent;
			border-image: linear-gradient(to bottom, var(--grid-color), var(--grid-color)) 1 100%;
			&:last-of-type {
				border: none;
			}
			/* &:nth-child(1) {
				background-color: rgba(255, 0, 0, 0.4);
			}
			&:nth-child(2) {
				background-color: rgba(255, 255, 0, 0.4);
			}
			&:nth-child(3) {
				background-color: rgba(0, 255, 255, 0.4);
			}
			&:nth-child(4) {
				background-color: rgba(0, 0, 255, 0.4);
			}
			&:nth-child(5) {
				background-color: rgba(0, 0, 0, 0.4);
			}
			&:nth-child(6) {
				background-color: rgba(123, 1, 22, 0.4);
			} */
		}
		&.default {
		}
		&.none .column {
			border-image: none;
		}
		&.fadeOut .column {
			border-image: linear-gradient(to bottom, var(--grid-color), rgba(255, 255, 255, 0)) 1 100%;
		}
		&.fadeIn .column {
			border-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), var(--grid-color)) 1 100%;
		}
		@media (max-width: 1350px) {
			grid-template-columns: repeat(4, 1fr);
			.column {
				&.column--desktop {
					display: none;
				}
			}
		}
		@media (max-width: 850px) {
			grid-template-columns: repeat(1, 1fr);
			.column {
				border: 0;
				&.column--tablet {
					display: none;
				}
				&.column--desktop {
					display: none;
				}
			}
		}
	}
</style>
