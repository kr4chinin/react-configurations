import { ComponentMeta, ComponentStory } from '@storybook/react';
import { PageError as PageErrorReference } from './PageError';

export default {
	title: 'widget/PageError',
	component: PageErrorReference,
} as ComponentMeta<typeof PageErrorReference>;

const Template: ComponentStory<typeof PageErrorReference> = args => (
	<PageErrorReference {...args} />
);

export const PageError = Template.bind({});
