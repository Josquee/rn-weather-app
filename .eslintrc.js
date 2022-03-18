module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    semi: ['error', 'never'],
    'comma-dangle': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'prettier/prettier': ['off', {
      printWidth: 80
    }],
    'no-trailing-spaces': ['error', { skipBlankLines: true }],
    'no-multiple-empty-lines': ['error', { max: 1 }]
  }
}
