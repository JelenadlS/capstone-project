import { render, screen } from '@testing-library/react';
import Card from './Card.js';

describe('Card', () => {
  it('renders card with activity and friend', () => {
    render(<Card activity="Frau Möller" friend="Clara" />);

    const activity = screen.getByText('Frau Möller');
    const friend = screen.getByText('Clara');

    expect(activity).toBeInTheDocument();
    expect(friend).toBeInTheDocument();
  });
});
