import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('renders the header', () => {
    render(<Header text="Top 10 to do in Hamburg" />);

    const text = screen.getByText('Top 10 to do in Hamburg');

    expect(text).toBeInTheDocument();
  });
});
