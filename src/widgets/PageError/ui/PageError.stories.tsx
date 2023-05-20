import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { PageError } from './PageError';

export default {
	title: 'widget/PageError',
	component: PageError,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof PageError>;

const Template: ComponentStory<typeof PageError> = args => (
	<PageError {...args} />
);

export const Light = Template.bind({});
Light.args = {};
