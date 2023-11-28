<script lang="ts">
	import Grid from '$lib/components/Grid/Grid.svelte';
	import IntroVideo from '$lib/components/Videos/IntroVideo.svelte';
	import type { Content } from '@prismicio/client';

	export let slice: Content.HeroSlice;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<IntroVideo
		title={slice.primary.title}
		message={slice.primary.message}
		videoid={slice.primary.videoid}
	/>
	<Grid fadeIn={true} />
</section>

<style lang="scss">
	section {
		position: relative;
		height: 100vh;
		width: 100vw;
		scroll-snap-align: start;
		border-top: 1px solid black;
		&:first-of-type {
			border-bottom: 1px solid black;
			border-top: none;
		}
	}
</style>
