import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RadioButton from './RadioButton';

describe('RadioButton Component', () => {
    it('renders visible radio button', () => {
        render(<RadioButton visible />);
        const radioButton = screen.getByRole('radio');
        expect(radioButton).toBeInTheDocument();
        expect(radioButton).toHaveStyle('display: inline-block');
    });

    it('renders invisible radio button', () => {
        render(<RadioButton visible={false} />);
        const radioButton = screen.queryByRole('radio');
        expect(radioButton).not.toBeInTheDocument();
    });

    it('renders disabled radio button', () => {
        render(<RadioButton disabled />);
        const radioButton = screen.getByRole('radio');
        expect(radioButton).toBeInTheDocument();
        expect(radioButton).toBeDisabled();
    });

    it('renders radio button with custom background when not disabled', () => {
        render(<RadioButton backgroundColor="lightblue" />);
        const radioButton = screen.getByRole('radio');
        expect(radioButton).toBeInTheDocument();
        expect(radioButton).toHaveStyle('background-color: lightblue');
    });
});
