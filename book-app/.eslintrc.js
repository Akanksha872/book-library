module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
    jest: true
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', "import", "jest", ],
  extends: [
    'eslint:recommended', 
    'plugin:@typescript-eslint/recommended', 
    'plugin:react/recommended', 
    'plugin:react-hooks/recommended', 
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": "off",
    "react/jsx-uses-react": "off",
    'indent': ['error', 2],
    'space-before-function-paren': ['error', 'always'],
    'object-curly-spacing': ['error', 'always'],
    'space-infix-ops': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'import/order': ['error', { 'alphabetize': { 'order': 'asc' } }],
    'react/prop-types': 'off', 
    '@typescript-eslint/explicit-module-boundary-types': 'off', 
    '@typescript-eslint/no-unused-vars': 'error', 
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
