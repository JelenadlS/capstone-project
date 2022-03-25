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
      category: 'culture',
      friend: 'Clara',
      photo: 'activity.png',
    },
  ];
  it('renders page with its heading, a go back and save button as well as a form with four textboxes, a combobox with five options and the select photo option)', () => {
    render(
      <MemoryRouter>
        <AllActivitiesPage activities={activities} />
      </MemoryRouter>
    );

    const header = screen.getByRole('heading', { name: /all activities/i });
    const button = screen.getAllByRole('button');
    const textboxes = screen.getAllByRole('textbox');
    const selectCategory = screen.getByRole('combobox');
    const categoryOptions = screen.getAllByRole('option');
    const selectImage = screen.getByRole('img', { name: /selectPhoto/i });

    expect(header).toBeInTheDocument();
    expect(button).toHaveLength(2);
    expect(textboxes).toHaveLength(4);
    expect(selectCategory).toBeInTheDocument();
    expect(categoryOptions).toHaveLength(5);
    expect(selectImage).toBeInTheDocument();
  });
});
