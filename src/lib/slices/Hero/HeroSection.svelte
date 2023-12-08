<script lang="ts">
	import IntroVideo from '$lib/components/Videos/IntroVideo.svelte';
	import { fade } from 'svelte/transition';

	let togglePlay: () => void;
	let playing: boolean;
	function handleClick() {
		togglePlay();
	}
</script>

<section>
	<IntroVideo videoid={'intro'} bind:togglePlay bind:playing />
	<div id="overlay" class:playing>
		<div class="message">
			I am Tilman Porschütz, a Vienna based digital consultant and frontend developer crafting
			boutique experiences, websites and apps.
		</div>
		<div>
			<button
				transition:fade={{ delay: 250, duration: 300 }}
				id="startButton"
				on:click={handleClick}
				>{#if playing}Pause{:else}Play{/if}</button
			>
		</div>
	</div>
</section>

<style lang="scss">
	section {
		position: relative;
		min-height: 100vh;
		width: var(--content-width);
		margin-left: var(--content-margin-left);
		scroll-snap-align: start;
		border-bottom: 1px solid var(--primary);

		#overlay {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			padding: 4rem;
			display: flex;
			align-items: center;
			gap: 1rem;
			flex-direction: column;
			justify-content: center;
			transition: all 0.7s ease-in-out;
			transform: translateY(0);
			.message {
				font-size: 6rem;
				text-align: left;
			}
			&.playing {
				opacity: 0;
				transform: translateY(3rem);
			}
			@media (max-width: 1350px) {
				margin: 6rem;
			}
			@media (max-width: 850px) {
				margin: 2rem;
			}
		}
		button {
			cursor: pointer;
			border: 0;
			border-radius: 2rem;
			padding: 0.5rem 1rem;
		}
	}
</style>
