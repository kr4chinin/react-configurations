export const config = {
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
};

export default config;
