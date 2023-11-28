<script lang="ts">
</script>

<div class="swipeable-item">
	<slot />
</div>

<style>
	.swipeable-item {
		width: 100vw;
		height: 100vh;
		flex: 0 0 100%;
		scroll-snap-align: center;
		overflow: hidden;
	}
</style>
