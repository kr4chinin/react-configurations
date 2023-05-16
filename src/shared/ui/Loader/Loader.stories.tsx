import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { Loader } from './Loader';

export default {
	title: 'shared/Loader',
	component: Loader,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = args => <Loader {...args} />;

export const Light = Template.bind({});
Light.args = {};
