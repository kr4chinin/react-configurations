import path from 'path';
import { Configuration, DefinePlugin, RuleSetRule } from 'webpack';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';
import { BuildPaths } from '../build/types/config';

const config = ({ config }: { config: Configuration }) => {
	const paths: BuildPaths = {
		entry: '',
		html: '',
		build: '',
		src: path.resolve(__dirname, '..', '..', 'src'),
	};

	if (config.resolve) {
		if (config.resolve.modules) config.resolve.modules.push(paths.src);
		if (config.resolve.extensions)
			config.resolve.extensions.push('.ts', '.tsx');
	}

	if (config.module && config.module.rules) {
		config.module.rules.push(buildCssLoader(true));

		config.module.rules = config.module.rules.map(rule => {
			const ruleSetRule = rule as RuleSetRule;

			if (/svg/.test(ruleSetRule.test as string)) {
				return { ...ruleSetRule, exclude: /\.svg$/i };
			}

			return rule;
		});

		config.module.rules.push(buildSvgLoader());
	}

	if (config.plugins) {
		config.plugins.push(
			new DefinePlugin({
				__IS_DEV__: false,
			}),
		);
	}

	return config;
};

export default config;
