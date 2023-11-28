<script lang="ts">
	export let title: string | undefined;
	export let subtitle: string | undefined;
</script>

<h3 class="font-mono">
	<div>
		{title}
		<span class="font-mono"><slot />{subtitle ? subtitle : ''}</span>
	</div>
</h3>

<style lang="scss">
	h3 {
		/* height: 4rem; */
		left: 4rem;
		width: 100%;
		/* border-bottom: 1px solid black; */

		> div {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 2rem 2rem 1rem 2rem;
		}
		span {
			font-size: 1rem;
			font-weight: 400;
		}
	}
</style>
