<script lang="ts">
	import { PrismicRichText } from '@prismicio/svelte';

	export let content: any;
</script>

<div class="content description">
	<PrismicRichText field={content} />
</div>

<style lang="scss">
	:global(.content.description h3) {
		line-height: 4rem;
		padding: 0 2rem;
		position: sticky;
	}
	:global(.content.description p) {
		padding: 0 2rem;
	}
	:global(.content.description img) {
		max-width: 25vw;
		height: auto;
	}
</style>
