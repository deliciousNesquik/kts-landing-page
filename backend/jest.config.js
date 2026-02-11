export default {
    testEnvironment: 'node',
    testMatch: [
        '**/tests/**/*.test.js',
        '**/__tests__/**/*.test.js',
        '**/?(*.)+(spec|test).[jt]s?(x)'
    ],
    collectCoverageFrom: [
        'src/**/*.{js,jsx}',
        '!src/config/**',
        '!src/utils/logger.js'
    ],
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'lcov', 'html'],

    moduleNameMapper: {
        '^(\\.{1,2}/.*)\\.js$': '$1',
    },
};