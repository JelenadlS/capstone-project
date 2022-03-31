import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import MyFriendsPage from './MyFriendsPage.js';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    friendsName: 'Clara',
  }),
  useNavigate: () => ({ url: '/Clara' }),
}));

describe('MyFriendsPage', () => {
  it('renders a page with headertitle, a list and button', () => {
    const activities = [
      { id: '1', activity: 'Frau Möller', category: 'sport', friend: 'Clara' },
    ];

    render(
      <MemoryRouter>
        <MyFriendsPage activities={activities} />
      </MemoryRouter>
    );

    const title = screen.getByRole('heading', { name: /my friends/i });
    const list = screen.getByRole('list', { name: /list of friends/i });
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
