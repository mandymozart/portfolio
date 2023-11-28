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
			{#each navItems as item}
				<a href={`${base}${item.route}`} class="nav-menu-item text-[var(--secondary-text)]">
					<span class="nav-menu-item-label font-mono">{item.title}</span>
				</a>
			{/each}
		</div>
	</nav>
</div>

<style lang="scss">
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
		}

		&-item {
			text-decoration: none;
			font-weight: 400;
			padding: 1rem 0.5rem;
			margin: 1rem 0.5rem;
			border-radius: 4rem;
			border: 1px solid transparent;
			background: transparent;
			color: inherit;
			display: flex;
			align-items: center;

			&-label {
				margin-left: 0;
			}

			&:hover {
				color: var(--main-hover);
				border: 1px solid black;
				background: white;
			}
		}
	}
</style>
