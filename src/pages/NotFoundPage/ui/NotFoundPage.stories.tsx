import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { NotFoundPage } from './NotFoundPage';

export default {
	title: 'pages/NotFoundPage',
	component: NotFoundPage,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof NotFoundPage>;

const Template: ComponentStory<typeof NotFoundPage> = () => <NotFoundPage />;

export const Light = Template.bind({});

export const Dark = Template.bind({});
