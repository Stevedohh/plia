module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [ 'solid', '@typescript-eslint' ],
  extends: [ '../../../.eslintrc.json' ],
  ignorePatterns: [ '!**/*' ],
  overrides: [
    {
      files: [ '*.ts', '*.js', '*.tsx' ],
      parserOptions: {
        project: [ 'libs/plia/hooks/tsconfig.*?.json' ],
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
    'solid/typescript': require('typescript'),
  },
};
