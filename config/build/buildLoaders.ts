import { RuleSetRule } from 'webpack';

export function buildLoaders(): RuleSetRule[] {
	const cssLoader = {
		test: /\.s[ac]ss$/i,
		use: ['style-loader', 'css-loader', 'sass-loader']
	};

	const typescriptLoader: RuleSetRule = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/
	};

	return [typescriptLoader, cssLoader];
}
