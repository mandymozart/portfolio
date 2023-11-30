<script lang="ts">
	import { page } from '$app/stores';

	import { base } from '$app/paths';
	import { navItems } from '$lib/params';

	let currentRoute = '/';

	$: {
		if ($page) {
			currentRoute = $page.url.pathname;

			// console.log(currentRoute);
		}
	}
</script>

<div class="nav-menu">
	<nav class="flex flex-row items-center text-sm">
		<div class="flex flex-row flex-1 self-center justify-center">
			<div class="blend"></div>
			{#each navItems as item}
				<a href={`${base}${item.route}`} class="nav-menu-item text-[var(--secondary-text)]">
					<span class="nav-menu-item-label font-mono">{item.title}</span>
				</a>
			{/each}
		</div>
	</nav>
</div>

<style lang="scss">
	:root {
		--background-color: #edeff6;
	}
	.nav-menu {
		display: flex;
		justify-content: center;
		position: fixed;
		bottom: 0;
		left: 0;
		top: 0;
		width: 4rem;
		writing-mode: tb-rl;
		transform: rotate(-180deg) translate(0, 0);
		z-index: 10;
		padding: 1rem 0;
		margin: 0;
		background-color: transparent;
		border-left: 1px solid black;
		nav {
			height: 100vh;
			> div {
				justify-content: space-between;
			}
			&:hover {
				cursor: pointer;
				.blend,
				.nav-menu-item {
					border: 0px solid var(--background-color);
					background: white;
				}
				.blend {
					top: 5rem;
					left: 1.3rem;
					bottom: 4rem;
					right: 1.3rem;
				}
			}
		}
		.blend {
			position: absolute;
			top: 5rem;
			left: 1.95rem;
			bottom: 4rem;
			right: 1.95rem;
			z-index: -1;
			border: 0px solid transparent;
			background: var(--background-color);
		}

		&-item {
			text-decoration: none;
			font-weight: 400;
			padding: 1rem 0.5rem;
			margin: 1rem 0.5rem;
			border-radius: 4rem;
			border: 0px solid transparent;
			background: var(--background-color);
			color: inherit;
			display: flex;
			align-items: center;
			transition: all 0.2s ease-in;

			&-label {
				margin-left: 0;
			}

			&:hover {
				color: var(--main-hover);
				border: 1px solid var(--background-color);
				padding: 1.5rem 0.5rem;
				background: white;
				letter-spacing: 0.2rem;
			}
		}
	}
</style>
