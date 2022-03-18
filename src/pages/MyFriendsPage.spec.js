import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MyFriendsPage from './MyFriendsPage.js';

describe('MyFriendsPage', () => {
  it('renders a page with headertitle, a list and button', () => {
    const activities = [
      { id: '1', activity: 'Frau Möller', friend: 'Clara' },
      { id: '2', activity: 'Stadtpark', friend: 'Jana' },
    ];
    render(
      <MemoryRouter>
        <MyFriendsPage activities={activities} />
      </MemoryRouter>
    );

    const title = screen.getByText('my friends');
    const list = screen.getByRole('list');
    const button = screen.getByRole('button');

    expect(title).toBeInTheDocument();
    expect(list).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('renders an error message when no activities are found', () => {
    const activities = [];
    render(
      <MemoryRouter>
        <MyFriendsPage activities={activities} />
      </MemoryRouter>
    );

    const emptymessage = screen.getByTestId('emptylist');
    expect(emptymessage).toBeInTheDocument();
  });
});
