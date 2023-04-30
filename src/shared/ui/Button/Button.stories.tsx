import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button, ButtonTheme } from './Button';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
	title: 'shared/Button',
	component: Button,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Clear = Template.bind({});
Clear.args = {
	children: 'Button',
	theme: ButtonTheme.CLEAR,
};

export const Outline = Template.bind({});
Outline.args = {
	children: 'Button',
	theme: ButtonTheme.OUTLINE,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
	children: 'Button',
	theme: ButtonTheme.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Square = Template.bind({});
Square.args = {
	children: '+',
	square: true,
};

export const Background = Template.bind({});
Background.args = {
	children: 'Button',
	theme: ButtonTheme.BACKGROUND,
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
	children: 'Button',
	theme: ButtonTheme.BACKGROUND_INVERTED,
};
