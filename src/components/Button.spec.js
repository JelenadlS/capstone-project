import { render, screen } from '@testing-library/react';
import Button from './Button.js';

describe('Button', () => {
  it('renders the button', () => {
    render(<Button />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });

  // Add all props
  it('renders the button with props', () => {
    render(<Button fontSize="14px" justifySelf="end" />);

    const button = screen.getByRole('button');

    expect(button).toHaveStyle('font-size: 14px', 'justify-self: end');
  });
});
