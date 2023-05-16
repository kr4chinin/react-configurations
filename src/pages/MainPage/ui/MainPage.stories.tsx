import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import MainPage from './MainPage';

export default {
	title: 'pages/MainPage',
	component: MainPage,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = () => <MainPage />;

export const Light = Template.bind({});
