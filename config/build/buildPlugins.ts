import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { DefinePlugin, ProgressPlugin, WebpackPluginInstance } from 'webpack';
import { BuildOptions } from './types/config';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

export function buildPlugins({
	paths,
	isDev,
	analyze,
}: BuildOptions): WebpackPluginInstance[] {
	const plugins = [
		new HtmlWebpackPlugin({
			template: paths.html,
		}),
		new ProgressPlugin(),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[name].[contenthash:8].chunk.css',
		}),
		new DefinePlugin({
			__IS_DEV__: JSON.stringify(isDev),
		}),
	];

	if (isDev) {
		plugins.push(
			new ReactRefreshWebpackPlugin({
				overlay: false,
			}),
		);
	}

	analyze && plugins.push(new BundleAnalyzerPlugin());

	return plugins;
}
