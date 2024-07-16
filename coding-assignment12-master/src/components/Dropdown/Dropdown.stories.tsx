import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Dropdown from './Dropdown';
import { DropdownProps } from './Dropdown.types';

export default {
    title: 'Components/Dropdown',
    component: Dropdown,
    argTypes: {
        children: { control: 'text' },
        disabled: { control: 'boolean' },
        visible: { control: 'boolean' },
        backgroundColor: { control: 'color' },
        disabledBackgroundColor: { control: 'color' },
    },
} as Meta;

const Template: StoryFn<DropdownProps> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: (
        <>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
        </>
    ),
    disabled: false,
    visible: true,
    backgroundColor: 'white',
    disabledBackgroundColor: 'lightgrey',
};

export const Disabled = Template.bind({});
Disabled.args = {
    children: (
        <>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
        </>
    ),
    disabled: true,
    visible: true,
    backgroundColor: 'white',
    disabledBackgroundColor: 'lightgrey',
};

export const Hidden = Template.bind({});
Hidden.args = {
    children: (
        <>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
        </>
    ),
    disabled: false,
    visible: false,
    backgroundColor: 'white',
    disabledBackgroundColor: 'lightgrey',
};

export const CustomBackground = Template.bind({});
CustomBackground.args = {
    children: (
        <>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
        </>
    ),
    disabled: true,
    visible: true,
    backgroundColor: 'white',
    disabledBackgroundColor: 'yellow',
};
