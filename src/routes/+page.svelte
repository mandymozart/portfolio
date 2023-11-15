<script lang="ts">
	import ProjectSlider from '$lib/components/ProjectSlider/ProjectSlider.svelte';
	import { HOME, TITLE_SUFFIX } from '$lib/params';
	import { useTitle } from '$lib/utils/helpers';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';

	const { title } = HOME;

	export let data;
	const { projects } = data;

	
</script>

<svelte:head>
	<title>{useTitle(title, TITLE_SUFFIX)}</title>
</svelte:head>
<main>
	<Splide options={{direction:'ttb', height:'100vh' ,
	wheel:true}}>
		
	{#if projects.length === 0}
	<SplideSlide class="flex items-center justify-center w-full h-screen">
		<p class="font-300">Could not find anything...</p>
	</SplideSlide>
	{:else}
		{#each projects as project}
		<SplideSlide >
			
			<ProjectSlider {project} />
		</SplideSlide>
		{/each}
	{/if}
</Splide>
</main>

	
