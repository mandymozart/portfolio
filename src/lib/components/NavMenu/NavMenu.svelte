<script lang="ts">
	import { page } from '$app/stores';

	import { base } from '$app/paths';
	import { navItems } from '$lib/params';

	let currentRoute = '/';

	$: {
		if ($page) {
			currentRoute = $page.url.pathname;

			console.log(currentRoute);
		}
	}
</script>

<div class="nav-menu">
	<nav>
		<a class="nav-menu-item nav-menu-item--home" href={`${base}/`}>
			<span>/</span>
		</a>
		{#each navItems as item}
			<a
				href={`${base}${item.route}`}
				class="nav-menu-item"
				class:active={currentRoute === item.route}
			>
				<span>{item.title}</span>
			</a>
		{/each}
	</nav>
</div>

<style lang="scss">
	.nav-menu {
		position: fixed;
		right: 0;
		left: 0;
		top: 0;
		z-index: 100000;
		margin: 0;
		nav {
			height: 4rem;
			display: grid;
			grid-template-columns: 3fr 1fr 1fr 1fr;
			&:hover {
				cursor: pointer;
			}
			@media (max-width: 1350px) {
			}
			@media (max-width: 850px) {
				grid-template-columns: 1fr 1fr;
			}
		}

		&-item {
			text-decoration: none;
			font-weight: 400;
			font-family: var(--font-serif);

			border-radius: 2rem;
			border: 0;

			color: inherit;
			display: flex;
			align-items: center;
			transition: all 0.2s ease-in;

			span {
				margin-left: 0;
				padding: 0.5rem 2rem;
				display: inline-flex;
				align-items: center;
				justify-content: center;
				padding: 0 2rem;
				border-radius: 2rem;
				background: rgba(255, 255, 255, 0.0001);
				backdrop-filter: blur(10px);
				height: 2rem;
			}
			&--home {
				padding: 0 2rem;
				span {
					display: block;
					width: 2rem;
					height: 2rem;
					display: inline-flex;
					align-items: center;
					justify-content: center;
					padding: 0;
					border-radius: 2rem;
					background: rgba(255, 255, 255, 0.0001);
					backdrop-filter: blur(10px);
				}
			}

			&.active,
			&:hover {
				background: var(--background);
				letter-spacing: 0.2rem;
			}
		}
	}
</style>
