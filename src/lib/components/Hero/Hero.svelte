<script lang="ts">
	import { PrismicRichText } from '@prismicio/svelte';
	import Clouds from '../Clouds/Clouds.svelte';
	export let page;
</script>

<section class="font-mono flex justify-center items-center flex-col align-center">
	<div class="overlay flex justify-center items-center flex-col align-center">
		<div class="inner flex justify-center items-center flex-col align-center">
			<h1>{page.data.title}</h1>
			<PrismicRichText field={page.data.content} />
		</div>
	</div>
	<Clouds />
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
	section {
		background: rgb(131, 58, 180);
		background: linear-gradient(
			180deg,
			rgba(131, 58, 180, 1) 0%,
			rgba(253, 29, 29, 1) 50%,
			rgba(252, 176, 69, 1) 100%
		);
		/* background: rgb(30, 72, 119);
		background: linear-gradient(
			180deg,
			rgba(50, 102, 150, 1) 0%,
			rgba(69, 132, 180, 1) 50%,
			rgba(266, 255, 255, 1) 100%
		); */
	}
</style>
