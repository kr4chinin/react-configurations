import { ComponentMeta, ComponentStory } from '@storybook/react';
import MainPageReference from './MainPage';

export default {
	title: 'pages/MainPage',
	component: MainPageReference,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof MainPageReference>;

const Template: ComponentStory<typeof MainPageReference> = () => (
	<MainPageReference />
);

export const MainPage = Template.bind({});
