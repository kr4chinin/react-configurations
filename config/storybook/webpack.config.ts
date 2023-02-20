import path from 'path';
import { Configuration, RuleSetRule } from 'webpack';
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

	config.resolve?.modules?.push(paths.src);
	config.resolve?.extensions?.push('.ts', '.tsx');

	config.module?.rules?.push(buildCssLoader(true));

	if (config.module?.rules) {
		config.module.rules = config.module.rules.map(rule => {
			const ruleSetRule = rule as RuleSetRule;

			if (/svg/.test(ruleSetRule.test as string)) {
				return { ...ruleSetRule, exclude: /\.svg$/i };
			}

			return rule;
		});
	}

	config.module?.rules?.push(buildSvgLoader());

	return config;
};

export default config;
