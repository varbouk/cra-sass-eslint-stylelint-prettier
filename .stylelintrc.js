/**
 * Stylelint configuration
 */
module.exports = {
  /**
   * @see https://stylelint.io/user-guide/configure/#extends
   */
  extends: [
    /**
     * @see https://github.com/stylelint/stylelint-config-standard
     */
    'stylelint-config-standard',

    /**
     * @see https://github.com/stylelint-scss/stylelint-config-standard-scss
     */
    'stylelint-config-standard-scss',

    /**
     * @see https://github.com/prettier/stylelint-config-prettier
     */
    'stylelint-config-prettier',
  ],

  /**
   * @see https://stylelint.io/user-guide/configure/#plugins
   */
  plugins: [
    /**
     * @see https://github.com/stylelint-scss/stylelint-scss
     */
    'stylelint-scss',

    /**
     * @see https://github.com/prettier/stylelint-prettier
     */
    'stylelint-prettier',
  ],

  /**
   * @see https://stylelint.io/user-guide/configure/#ignorefiles
   */
  ignoreFiles: ['**/*.js', '**/*.jsx'],

  /**
   * @see https://stylelint.io/user-guide/rules/list
   */
  rules: {
    'no-empty-source': null, // https://stylelint.io/user-guide/rules/list/no-empty-source
    'string-quotes': 'single', // https://stylelint.io/user-guide/rules/list/string-quotes/
    'scss/comment-no-empty': null, // https://github.com/stylelint-scss/stylelint-scss/tree/master/src/rules/comment-no-empty
    'scss/double-slash-comment-empty-line-before': null, // https://github.com/stylelint-scss/stylelint-scss/tree/master/src/rules/double-slash-comment-empty-line-before
    'prettier/prettier': true, // https://github.com/prettier/stylelint-prettier
    'at-rule-no-unknown': [
      // https://stylelint.io/user-guide/rules/list/at-rule-no-unknown/
      true,
      {
        ignoreAtRules: [
          'extend',
          'at-root',
          'debug',
          'warn',
          'error',
          'if',
          'else',
          'for',
          'each',
          'while',
          'mixin',
          'include',
          'content',
          'return',
          'function',
          'tailwind',
          'apply',
          'responsive',
          'variants',
          'screen',
        ],
      },
    ],
  },
};