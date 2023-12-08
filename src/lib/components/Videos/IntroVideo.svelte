<script lang="ts">
	import { base } from '$app/paths';
	import type { KeyTextField } from '@prismicio/client';
	import { fade } from 'svelte/transition';

	export let videoid: KeyTextField = 'sample';
	let duration: number;
	let currentTime: number;
	// $: currentTime, console.log(duration, currentTime);
	let video: HTMLVideoElement;
	let caption: string = '';
	export const end = () => {
		video.pause();
		playing = false;
	};
	export let onEnded = () => {
		playing = false;
	};
	$: caption, console.log(caption);
	let onCanPlay = () => {
		video.textTracks[0].mode = 'hidden'; // must occur before cues is retrieved
		let cues = video.textTracks[0].cues;
		for (var i in cues) {
			var cue = cues[parseInt(i)];
			if (parseInt(i) !== cues.length - 1) {
				if (typeof cue !== 'undefined') {
					cue.onenter = cueEnter;
					cue.onexit = cueExit;
				}
			}
		}
	};
	export let playing = false;
	export const togglePlay = () => {
		if (playing) {
			video.pause();
			playing = false;
		} else {
			onCanPlay();
			video.play();

			playing = true;
		}
	};

	let visible = false;

	let replaceText = (fragment: DocumentFragment) => {
		const regex = /<b[^>]*>(.*?)<\/b>/g;

		// Initialize an array to store matched content
		const matches = [];

		// Use a loop to find all matches
		let match;
		while ((match = regex.exec(fragment.toString())) !== null) {
			matches.push(match[1]);
		}
		// Now 'matches' contains an array of captured text inside <b> tag
		caption = matches[0];
	};

	let cueEnter = (e: any) => {
		replaceText(e.target.text);
		visible = true;
	};
	let cueExit = () => {
		visible = false;
	};
</script>

<div class="stage">
	{#if videoid}
		<video
			transition:fade={{ delay: 250, duration: 300 }}
			bind:this={video}
			bind:currentTime
			bind:duration
			on:ended={onEnded}
			on:canplay={onCanPlay}
			id="video"
			playsinline
			class:playing
		>
			<source src="{base}/videos/{videoid}.webm" type="video/webm" />
			<source src="{base}/videos/{videoid}.mov" type={'video/mp4; codecs="hvc1"'} />
			<track default kind="captions" srclang="en" src="{base}/videos/{videoid}.vtt" />
		</video>
	{/if}
	<div class="caption" class:visible>{caption}</div>
</div>

<style lang="scss">
	.stage {
		position: absolute;
		margin: auto;
		width: 100%;
		height: 100%;
		overflow: hidden;
		clip-path: 0 0;
		transform: translatez(0);
	}
	video {
		opacity: 0;
		transform: translatez(0);
		transition: all 2s ease-in-out;
		transform: translateY(5rem);
		position: absolute;
		top: -100%;
		bottom: -100%;
		left: -100%;
		right: -100%;
		filter: blur(15px);
		object-fit: cover;
		transform: scale(1.06); /* scale up to hide the edge blur */
		margin: auto;
		min-width: 100%;
		min-height: 100%;
		@media (max-width: 1350px) {
			--grid-padding: 2rem;
		}

		@media (max-width: 850px) {
			max-width: 100%;
			max-height: 100%;
		}
		&.playing {
			opacity: 1;
			filter: blur(0px);
			transform: translateY(0) scale(1);
		}
	}
	.caption {
		opacity: 0;
		position: absolute;
		bottom: 2rem;
		left: 6rem;
		right: 2rem;
		font-family: var(--font-mono);
		text-align: center;
		color: rgb(255, 230, 0);
		font-size: 3rem;
		&.visible {
			opacity: 1;
		}
	}
</style>
