import { addDecorator } from '@storybook/react';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { I18nDecorator } from '../../src/shared/config/storybook/I18nDecorator/I18nDecorator';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	backgrounds: {
		disable: true,
	},
	themes: {
		default: 'light',
		list: [
			{ name: 'light', class: 'light', color: '#f9fafb' },
			{ name: 'dark', class: 'dark', color: '#1f2937' },
		],
	},
};

addDecorator(I18nDecorator);
addDecorator(RouterDecorator);
addDecorator(StyleDecorator);
