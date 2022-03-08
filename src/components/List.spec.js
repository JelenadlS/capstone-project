import { render, screen } from '@testing-library/react';
import List from './List.js';

describe('List', () => {
  it('renders the list', () => {
    const activities = [
      { id: '1', activity: 'Frau Möller', friend: 'Clara' },
      { id: '2', activity: 'Stadtpark', friend: 'Jana' },
    ];

    render(<List activities={activities} />);

    const list = screen.getByRole('list');

    expect(list).toBeInTheDocument();
  });
});
