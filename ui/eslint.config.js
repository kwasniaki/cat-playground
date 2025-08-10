import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';
import prettierConfig from 'eslint-config-prettier';
import { defineConfig } from 'eslint/config';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';

// eslint-disable-next-line import/no-default-export
export default defineConfig([
  {
    ignores: ['node_modules/**', 'dist/**'],
  },
  js.configs.recommended,
  importPlugin.flatConfigs.recommended,
  tseslint.configs.recommended,
  prettierConfig,
  reactPlugin.configs.flat.recommended,
  reactHooksPlugin.configs['recommended-latest'],
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    languageOptions: { globals: globals.browser },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'error',
      'react-hooks/exhaustive-deps': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'no-console': 'error',
      'import/order': 'warn',
      'import/no-default-export': 'warn',
      'import/no-unused-modules': 'warn',
      'import/no-deprecated': 'warn',
      'import/no-extraneous-dependencies': 'warn',
      'import/no-unresolved': 'off',
    },
  },
]);
