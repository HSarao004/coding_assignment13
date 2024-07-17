import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MyButton from './Mybutton';

describe('MyButton Component', () => {
    it('renders with default props', () => {
        render(<MyButton>Button</MyButton>);
        const buttonElement = screen.getByText('Button');
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveStyle('background-color: darkblue');
        expect(buttonElement).toHaveStyle('color: white');
        expect(buttonElement).toHaveStyle('display: inline-block');
    });

    it('renders disabled button', () => {
        render(<MyButton disabled>Button</MyButton>);
        const buttonElement = screen.getByText('Button');
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveStyle('background-color: grey');
        expect(buttonElement).toHaveStyle('cursor: not-allowed');
    });

    it('renders invisible button', () => {
        render(<MyButton visible={false}>Button</MyButton>);
        const buttonElement = screen.getByText('Button');
        expect(buttonElement).toHaveStyle('display: none');
    });

    it('changes background color on hover', () => {
        render(<MyButton>Button</MyButton>);
        const buttonElement = screen.getByText('Button');
        fireEvent.mouseEnter(buttonElement);
        expect(buttonElement).toHaveStyle('background-color: darkblue');
        fireEvent.mouseLeave(buttonElement);
    });

    it('disables transform on click for disabled button', () => {
        render(<MyButton disabled>Button</MyButton>);
        const buttonElement = screen.getByText('Button');
        fireEvent.click(buttonElement);
        expect(buttonElement).toHaveStyle('transform: none');
    });

    it('enables transform on click for enabled button', () => {
        render(<MyButton>Button</MyButton>);
        const buttonElement = screen.getByText('Button');
        fireEvent.click(buttonElement);
        expect(buttonElement).toHaveStyle('transform: scale(0.95)');
    });
});
