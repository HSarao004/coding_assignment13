import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import RadioButton from './RadioButton';
import { RadioButtonProps } from './RadioButton.types';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
  argTypes: {
    disabled: { control: 'boolean' },
    visible: { control: 'boolean' },
    disabledColor: { control: 'color' },
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: StoryFn<RadioButtonProps> = (args) => <RadioButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  visible: true,
  disabledColor: 'grey',
  backgroundColor: 'white',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  visible: true,
  disabledColor: 'grey',
  backgroundColor: 'white',
};

export const Hidden = Template.bind({});
Hidden.args = {
  disabled: false,
  visible: false,
  disabledColor: 'grey',
  backgroundColor: 'white',
};
