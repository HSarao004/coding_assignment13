import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import Img from './Img';
import { ImgProps } from './Img.types';

export default {
  title: 'Components/Img',
  component: Img,
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    disabled: { control: 'boolean' },
    visible: { control: 'boolean' },
    disabledColor: { control: 'color' },
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: StoryFn<ImgProps> = (args) => <Img {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Placeholder Image',
  disabled: false,
  visible: true,
  disabledColor: 'grey',
  backgroundColor: 'transparent',
};
Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const imgElement = await canvas.getByAltText('Placeholder Image');
  await userEvent.hover(imgElement);
};

export const Disabled = Template.bind({});
Disabled.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Placeholder Image',
  disabled: true,
  visible: true,
  disabledColor: 'grey',
  backgroundColor: 'transparent',
};
Disabled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const imgElement = await canvas.getByAltText('Placeholder Image');
  await userEvent.hover(imgElement);
};

export const Hidden = Template.bind({});
Hidden.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Placeholder Image',
  disabled: false,
  visible: false,
  disabledColor: 'grey',
  backgroundColor: 'transparent',
};
Hidden.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const imgElement = await canvas.queryByAltText('Placeholder Image');
  if (imgElement) {
    await userEvent.hover(imgElement);
  }
};

export const CustomBackground = Template.bind({});
CustomBackground.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Placeholder Image',
  disabled: false,
  visible: true,
  disabledColor: 'grey',
  backgroundColor: 'blue',
};
CustomBackground.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const imgElement = await canvas.getByAltText('Placeholder Image');
  await userEvent.hover(imgElement);
};

export const DisabledWithCustomBackground = Template.bind({});
DisabledWithCustomBackground.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Placeholder Image',
  disabled: true,
  visible: true,
  disabledColor: 'yellow',
  backgroundColor: 'blue',
};
DisabledWithCustomBackground.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const imgElement = await canvas.getByAltText('Placeholder Image');
  await userEvent.hover(imgElement);
};
