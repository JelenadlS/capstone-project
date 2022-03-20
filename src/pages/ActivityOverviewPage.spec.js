import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import ActivityOverviewPage from './ActivityOverviewPage';

describe('ActivityOverviewPage', () => {
  it('renders page with a back, new and edit button, as well as a message to the user if there is no input', () => {
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

    const buttons = screen.getAllByRole('button');
    const header = screen.getByRole('heading');
    const dateEmpty = screen.getByText('plan your activity soon!');
    const locationEmpty = screen.getByText('where do you have to go?');

    expect(buttons).toHaveLength(3);
    expect(header).toBeInTheDocument();
    expect(dateEmpty).toBeInTheDocument();
    expect(locationEmpty).toBeInTheDocument();
  });
});
