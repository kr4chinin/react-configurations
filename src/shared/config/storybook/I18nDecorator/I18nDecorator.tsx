import { Story, StoryContext } from '@storybook/react';
import { Suspense, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n/i18n';

export const I18nDecorator = (StoryComponent: Story, context: StoryContext) => {
	const { locale } = context.globals;

	useEffect(() => {
		i18n.changeLanguage(locale);
	}, [locale]);

	return (
		// eslint-disable-next-line i18next/no-literal-string
		<Suspense fallback="Some translations are loading...">
			<I18nextProvider i18n={i18n}>
				<StoryComponent />
			</I18nextProvider>
		</Suspense>
	);
};
