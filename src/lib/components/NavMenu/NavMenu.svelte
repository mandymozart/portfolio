<script lang="ts">
	import { page } from '$app/stores';
	import { HOME, NavBar } from '$lib/params';

	import { base } from '$app/paths';
	
	let currentRoute = '/';

	$: {
		if ($page) {
			currentRoute = $page.url.pathname;

			// console.log(currentRoute);
		}
	}

	const items = [
		{ title: NavBar.personal, to: '/projects', icon: 'i-carbon-cube' },
		{ title: NavBar.career, to: '/experience', icon: 'i-carbon-development' },
		{ title: NavBar.resume, to: '/resume', icon: 'i-carbon-result' }
	];
</script>

<div class="nav-menu">
	<nav class="!space-between flex flex-row items-center text-sm">
		<a
			href={`${base}/`}
			class="nav-menu-left  decoration-none flex flex-row items-center cursor-pointer px-4 text-[var(--secondary-text)] self-stretch"
		>
			<span class="text-md font-bold font-mono">{HOME.name} {HOME.lastName}</span>
		</a>
		<div class="flex flex-row flex-1 self-center justify-center">
			{#each items as item}
				<a href={`${base}${item.to}`} class="nav-menu-item !text-[var(--secondary-text)]">
					<span class="nav-menu-item-label font-mono">{item.title}</span>
				</a>
			{/each}
		</div>
	</nav>
</div>

<style lang="scss">
	.nav-menu {
		display: flex;
		justify-content: left;
		position: fixed;
		bottom: 0;
		left: 0;
		top: 0;
		writing-mode: tb-rl;
		transform: rotate(-180deg) translate(0,0);
		z-index: 10;
		padding: 1rem 0;
		margin: 0;
		background-color: transparent;
		border-left: 1px solid var(--secondary-text);

		&-item {
			text-decoration: none;
			font-weight: 400;
			padding: 1rem;
			color: inherit;
			display: flex;
			margin: 0;
			align-items: center;

			&-label {
				margin-left: 0;
			}

			&:hover {
				color: var(--main-hover);
			}
		}
	}
</style>
