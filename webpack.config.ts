import dotenv from 'dotenv';
import path from 'path';
import { Configuration } from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPaths } from './config/build/types/config';

export default (env: BuildEnv) => {
	const paths: BuildPaths = {
		entry: path.resolve(__dirname, 'src', 'index.ts'),
		build: path.resolve(__dirname, 'build'),
		html: path.resolve(__dirname, 'public', 'index.html')
	};

	const mode = env.mode || 'development';
	const isDev = mode === 'development';

	dotenv.config({
		path: path.resolve(
			__dirname,
			'config',
			'env',
			`.env.${isDev ? 'development' : 'production'}`
		)
	});

	const config: Configuration = buildWebpackConfig({
		mode,
		paths: paths,
		isDev,
		port: process.env.PORT
	});

	return config;
};
