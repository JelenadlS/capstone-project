import { render, screen } from '@testing-library/react';
import Card from './Card.js';

describe('Card', () => {
  it('renders card with activity and name', () => {
    render(<Card activity="Frau Möller" name="Clara" />);

    const activity = screen.getByText('Frau Möller');
    const name = screen.getByText('Clara');

    expect(activity).toBeInTheDocument();
    expect(name).toBeInTheDocument();
  });
});
