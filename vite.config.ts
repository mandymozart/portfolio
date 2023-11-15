import { sveltekit } from '@sveltejs/kit/vite';
import UnoCSS from 'unocss/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [UnoCSS(), sveltekit()],
	server: {
		fs: {
			// Allow access to files from the project root.
			allow: ['..']
		}
	}
};

export default config;
