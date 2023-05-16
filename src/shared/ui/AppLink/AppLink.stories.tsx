import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
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
