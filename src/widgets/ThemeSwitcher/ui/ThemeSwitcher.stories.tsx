import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeSwitcher } from './ThemeSwitcher';

export default {
	title: 'widget/ThemeSwitcher',
	component: ThemeSwitcher,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = args => (
	<ThemeSwitcher {...args} />
);

export const Light = Template.bind({});
Light.args = {};
