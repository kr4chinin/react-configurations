import { Story } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) =>
	function (StoryComponent: Story) {
		return (
			<div className={`App ${theme}`}>
				<StoryComponent />
			</div>
		);
	};
