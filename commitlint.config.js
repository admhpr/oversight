module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['blog', 'chore', 'feat', 'fix', 'refactor', 'style'],
    ],
  },
}
