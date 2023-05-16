import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import AboutPage from './AboutPage';

export default {
	title: 'pages/AboutPage',
	component: AboutPage,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof AboutPage>;

const Template: ComponentStory<typeof AboutPage> = () => <AboutPage />;

export const Light = Template.bind({});
