import { render, screen } from '@testing-library/react';
import Button from './Button.js';

describe('Button', () => {
  it('renders the button', () => {
    render(<Button />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });

  it('renders the button with props', () => {
    const property = 'font-size';
    render(<Button fontSize={property} />);

    expect(property).toBe('font-size', '14px');
  });
});
