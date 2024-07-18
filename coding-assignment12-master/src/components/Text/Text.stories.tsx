import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
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
Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const textElement = await canvas.getByText('Text Content');
  await userEvent.hover(textElement);
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
Disabled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const textElement = await canvas.getByText('Text Content');
  await userEvent.hover(textElement);
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
Hidden.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const textElement = await canvas.queryByText('Text Content');
  if (textElement) {
    await userEvent.hover(textElement);
  }
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
CustomBackground.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const textElement = await canvas.getByText('Text with Custom Background');
  await userEvent.hover(textElement);
};
