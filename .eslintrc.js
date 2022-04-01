module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
        project: [
            './tsconfig.json',
            './cypress/tsconfig.json',
            './stacks/tsconfig.json',
        ],
    },
    plugins: [
        'import',
        'react',
        'react-hooks',
        '@typescript-eslint',
        'simple-import-sort', // allows eslint to handle import sorting
        'log-filenames', // logs filenames as we lint
        'mocha', // used for detecting testing libraries (cypress)
    ],
    extends: [
        'airbnb-typescript', // general styling, etc. rules for typescript
        'airbnb/hooks', // hook-specific rules
        'prettier', // code formatting
    ],
    overrides: [
        {
            files: 'stacks/*/.ts',
            rules: {
                'no-new': 0,
                'no-console': 0,
            },
        },
    ],
    rules: {
        'import/order': 0,
        '@typescript-eslint/no-use-before-define': [
            2,
            { functions: false, classes: true, variables: false },
        ],
        // Allow plusplus only in for loops
        'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
        'import/no-cycle': 0,
        // Call out some special dev devDependencies
        'import/no-extraneous-dependencies': [
            2,
            { devDependencies: ['*/.test.*'] },
        ],
        'import/prefer-default-export': 0,
        /**
React classes are being replaced by functional components,
so strong enforcement over these rules is less necessary
         */
        'react/prop-types': 0,
        'react/require-default-props': 0,
        'react-hooks/exhaustive-deps': 1,
        // We use prop spreading all the time, and Typescript makes it far safer.
        'react/jsx-props-no-spreading': 0,
        // Missing keys can cause major performance problems
        'react/jsx-key': 2,
        'react/jsx-indent': 0,
        'react/jsx-one-expression-per-line': 0,
        // Material UI uses same props with different casing.
        'react/jsx-no-duplicate-props': [2, { ignoreCase: false }],
        // Prevent use of Object types in Typescript.
        '@typescript-eslint/ban-types': [
            'error',
            {
                types: {
                    String: 'Use string instead',
                    Boolean: 'Use boolean instead',
                    Number: 'Use number instead',
                    Object: 'Use object instead',
                },
            },
        ],
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                // unused variables from destructuring arrays/params can be prefixed with _
                varsIgnorePattern: '^_.*',
                ignoreRestSiblings: true,
            },
        ],
        '@typescript-eslint/no-unused-expressions': [
            'error',
            {
                allowShortCircuit: true,
            },
        ],
        // Need to use TypeScript specific rule to avoid false positives
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'error',
    },
};