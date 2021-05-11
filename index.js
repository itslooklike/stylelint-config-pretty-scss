module.exports = {
  syntax: 'scss',
  plugins: ['stylelint-scss'],
  extends: ['stylelint-config-htmlacademy', 'stylelint-config-rational-order'],
  rules: {
    'string-quotes': 'single',
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
  },
}
