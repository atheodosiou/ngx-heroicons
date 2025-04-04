export default {
    preset: 'jest-preset-angular',
    testMatch: ['<rootDir>/projects/ngx-heroicons/**/*.spec.ts'],
    transform: {
        '^.+\\.(ts|mjs|js,html)$': 'jest-preset-angular',
    },
    transformIgnorePatterns: [
        'node_modules/(?!.*\\.mjs$)',
    ],
    moduleFileExtensions: ['ts', 'html', 'js', 'json', 'mjs'],
    resolver: 'jest-preset-angular/build/resolvers/ng-jest-resolver.js',
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    testPathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/node_modules/'],
    collectCoverage: true,
    coverageDirectory: 'coverage',
};
