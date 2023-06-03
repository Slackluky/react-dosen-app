module.exports = {
    env: { browser: true, es2020: true, node: true },
    extends: [
        'eslint:recommended',
        'plugin:import/recommended'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
            tsx: true
        }
    },
    settings: { react: { version: '18.2' },'import/resolver': {
        'node': {
            'extensions': ['.js', '.jsx', '.ts', '.tsx']
        }
    } },
    plugins: ['react-refresh', 'react', '@typescript-eslint', 'import'],
    rules: {
        'react-refresh/only-export-components': 'warn',
        'react/jsx-indent': ['error', 4],
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
        '@typescript-eslint/indent': ['error', 4, { ignoredNodes: ['JSXElement *', 'JSXElement'] }],
        indent: 'off',
        'react/jsx-uses-react': 'error',
        'linebreak-style': ['error', 'windows'],
        'no-use-before-define': 'off',
        quotes: ['error', 'single'],
        semi: ['error', 'always'],

        // override configuration set by extending "eslint:recommended"
        'no-empty': 'warn',
        'no-cond-assign': ['error', 'always'],

        // disable rules from base configurations
        'for-direction': 'off',
        'comma-dangle': ['error', 'never']
    }
};
