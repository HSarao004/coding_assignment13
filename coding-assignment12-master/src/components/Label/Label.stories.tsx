import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Label from './Label';
import { LabelProps } from './Label.types';

export default {
    title: 'Components/Label',
    component: Label,
    argTypes: {
        color: { control: 'color' },
        children: { control: 'text' },
        disabled: { control: 'boolean' },
        visible: { control: 'boolean' },
        backgroundColor: { control: 'color' },
        disabledBackgroundColor: { control: 'color' },
    },
} as Meta;

const Template: StoryFn<LabelProps> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Label Text',
    color: 'black',
    disabled: false,
    visible: true,
    backgroundColor: 'transparent',
    disabledBackgroundColor: 'grey',
};

export const CustomColor = Template.bind({});
CustomColor.args = {
    children: 'Label Text',
    color: 'red',
    disabled: false,
    visible: true,
    backgroundColor: 'transparent',
    disabledBackgroundColor: 'grey',
};

export const Disabled = Template.bind({});
Disabled.args = {
    children: 'Label Text',
    color: 'black',
    disabled: true,
    visible: true,
    backgroundColor: 'transparent',
    disabledBackgroundColor: 'lightgrey',
};

export const Hidden = Template.bind({});
Hidden.args = {
    children: 'Label Text',
    color: 'black',
    disabled: false,
    visible: false,
    backgroundColor: 'transparent',
    disabledBackgroundColor: 'grey',
};

export const CustomBackground = Template.bind({});
CustomBackground.args = {
    children: 'Label with Custom Background',
    color: 'black',
    disabled: true,
    visible: true,
    backgroundColor: 'transparent',
    disabledBackgroundColor: 'yellow',
};
