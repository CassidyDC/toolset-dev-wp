/**
 * ESLint configuration.
 *
 * @file Manages the flat configuration settings for ESLint
 * @author CassidyDC <info@cassidydc.com>
 * @see https://eslint.org/docs/latest/use/configure/configuration-files
 * @type {import("eslint").Linter.Config[]}
 * @version 1.1.0
 */

import globals from 'globals';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';
import { fileURLToPath } from 'node:url';
import { importX } from 'eslint-plugin-import-x';
import { includeIgnoreFile } from '@eslint/compat';

const gitignorePath = fileURLToPath( new URL( '.gitignore', import.meta.url ) );

export default defineConfig( [
	globalIgnores( [ '**/*.min.js' ] ),
	includeIgnoreFile( gitignorePath, 'Imported .gitignore patterns' ),
	{
		plugins: {
			'import-x': importX,
			js,
			tseslint,
		},
		extends: [
			'import-x/recommended',
			'js/recommended',
			'tseslint/recommended',
		],
		files: [ '**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}' ],
		languageOptions: {
			parserOptions: {
				tsconfigRootDir: fileURLToPath( new URL( '.', import.meta.url ) ),
			},
			globals: {
				...globals.browser,
			},
		},
		linterOptions: {
			reportUnusedInlineConfigs: 'warn',
		},
		rules: {
			'@typescript-eslint/no-unused-vars': 'warn',
			'no-console': 'warn',
			'no-unused-vars': 'warn',
			yoda: [ 'warn', 'never' ],
		},
		settings: {
			jsdoc: {
				tagNamePreference: {
					return: 'return',
					returns: 'returns',
					yield: 'yield',
					yields: 'yields',
				},
			},
		},
	},
] );
