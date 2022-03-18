import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ActivityOverviewPage from './ActivityOverviewPage';

describe('ActivityOverviewPage', () => {
  it('renders ActivityOverviewPage with the back and edit button, as well empty messages of the two inputs', () => {
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

    expect(buttons).toHaveLength(2);
    expect(header).toBeInTheDocument();
    expect(dateEmpty).toBeInTheDocument();
    expect(locationEmpty).toBeInTheDocument();
  });
});
