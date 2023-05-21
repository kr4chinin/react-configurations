import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { AppLink as AppLinkReference } from './AppLink';

export default {
	title: 'shared/AppLink',
	component: AppLinkReference,
	args: {
		to: '/',
	},
} as ComponentMeta<typeof AppLinkReference>;

const Template: ComponentStory<typeof AppLinkReference> = args => (
	<AppLinkReference {...args} />
);

export const AppLink = Template.bind({});
AppLink.args = {
	children: 'Link',
};
