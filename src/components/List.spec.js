import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import List from './List.js';

describe('List', () => {
  Element.prototype.scrollIntoView = jest.fn();

  it('renders the list', () => {
    const activities = [
      { id: '1', activity: 'Frau Möller', friend: 'Clara' },
      { id: '2', activity: 'Stadtpark', friend: 'Jana' },
    ];

    render(
      <MemoryRouter>
        <List activitiesOfSelectedFriend={activities} />
      </MemoryRouter>
    );
    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();
  });
});
