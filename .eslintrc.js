module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        // Add other configurations you are using
    ],
    rules: {
        '@typescript-eslint/no-unused-vars': 'warn', // Change 'error' to 'warn'
        '@typescript-eslint/no-explicit-any': 'warn', // Change 'error' to 'warn'
        '@typescript-eslint/no-empty-function': 'warn', // Change 'error' to 'warn'
        'no-extra-semi': 'off', // Disable rule
        'no-empty': 'warn', // Change 'error' to 'warn'
    },
};