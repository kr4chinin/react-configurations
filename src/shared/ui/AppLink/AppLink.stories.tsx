import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { AppLink, AppLinkTheme } from './AppLink';

export default {
	title: 'shared/ApLink',
	component: AppLink,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	args: {
		to: '/',
	},
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = args => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	children: 'Link',
	theme: AppLinkTheme.PRIMARY,
};

export const Secondary = Template.bind({});
Secondary.args = {
	children: 'Link',
	theme: AppLinkTheme.SECONDARY,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
	children: 'Link',
	theme: AppLinkTheme.PRIMARY,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
	children: 'Link',
	theme: AppLinkTheme.SECONDARY,
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];
