import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		coverage: {
			exclude: ['src/index.ts'],
			provider: 'v8',
			reporter: ['text', 'json', 'html'],
			reportsDirectory: './tests/coverage',
		},
	},
	alias: {
		'~/*': new URL('./src/', import.meta.url).pathname,
	},
});
