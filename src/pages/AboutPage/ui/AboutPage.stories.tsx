import { ComponentMeta, ComponentStory } from '@storybook/react';
import AboutPageReference from './AboutPage';

export default {
	title: 'pages/AboutPage',
	component: AboutPageReference,
} as ComponentMeta<typeof AboutPageReference>;

const Template: ComponentStory<typeof AboutPageReference> = () => (
	<AboutPageReference />
);

export const AboutPage = Template.bind({});
