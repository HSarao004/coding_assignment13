import React from 'react';
import { Meta, Story } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
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

const Template: Story<RadioButtonProps> = (args) => <RadioButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  visible: true,
  disabledColor: 'grey',
  backgroundColor: 'white',
};
Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const radioButton = canvas.getByRole('radio');
  await userEvent.click(radioButton);
  expect(radioButton).toBeChecked();
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  visible: true,
  disabledColor: 'grey',
  backgroundColor: 'white',
};
Disabled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const radioButton = canvas.getByRole('radio');
  expect(radioButton).toBeDisabled();
};

export const Hidden = Template.bind({});
Hidden.args = {
  disabled: false,
  visible: false,
  disabledColor: 'grey',
  backgroundColor: 'white',
};
Hidden.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const radioButton = canvas.queryByRole('radio');
  expect(radioButton).not.toBeInTheDocument();
};
