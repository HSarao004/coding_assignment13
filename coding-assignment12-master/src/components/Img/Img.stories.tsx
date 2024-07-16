import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
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

export const Disabled = Template.bind({});
Disabled.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Placeholder Image',
  disabled: true,
  visible: true,
  disabledColor: 'grey',
  backgroundColor: 'transparent',
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
