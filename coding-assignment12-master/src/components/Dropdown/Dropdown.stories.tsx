import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Dropdown from './Dropdown';
import { DropdownProps } from './Dropdown.types';
import { within, userEvent } from '@storybook/testing-library';

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
Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const dropdown = await canvas.getByRole('combobox');
  await userEvent.selectOptions(dropdown, '2');
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
Disabled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const dropdown = await canvas.getByRole('combobox');
  await userEvent.click(dropdown); // Try to interact with the dropdown
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
Hidden.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const dropdown = await canvas.queryByRole('combobox', { hidden: true });
  if (dropdown) {
    await userEvent.click(dropdown); // Try to interact with the hidden dropdown
  }
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
CustomBackground.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const dropdown = await canvas.getByRole('combobox');
  await userEvent.click(dropdown); // Try to interact with the dropdown with custom background
};

export const OpenState = () => {
  const [visible, setVisible] = useState(true);
  return (
    <>
      <button onClick={() => setVisible(!visible)}>Toggle Dropdown</button>
      <Dropdown visible={visible} backgroundColor="white" disabledBackgroundColor="lightgrey">
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </Dropdown>
    </>
  );
};
OpenState.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const toggleButton = await canvas.getByRole('button', { name: /Toggle Dropdown/i });
  await userEvent.click(toggleButton); // Toggle the dropdown visibility
};

export const CloseState = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <button onClick={() => setVisible(!visible)}>Toggle Dropdown</button>
      <Dropdown visible={visible} backgroundColor="white" disabledBackgroundColor="lightgrey">
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </Dropdown>
    </>
  );
};
CloseState.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const toggleButton = await canvas.getByRole('button', { name: /Toggle Dropdown/i });
  await userEvent.click(toggleButton); // Toggle the dropdown visibility
};
