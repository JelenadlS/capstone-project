import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import List from './List.js';

describe('List', () => {
  Element.prototype.scrollIntoView = jest.fn();

  it('renders a list of activities which are links with the name of activity and one delete button', () => {
    const currentFilter = 'sport';

    const selectedFriendsActivity = [
      { id: '1', activity: 'Frau Möller', category: 'sport', friend: 'Clara' },
      { id: '2', activity: 'Stadtpark', category: 'other', friend: 'Jana' },
    ];

    render(
      <MemoryRouter>
        <List
          currentFilter={currentFilter}
          selectedFriendsActivity={selectedFriendsActivity}
        />
      </MemoryRouter>
    );
    const list = screen.getByRole('list', { name: 'list of activities' });
    const link = screen.getByRole('link', { name: 'Frau Möller' });
    const button = screen.getByRole('button', { name: 'delete' });

    expect(list).toBeInTheDocument();
    expect(link).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
