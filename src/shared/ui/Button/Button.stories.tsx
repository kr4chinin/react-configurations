import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { Button, ButtonTheme } from './Button';

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
