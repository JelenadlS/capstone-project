import { render, screen } from '@testing-library/react';
import Button from './Button.js';

describe('Button', () => {
  it('renders the button', () => {
    render(<Button />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });

  it('renders the button with its props', () => {
    render(
      <Button
        fontSize="14px"
        background="transparent"
        margin="15px"
        justifySelf="end"
        width="fit-content"
      />
    );

    const button = screen.getByRole('button');

    expect(button).toHaveStyle(
      'font-size: 14px',
      'background: transparent',
      'margin: 15px',
      'justify-self: end',
      'width: fit-content'
    );
  });
});
