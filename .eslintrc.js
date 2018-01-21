module.exports = {
  extends: ['airbnb-base', 'eslint:recommended', 'plugin:react/recommended'],
  env: {
    browser: true,
    es6: true,
  },
  rules: {
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true,
      optionalDependencies: true,
      peerDependencies: true,
    }],
    'no-console': ['error', {allow: ['log']}],
    'class-methods-use-this': ['warn'],
    'no-unused-vars': ['warn'],
    'react/display-name': ['off', {ignoreTranspilerName: false}],
  },
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  globals: {
    React: true,
  },
  settings: {
    react: {
      pragma: 'React',
    },
    'import/ignore': [
      'node_modules',
      '\\.json$',
      '\\.s?css$',
    ],
    'import/parser': 'babel-eslint',
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.jsx',
          '.json',
        ],
      },
    },
  },
};
