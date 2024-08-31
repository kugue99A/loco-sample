/** @type {import('stylelint').Config} */

export default {
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
  rules: {
    'block-no-empty': true,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'layer', 'apply'],
      },
    ],
  },
}
