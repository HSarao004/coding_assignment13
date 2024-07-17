import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Img from './Img';

describe('Img Component', () => {
  it('renders with default props', () => {
    render(<Img src="https://via.placeholder.com/150" alt="Placeholder Image" />);
    const imgElement = screen.getByAltText('Placeholder Image');
    expect(imgElement).toBeVisible();
    expect(imgElement).toHaveAttribute('src', 'https://via.placeholder.com/150');
    expect(imgElement).toHaveStyle('background-color: transparent');
  });

  it('renders disabled image', () => {
    render(<Img src="https://via.placeholder.com/150" alt="Placeholder Image" disabled />);
    const imgElement = screen.getByAltText('Placeholder Image');
    expect(imgElement).toBeVisible();
    expect(imgElement).toHaveStyle('opacity: 0.5');
    expect(imgElement).toHaveStyle('cursor: not-allowed');
    expect(imgElement).toHaveStyle('background-color: grey');
  });

  it('renders hidden image', () => {
    render(<Img src="https://via.placeholder.com/150" alt="Placeholder Image" visible={false} />);
    const imgElement = screen.queryByAltText('Placeholder Image');
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).not.toBeVisible();
  });

  it('handles custom background color', () => {
    render(<Img src="https://via.placeholder.com/150" alt="Placeholder Image" disabled backgroundColor="blue" />);
    const imgElement = screen.getByAltText('Placeholder Image');
    expect(imgElement).toBeVisible();
    expect(imgElement).toHaveStyle('background-color: grey'); // because it's disabled
    expect(imgElement).toHaveStyle('opacity: 0.5');
  });

  it('renders with different sizes based on viewport', () => {
    render(<Img src="https://via.placeholder.com/150" alt="Placeholder Image" />);
    const imgElement = screen.getByAltText('Placeholder Image');
    expect(imgElement).toHaveStyle('width: 100%');

    // simulate different viewports
    window.innerWidth = 1100;
    window.dispatchEvent(new Event('resize'));
    expect(imgElement).toHaveStyle('width: 80%');

    window.innerWidth = 900;
    window.dispatchEvent(new Event('resize'));
    expect(imgElement).toHaveStyle('width: 70%');

    window.innerWidth = 700;
    window.dispatchEvent(new Event('resize'));
    expect(imgElement).toHaveStyle('width: 60%');

    window.innerWidth = 500;
    window.dispatchEvent(new Event('resize'));
    expect(imgElement).toHaveStyle('width: 50%');
  });
});
