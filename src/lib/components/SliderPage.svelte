<script>
	import TabTitle from './TabTitle.svelte';

	export let title = 'Title';
</script>

<TabTitle bind:title />
<div class="body">
		<slot />
</div>
<style lang="scss">
	.body {
		margin: 0 4rem;
	}
</style>