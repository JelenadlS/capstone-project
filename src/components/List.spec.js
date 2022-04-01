import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import List from './List.js';

describe('List', () => {
  Element.prototype.scrollIntoView = jest.fn();

  const selectedFriendsActivity = [
    { id: '1', activity: 'Frau Möller', category: 'sport', friend: 'Clara' },
    { id: '2', activity: 'Stadtpark', category: 'other', friend: 'Jana' },
  ];
  it('renders a list of activities which are having two placeholder picture and link', () => {
    render(
      <MemoryRouter>
        <List selectedFriendsActivity={selectedFriendsActivity} />
      </MemoryRouter>
    );
    const list = screen.getByRole('list', { name: 'list of activities' });
    const link = screen.getByRole('link', { name: 'Frau Möller' });
    const img = screen.getAllByRole('img', {
      name: /uploaded picture undefined/i,
    });

    expect(list).toBeInTheDocument();
    expect(link).toBeInTheDocument();
    expect(img).toHaveLength(2);
  });
});
