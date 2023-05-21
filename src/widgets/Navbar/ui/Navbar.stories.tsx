import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Navbar as NavbarReference } from './Navbar';

export default {
	title: 'widget/Navbar',
	component: NavbarReference,
} as ComponentMeta<typeof NavbarReference>;

const Template: ComponentStory<typeof NavbarReference> = args => (
	<NavbarReference {...args} />
);

export const Navbar = Template.bind({});
