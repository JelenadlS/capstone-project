import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import FriendsActivitiesPage from './FriendsActivitiesPage.js';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    friendsName: 'Clara',
  }),
  useNavigate: () => ({ url: '/Clara' }),
}));

Element.prototype.scrollIntoView = jest.fn();

describe('MyFriendsPage', () => {
  it('renders a page with headertitle, go back and new button, as well as filter button, a list and link', () => {
    const activities = [
      { id: '1', activity: 'Frau Möller', category: 'sport', friend: 'Clara' },
      {
        id: '2',
        activity: 'Elbstrand',
        category: 'culture',
        friend: 'Clara',
      },
    ];

    render(
      <MemoryRouter>
        <FriendsActivitiesPage activities={activities} />
      </MemoryRouter>
    );

    const title = screen.getByText('Clara');
    const goBackButton = screen.getByRole('button', { name: 'go back' });
    const newButton = screen.getByRole('button', { name: 'new' });
    const categoryButton = screen.getByRole('button', { name: 'sport' });
    const list = screen.getByRole('list');
    const link = screen.getByRole('link', { name: 'new' });

    expect(title).toBeInTheDocument();
    expect(goBackButton).toBeInTheDocument();
    expect(newButton).toBeInTheDocument();
    expect(categoryButton).toBeInTheDocument();
    expect(list).toBeInTheDocument();
    expect(link).toBeInTheDocument();
  });
  it('renders no category, when only one type is given', () => {
    const activities = [
      { id: '1', activity: 'Frau Möller', category: 'sport', friend: 'Clara' },
      {
        id: '2',
        activity: 'Elbstrand',
        category: 'sport',
        friend: 'Clara',
      },
    ];

    render(
      <MemoryRouter>
        <FriendsActivitiesPage activities={activities} />
      </MemoryRouter>
    );

    const categoryText = screen.queryByText('sport');

    expect(categoryText).not.toBeInTheDocument();
  });
});
