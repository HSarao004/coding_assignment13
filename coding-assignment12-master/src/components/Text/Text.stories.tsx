import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Text from './Text';
import { TextProps } from './Text.types';

export default {
    title: 'Components/Text',
    component: Text,
    argTypes: {
        color: { control: 'color' },
        children: { control: 'text' },
        disabled: { control: 'boolean' },
        visible: { control: 'boolean' },
        backgroundColor: { control: 'color' },
        disabledBackgroundColor: { control: 'color' },
    },
} as Meta;

const Template: StoryFn<TextProps> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Text Content',
    color: 'black',
    disabled: false,
    visible: true,
    backgroundColor: 'transparent',
    disabledBackgroundColor: 'grey',
};

export const Disabled = Template.bind({});
Disabled.args = {
    children: 'Text Content',
    color: 'black',
    disabled: true,
    visible: true,
    backgroundColor: 'transparent',
    disabledBackgroundColor: 'lightgrey',
};

export const Hidden = Template.bind({});
Hidden.args = {
    children: 'Text Content',
    color: 'black',
    disabled: false,
    visible: false,
    backgroundColor: 'transparent',
    disabledBackgroundColor: 'grey',
};

export const CustomBackground = Template.bind({});
CustomBackground.args = {
    children: 'Text with Custom Background',
    color: 'black',
    disabled: true,
    visible: true,
    backgroundColor: 'transparent',
    disabledBackgroundColor: 'yellow',
};
