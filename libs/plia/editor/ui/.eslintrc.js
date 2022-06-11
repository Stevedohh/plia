module.exports = {
  parser: '',
  plugins: ['solid', '@typescript-eslint'],
  extends: ['../../../../.eslintrc.json', 'plugin:solid/typescript'],
  ignorePatterns: ['!**/*'],
  overrides: [
    {
      files: ['*.ts', '*.js', '*.tsx'],
      parserOptions: {
        project: [],
      },
      rules: {
        'comma-dangle': 'off',
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: {},
    },
    {
      files: ['*.js', '*.jsx'],
      rules: {},
    },
  ],
  settings: {
    'solid/typescript': require('typescript'),
  },
};
