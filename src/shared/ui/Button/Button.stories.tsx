import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from './Button';

export default {
	title: 'shared/Button',
	component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Clear = Template.bind({});
Clear.args = {
	children: 'Button',
	theme: 'clear',
};

export const Outline = Template.bind({});
Outline.args = {
	children: 'Button',
	theme: 'outline',
};

export const Square = Template.bind({});
Square.args = {
	children: '+',
	square: true,
};

export const Background = Template.bind({});
Background.args = {
	children: 'Button',
	theme: 'background',
};
