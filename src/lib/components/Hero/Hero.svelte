<script lang="ts">
	import { PrismicRichText } from '@prismicio/svelte';
	export let page;
</script>

<section class="font-mono flex justify-center items-center flex-col align-center">
	<div class="overlay flex justify-center items-center flex-col align-center">
		<div class="inner flex justify-center items-center flex-col align-center">
			<h1>{page.data.title}</h1>
			<PrismicRichText field={page.data.content} />
		</div>
	</div>
</section>

<style lang="scss">
	.overlay {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		.inner {
			padding: 6rem;
		}
	}
</style>
