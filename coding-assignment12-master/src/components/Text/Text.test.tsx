import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Text from './Text';

describe('Text Component', () => {
    it('renders with default props', () => {
        render(<Text>Default Text</Text>);
        const textElement = screen.getByText('Default Text');
        expect(textElement).toBeInTheDocument();
        expect(textElement).toHaveStyle({
            color: 'black',
            backgroundColor: 'transparent',
            opacity: '1',
            cursor: 'default',
        });
    });

    it('renders disabled text', () => {
        render(<Text disabled>Disabled Text</Text>);
        const disabledTextElement = screen.getByText('Disabled Text');
        expect(disabledTextElement).toBeInTheDocument();
        expect(disabledTextElement).toHaveStyle('color: grey; background-color: grey;opacity: 0.5;cursor: not-allowed');
    });

    it('renders hidden text', () => {
        render(<Text visible={false}>Hidden Text</Text>);
        const hiddenTextElement = screen.queryByText('Hidden Text');
        expect(hiddenTextElement).toHaveStyle('display: none');
    });

    it('renders text with custom background color when disabled', () => {
        render(<Text disabled disabledBackgroundColor="yellow">Custom Background Text</Text>);
        const customBackgroundTextElement = screen.getByText('Custom Background Text');
        expect(customBackgroundTextElement).toBeInTheDocument();
        expect(customBackgroundTextElement).toHaveStyle({
            backgroundColor: 'yellow',
        });
    });

    it('renders text with custom background color when not disabled', () => {
        render(<Text disabled={false} backgroundColor="lightblue">Custom Background Text</Text>);
        const customBackgroundTextElement = screen.getByText('Custom Background Text');
        expect(customBackgroundTextElement).toBeInTheDocument();
        expect(customBackgroundTextElement).toHaveStyle({
            backgroundColor: 'lightblue',
        });
    });
});
