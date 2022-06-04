module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [ 'solid', '@typescript-eslint' ],
  extends: [ '../../../.eslintrc.json', 'plugin:solid/typescript' ],
  ignorePatterns: [ '!**/*' ],
  overrides: [
    {
      files: [ '*.ts', '*.js', '*.tsx' ],
      parserOptions: {
        project: [ 'libs/plia/layout/tsconfig.*?.json' ],
      },
      rules: {},
    },
    {
      files: [ '*.ts', '*.tsx' ],
      rules: {},
    },
    {
      files: [ '*.js', '*.jsx' ],
      rules: {},
    },
  ],
  settings: {
    // eslint-disable-next-line global-require
    'solid/typescript': require('typescript'),
  },
};
