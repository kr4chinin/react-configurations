import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { Navbar } from './Navbar';

export default {
	title: 'widget/Navbar',
	component: Navbar,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = args => <Navbar  {...args} />;

export const Light = Template.bind({});
Light.args = {};