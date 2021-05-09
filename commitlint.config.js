module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['blog', 'content', 'chore', 'feat', 'fix', 'refactor', 'style'],
    ],
  },
}
