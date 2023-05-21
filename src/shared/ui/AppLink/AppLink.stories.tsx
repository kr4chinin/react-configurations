import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { AppLink } from './AppLink';

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
};
