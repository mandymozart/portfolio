<script>
	import { onMount } from 'svelte';

	export let size = 20;
	export let color = 'black';
	export let shape = 'circle';
	export let mixBlendMode = 'none';

	let x = -100;
	let y = -100;

	const cx = size / 2;
	const cy = size / 2;

	onMount(() => {
		/**
		 * initialises the cursor
		 *
		 */
		const initCursor = () => {
			document.addEventListener('mousemove', (e) => {
				x = e.clientX;
				y = e.clientY;
			});
			const hoverables = document.querySelectorAll('.hoverable, a, button');
			hoverables.forEach((hoverable) => {
				hoverable.addEventListener('mouseenter', () => {
					size += 20;
					document.body.style.cursor = 'none';
				});
				hoverable.addEventListener('mouseleave', () => {
					size -= 20;
				});
			});
		};

		initCursor();
	});
</script>

<div
	class="custom-cursor {shape}"
	style="left: {x - cx}px; top: {y -
		cy}px;--size:{size}px; --mix-blend-mode: {mixBlendMode}; --background-color: {color}"
>
	<div class="is-blend cursor cursor__default" style="transform: translate3d({x}, {y}, 0px);">
		<div class="cursor__ico" style="transform: scale(1);">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				xmlns:xlink="http://www.w3.org/1999/xlink"
			>
				<circle cx="15.6" cy="11.6" r="2.4" fill="#000"></circle><path
					d="M12 24c6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12C5.373 0 0 5.373 0 12c0 6.628 5.373 12 12 12zm0-21.488c4.599 0 8.327 3.208 8.327 7.166 0 1.978-.932 3.77-2.439 5.066.646.74.904 1.586.592 2.242-.448.94-1.906 1.164-3.384.576V20.5c0 .545-.467.988-1.043.988h-.033c-.48 0-.88-.31-1.002-.728a1.032 1.032 0 01-1.002.728h-.033c-.48 0-.88-.31-1.001-.728a1.032 1.032 0 01-1.002.728h-.033c-.576 0-1.043-.443-1.043-.988v-2.938c-1.478.588-2.937.364-3.384-.576-.313-.656-.054-1.503.592-2.242-1.507-1.296-2.438-3.088-2.438-5.066C3.674 5.72 7.4 2.512 12 2.512z"
					fill="#000"
				></path><path
					d="M10.7 15.764c-.2.28-.18.707.043.95l.073.077a.546.546 0 00.075.066c.221.166.518.117.697-.133l.378-.528.339.477c.158.223.405.295.624.21a.578.578 0 00.216-.148c.248-.268.276-.733.062-1.034l-.743-1.048a.557.557 0 00-.347-.232c-.013-.005-.026-.005-.04-.01a.451.451 0 00-.309.012.547.547 0 00-.244.192l-.824 1.15zM8.187 10.847a.393.393 0 11-.557.557.393.393 0 01.557-.557zM14.893 10.847a.394.394 0 11-.557.557.394.394 0 01.557-.557z"
					fill="#000"
				></path><circle cx="8.4" cy="11.6" r="2.4" fill="#000"></circle>
			</svg>
		</div>
		<div class="cursor__point" style="transform: scale(0);"></div>
	</div>
</div>

<style>
	.custom-cursor {
		--background-color: 'black';
		--mix-blend-mode: 'none';
		--size: 20;
		background-color: var(--background-color);
		mix-blend-mode: var(--mix-blend-mode);
		width: var(--size);
		height: var(--size);
		position: fixed;
		border-radius: 50%;
		pointer-events: none;
		z-index: 99999;
		/* Customize your cursor styles here */
		transition: all 0.2s cubic-bezier(0.28, 0.8, 0.36, 1);
		cursor: none;
	}

	.custom-cursor.square {
		border-radius: 0;
	}
	.cursor-none {
		cursor: none;
	}
</style>
