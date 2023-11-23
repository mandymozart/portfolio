<script lang="ts">
	import { PrismicRichText } from '@prismicio/svelte';
	export let page;
</script>

<section class="hero font-mono flex justify-center items-center flex-col align-center">
	<h1>{page.data.title}</h1>
	<PrismicRichText field={page.data.content} />
</section>

<style lang="scss">
	.hero {
		padding: 6rem;
	}
</style>
