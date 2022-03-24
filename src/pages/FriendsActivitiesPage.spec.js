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
  it('renders a page with headertitle, go back and new button, as well as three filter buttons, a list with two pictures and link and two delete buttons(picture and activity)', () => {
    const activities = [
      {
        id: '1',
        activity: 'Frau Möller',
        category: 'sport',
        friend: 'Clara',
        photo: 'activity.png',
      },
      {
        id: '2',
        activity: 'Elbstrand',
        category: 'culture',
        friend: 'Clara',
        photo: 'activity.png',
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
    const categoryButtonAll = screen.getByRole('button', { name: 'all' });
    const categoryButtonSport = screen.getByRole('button', { name: 'sport' });
    const categoryButtonCulture = screen.getByRole('button', {
      name: 'culture',
    });
    const list = screen.getByRole('list', { name: 'list of activities' });
    const picture = screen.getAllByRole('img', { name: /uploaded picture/i });
    const link = screen.getByRole('link', { name: 'new' });
    const deleteButton = screen.getAllByRole('button', { name: 'delete' });

    expect(title).toBeInTheDocument();
    expect(goBackButton).toBeInTheDocument();
    expect(newButton).toBeInTheDocument();
    expect(categoryButtonAll).toBeInTheDocument();
    expect(categoryButtonSport).toBeInTheDocument();
    expect(categoryButtonCulture).toBeInTheDocument();
    expect(list).toBeInTheDocument();
    expect(link).toBeInTheDocument();
    expect(picture).toHaveLength(2);
    expect(deleteButton).toHaveLength(2);
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

  it('renders placeholder picture when no picture was uploaded', () => {
    const activities = [
      {
        id: '1',
        activity: 'Frau Möller',
        category: 'sport',
        friend: 'Clara',
        photo: '',
      },
      {
        id: '2',
        activity: 'Elbstrand',
        category: 'sport',
        friend: 'Clara',
        photo: 'activity.png',
      },
    ];

    render(
      <MemoryRouter>
        <FriendsActivitiesPage activities={activities} />
      </MemoryRouter>
    );

    const placeholderImage = screen.getByRole('img', {
      name: /placeholder/i,
    });

    expect(placeholderImage).toBeInTheDocument();
  });
});
