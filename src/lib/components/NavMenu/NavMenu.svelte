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
			class="nav-menu-left decoration-none flex flex-row items-center cursor-pointer px-4 text-[var(--secondary-text)] self-stretch"
		>
			<span class="ml-2 text-md font-bold hidden md:inline">{HOME.name} {HOME.lastName}</span>
		</a>
		<div class="flex flex-row flex-1 self-center justify-center">
			{#each items as item}
				<a href={`${base}${item.to}`} class="nav-menu-item !text-[var(--secondary-text)]">
					<span class="nav-menu-item-label">{item.title}</span>
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
		top: 0px;
		z-index: 10;
		padding: 0px 10px;
		background-color: transparent;

		&-item {
			text-decoration: none;
			font-weight: 400;
			padding: 10px 20px;
			color: inherit;
			display: flex;
			align-items: center;
			border-bottom: 3px solid transparent;

			&-label {
				margin-left: 10px;

				@media (max-width: 950px) {
					& {
						display: none;
					}
				}
			}

			&:hover {
				color: var(--main-hover);
			}
		}
	}
</style>
