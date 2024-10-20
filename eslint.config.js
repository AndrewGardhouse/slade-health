import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import globals from 'globals';

export default [
	{
		languageOptions: {
			globals: globals.builtin,
		},
		plugins: {
			unicorn: eslintPluginUnicorn,
		},
		rules: {
			'unicorn/better-regex': 'error',
			'unicorn/…': 'error',
		},
	},
];