import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import AllActivitiesPage from './AllActivitiesPage.js';

describe('AllActivitiesPage', () => {
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
      category: 'outdoor',
      friend: 'Varinja',
      photo: 'activity.png',
    },
  ];

  const filteredSearchActivities = [
    {
      id: '1',
      activity: 'Frau Möller',
      category: 'sport',
      friend: 'Clara',
      photo: 'activity.png',
    },
  ];

  it('renders page with its heading, navigation incl new button as well as the search bar and filter tags and a list', () => {
    render(
      <MemoryRouter>
        <AllActivitiesPage
          activities={activities}
          filteredSearchActivities={filteredSearchActivities}
        />
      </MemoryRouter>
    );

    const header = screen.getByRole('heading', { name: /all activities/i });
    const buttonNewActivity = screen.getByRole('button', { name: /new/i });
    const search = screen.getByRole('textbox', { name: /searchbar/i });
    const filter = screen.getByRole('button', { name: /all/i });
    const list = screen.getByRole('list', { name: /list of activities/i });
    const navigation = screen.getByRole('navigation');

    expect(header).toBeInTheDocument();
    expect(buttonNewActivity).toBeInTheDocument();
    expect(search).toBeInTheDocument();
    expect(filter).toBeInTheDocument();
    expect(list).toBeInTheDocument();
    expect(navigation).toBeInTheDocument();
  });
});
