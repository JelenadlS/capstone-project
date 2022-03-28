import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import List from './List.js';

describe('List', () => {
  Element.prototype.scrollIntoView = jest.fn();

  const currentFilter = 'sport';

  const selectedFriendsActivity = [
    { id: '1', activity: 'Frau Möller', category: 'sport', friend: 'Clara' },
    { id: '2', activity: 'Stadtpark', category: 'other', friend: 'Jana' },
  ];
  it('renders a list of activities which are having an placeholder picture and link', () => {
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
    const button = screen.getByRole('img', {
      name: 'placeholder picture sport',
    });

    expect(list).toBeInTheDocument();
    expect(link).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('renders a bin button when show bin is true', () => {
    render(
      <MemoryRouter>
        <List
          currentFilter={currentFilter}
          selectedFriendsActivity={selectedFriendsActivity}
          showBin={true}
        />
      </MemoryRouter>
    );
    const button = screen.getByRole('button', { name: 'delete' });

    expect(button).toBeInTheDocument();
  });

  it('renders a next page image when show bin is undefined', () => {
    render(
      <MemoryRouter>
        <List
          currentFilter={currentFilter}
          selectedFriendsActivity={selectedFriendsActivity}
          showBin={undefined}
        />
      </MemoryRouter>
    );
    const image = screen.getByRole('img', { name: 'next page' });

    expect(image).toBeInTheDocument();
  });
});
