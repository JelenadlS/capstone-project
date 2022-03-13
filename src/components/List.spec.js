import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
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
        <List activities={activities} />
      </MemoryRouter>
    );
    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();
  });

  it('shows empty message when no list item is there', () => {
    render(
      <MemoryRouter>
        <List />
      </MemoryRouter>
    );

    const emptymessage = screen.queryByText(
      'unfortunately you did not enter any activity yet. Start now and fill your list with amazing activities!'
    );
    expect(emptymessage).toBeInTheDocument();
  });
});
