import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

const b64enc = typeof btoa == 'function' ? b => btoa(encodeURIComponent(b)) : b => Buffer.from(b).toString('base64');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		csrf: {
			checkOrigin: false // виключив бо була помилка "Cross-site POST form submissions are forbidden"
		} 
	},
};

export default config;
