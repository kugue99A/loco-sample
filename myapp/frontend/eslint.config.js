// eslint.config.js
import js from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import tsEsLintPlugin from '@typescript-eslint/eslint-plugin'
import tsEsLintParser from '@typescript-eslint/parser'
import importPlugin from 'eslint-plugin-import'

export default [
  { ignores: ['dist', 'node_modules', '.next'] },
  // import plugins of inclued "rules"
  js.configs.recommended,
  eslintConfigPrettier,
  // settings
  {
    plugins: {
      '@typescript-eslint': tsEsLintPlugin,
      import: importPlugin,
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.cts', '**/*.mts'],
    languageOptions: {
      parser: tsEsLintParser,
      parserOptions: {
        project: true,
      },
    },
    rules: {
      // @typescript-eslint/eslint-pluginに付属のルールを適用
      ...tsEsLintPlugin.configs['eslint-recommended'].overrides[0].rules,
      ...tsEsLintPlugin.configs['recommended-type-checked'].rules,
      // 追加の設定
      '@typescript-eslint/no-explicit-any': 'warn',
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
          pathGroups: [
            {
              pattern: '{react,react-dom/**,react-router-dom}',
              group: 'builtin',
              position: 'before',
            },
            {
              pattern: '@src/**',
              group: 'parent',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          alphabetize: {
            order: 'asc',
          },
          'newlines-between': 'always',
        },
      ],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports' },
      ],
    },
  },
]
