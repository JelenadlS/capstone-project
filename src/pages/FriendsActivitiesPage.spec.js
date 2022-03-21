import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import FriendsActivitiesPage from './FriendsActivitiesPage.js';

describe('MyFriendsPage', () => {
  it('renders a page with headertitle and link, a list and button', () => {
    const activities = [{ id: '1', activity: 'Frau Möller', friend: 'Clara' }];
    const selectedFriendsActivity = [
      { id: '1', activity: 'Frau Möller', friend: 'Clara' },
    ];
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useParams: () => ({
        friend: 'Clara',
      }),
      useRouteMatch: () => ({ url: '/Clara' }),
    }));

    render(
      <MemoryRouter>
        <FriendsActivitiesPage
          activities={activities}
          selectedFriendsActivity={selectedFriendsActivity}
        />
      </MemoryRouter>
    );

    const title = screen.getByText('Clara');
    const list = screen.getByRole('list');
    const button = screen.getByRole('button');

    expect(title).toBeInTheDocument();
    expect(list).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
