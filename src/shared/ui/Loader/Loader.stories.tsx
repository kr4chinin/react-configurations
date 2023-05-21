import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { Loader as LoaderReference } from './Loader';

export default {
	title: 'shared/Loader',
	component: LoaderReference,
} as ComponentMeta<typeof LoaderReference>;

const Template: ComponentStory<typeof LoaderReference> = args => (
	<LoaderReference {...args} />
);

export const Loader = Template.bind({});
