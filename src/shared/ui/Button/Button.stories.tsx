import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button, ButtonTheme } from './Button';
import 'app/styles/index.scss';

export default {
	title: 'shared/ui/Button',
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
