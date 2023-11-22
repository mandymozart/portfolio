import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const key = '@mandymozart-theme';

const updateLocalStorage = (value: boolean) => {
	if (browser) {
		localStorage.setItem(key, JSON.stringify(value));
	}
};

export const theme = writable<boolean>(false);

export const toggleTheme = (value?: boolean) =>
	theme.update((it) => {
		const $v = typeof value === 'boolean' ? value : !it;

		updateLocalStorage($v);

		// add dark to the first option of the if statement to reactivate mode
		document.querySelector(':root')?.setAttribute('data-theme', $v ? 'dark' : 'light');

		return $v;
	});

export const onHydrated = () => {
	// const fromStore = localStorage.getItem(key);

	// if (!fromStore) {
	// 	if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
	// 		// dark mode
	// 		toggleTheme(true);
	// 	}
	// } else {
	// 	toggleTheme(JSON.parse(fromStore));
	// }
};
