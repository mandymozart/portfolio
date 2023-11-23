<script>
	import TabTitle from './TabTitle.svelte';

	export let title = 'Title';
</script>

<TabTitle bind:title />
<div class="body">
	<h2 class="font-mono uppercase">{title}</h2>
	<slot />
</div>

<style lang="scss">
	.body {
		margin: 4rem 4rem;
	}
</style>
