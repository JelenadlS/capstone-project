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
  ];
  it('renders page with its heading, navigation incl new button as well as the search bar and list with list items including picture, link and next page image', () => {
    render(
      <MemoryRouter>
        <AllActivitiesPage activities={activities} />
      </MemoryRouter>
    );

    const header = screen.getByRole('heading', { name: /all activities/i });
    const buttonNewActivity = screen.getByRole('button');
    const search = screen.getByRole('textbox', { name: /searchbar/i });
    const list = screen.getByTestId('list of activties');
    const pictureActivity = screen.getByRole('img', {
      name: 'uploaded picture activity.png',
    });
    const pictureNext = screen.getByRole('img', { name: 'next page' });
    const link = screen.getByRole('link', { name: /Frau Möller/i });
    const navigation = screen.getByRole('navigation');

    expect(header).toBeInTheDocument();
    expect(buttonNewActivity).toBeInTheDocument();
    expect(search).toBeInTheDocument();
    expect(list).toBeInTheDocument();
    expect(pictureActivity).toBeInTheDocument();
    expect(pictureNext).toBeInTheDocument();
    expect(link).toBeInTheDocument();
    expect(navigation).toBeInTheDocument();
  });
});
