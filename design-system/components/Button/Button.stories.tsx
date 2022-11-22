import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
	title: 'Design System/Button',
	component: Button,
	argTypes: {
		primary: { control: 'boolean', defaultValue: false },
		category: { control: 'text', defaultValue: '' },
		secondary: { control: 'boolean', defaultValue: false },
		inverted: { control: 'boolean', defaultValue: false },
		disabled: { control: 'boolean', defaultValue: false },
	},
	parameters: {
		layout: 'fullscreen',
	},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
export const Category = Template.bind({});
export const Secondary = Template.bind({});
export const Inverted = Template.bind({});
export const Disabled = Template.bind({});
export const Icons = Template.bind({});
export const Link = Template.bind({});

Primary.args = {
	primary: true,
	children: 'Button',
}

Secondary.args = {
	disabled: false,
	secondary: true,
	children: 'Button',
}

Inverted.args = {
	primary: true,
	inverted: true,
	children: 'Button',
}

Inverted.parameters = {
	backgrounds: {
		default: 'dark',
	}
}

Disabled.args = {
	secondary: true,
	disabled: true,
	children: 'Button',
}

Category.args = {
	category: 'tech',
	primary: true,
	children: 'Button',
}

Icons.args = {
	icon: 'academic-cap',
	primary: true,
	children: 'Button',
}

Link.args = {
	external: true,
	href: 'https://google.com',
	children: 'Text Link',
}
