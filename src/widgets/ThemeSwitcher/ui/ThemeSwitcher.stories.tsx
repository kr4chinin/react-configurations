import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeSwitcher as ThemeSwitcherReference } from './ThemeSwitcher';

export default {
	title: 'widget/ThemeSwitcher',
	component: ThemeSwitcherReference,
} as ComponentMeta<typeof ThemeSwitcherReference>;

const Template: ComponentStory<typeof ThemeSwitcherReference> = args => (
	<ThemeSwitcherReference {...args} />
);

export const ThemeSwitcher = Template.bind({});
