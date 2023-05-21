import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Sidebar as SidebarReference } from './Sidebar';

export default {
	title: 'widget/Sidebar',
	component: SidebarReference,
} as ComponentMeta<typeof SidebarReference>;

const Template: ComponentStory<typeof SidebarReference> = args => (
	<SidebarReference {...args} />
);

export const Sidebar = Template.bind({});
