import { render, screen } from '@testing-library/react';
import Searchbar from './Searchbar.js';

describe('Searchbar', () => {
  it('renders an input', () => {
    render(<Searchbar />);

    const input = screen.getByRole('textbox', { name: /searchbar/i });

    expect(input).toBeInTheDocument();
  });
});
