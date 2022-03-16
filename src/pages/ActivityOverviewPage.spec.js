import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ActivityOverviewPage from './ActivityOverviewPage';

describe('ActivityOverviewPage', () => {
  it('renders ActivityOverviewPage with the back and edit link, activity twice (header and text), the friend, notes, date and location', () => {
    const selectedActivity = [
      {
        activities: {
          id: '1',
          path: '/project/:id',
          friend: 'Clara',
          activity: 'Frau Möller',
          notes: 'notes',
          date: '13/02/21',
          location: 'HH',
        },
      },
      {
        id: '2',
        path: '/project/:id',
        friend: 'Clara',
        activity: 'Frau Möller',
        notes: 'notes',
        date: '13/02/21',
        location: 'HH',
      },
    ];
    render(
      <MemoryRouter>
        <ActivityOverviewPage activities={selectedActivity} />
      </MemoryRouter>
    );

    const links = screen.getAllByRole('link');
    const header = screen.getByRole('heading');
    const friendEmpty = screen.getByText('plan who will join you!');
    const dateEmpty = screen.getByText('plan your activity soon!');
    const locationEmpty = screen.getByText('where do you have to go?');

    expect(links).toHaveLength(2);
    expect(header).toBeInTheDocument();
    expect(friendEmpty).toBeInTheDocument();
    expect(dateEmpty).toBeInTheDocument();
    expect(locationEmpty).toBeInTheDocument();
  });
});
