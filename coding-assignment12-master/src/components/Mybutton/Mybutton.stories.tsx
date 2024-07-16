import React from 'react';
import { Meta, Storyfn } from '@storybook/react';
import MyButton from './Mybutton';
import { ButtonProps } from './Mybutton.types';

export default {
    title: 'Components/MyButton',
    component: MyButton,
    argTypes: {
        disabled: { control: 'boolean' },
        visible: { control: 'boolean' },
        disabledColor: { control: 'color' },
        children: { control: 'text' },
    },
} as Meta;

const Template: Storyfn<ButtonProps> = (args) => <MyButton {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Button',
    disabled: false,
    visible: true,
    disabledColor: 'grey',
};

export const Disabled = Template.bind({});
Disabled.args = {
    children: 'Button',
    disabled: true,
    visible: true,
    disabledColor: 'grey',
};

export const Invisible = Template.bind({});
Invisible.args = {
    children: 'Button',
    disabled: false,
    visible: false,
    disabledColor: 'grey',
};
