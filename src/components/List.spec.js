import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import List from './List.js';

describe('List', () => {
  Element.prototype.scrollIntoView = jest.fn();

  const activities = [
    { id: '2', activity: 'Stadtpark', category: 'other', friend: 'Jana' },
  ];

  it('renders a list of activities when an activity is there', () => {
    render(
      <MemoryRouter>
        <List activities={activities} filteredSearchActivities="Stadtpark" />
      </MemoryRouter>
    );

    const list = screen.getByRole('list', { name: 'list of activities' });

    expect(list).toBeInTheDocument();
  });

  it('renders an error message when no activity is there', () => {
    render(
      <MemoryRouter>
        <List activities={[]} />
      </MemoryRouter>
    );
    const errorMessage = screen.getByText(
      'There is no activity with this name.'
    );
    expect(errorMessage).toBeInTheDocument();
  });
});
