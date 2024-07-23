import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Dropdown from './Dropdown';

describe('Dropdown Component', () => {
  it('renders with default props', () => {
    render(
      <Dropdown>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </Dropdown>
    );
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeVisible();
    expect(selectElement).not.toBeDisabled();
    expect(selectElement).toHaveStyle('background-color: white');
  });

  it('renders disabled dropdown', () => {
    render(
      <Dropdown disabled>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </Dropdown>
    );
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeDisabled();
    expect(selectElement).toHaveStyle('background-color: lightgrey');
  });

  it('renders hidden dropdown', () => {
    render(
      <Dropdown visible={false}>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </Dropdown>
    );
    const selectElement = screen.queryByRole('combobox', { hidden: true });
    expect(selectElement).toBeInTheDocument();
    expect(selectElement).not.toBeVisible();
  });

  it('handles custom background color', () => {
    render(
      <Dropdown disabled disabledBackgroundColor="yellow">
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </Dropdown>
    );
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeDisabled();
    expect(selectElement).toHaveStyle('background-color: yellow');
  });

  it('handles option selection', () => {
    render(
      <Dropdown>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </Dropdown>
    );
    const selectElement = screen.getByRole('combobox');
    fireEvent.change(selectElement, { target: { value: '2' } });
    expect(selectElement).toHaveValue('2');
  });
});
