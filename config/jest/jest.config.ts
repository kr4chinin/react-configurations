import path from 'path';

export const config = {
	globals: {
		__IS_DEV__: true,
	},
	testEnvironment: 'jsdom',
	clearMocks: true,
	coveragePathIgnorePatterns: ['/node_modules/'],
	moduleDirectories: ['node_modules'],
	moduleFileExtensions: [
		'js',
		'mjs',
		'cjs',
		'jsx',
		'ts',
		'tsx',
		'json',
		'node',
	],
	rootDir: '../../',
	modulePaths: ['<rootDir>src'],
	testMatch: ['<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'],
	setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts'],
	moduleNameMapper: {
		'\\.scss$': 'identity-obj-proxy',
		'\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
		'entities/(.*)': '<rootDir>src/entities/$1',
	},
};

export default config;
