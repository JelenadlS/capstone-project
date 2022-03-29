import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import EditActivityPage from './EditActivityPage.js';

describe('EditActivityPage', () => {
  const addedFriend = [
    { id: '1', newFriend: 'Clara' },
    { id: '2', newFriend: 'Lasse' },
  ];
  it('renders page with header, a back and save button and the three textboxes, category selction with five options and friends selection with two options and the select photo option of the form', () => {
    const activities = [{ id: '1' }, { id: '2' }];
    render(
      <MemoryRouter>
        <EditActivityPage activities={activities} addedFriend={addedFriend} />
      </MemoryRouter>
    );
    const header = screen.getByRole('heading', { name: /edit activity/i });
    const buttons = screen.getAllByRole('button');
    const selectCategory = screen.getAllByRole('combobox');
    const categoryOptions = screen.getAllByRole('option');
    const textboxes = screen.getAllByRole('textbox');
    const selectPhoto = screen.getByRole('img', { name: 'selectPhoto' });

    expect(header).toBeInTheDocument();
    expect(buttons).toHaveLength(2);
    expect(selectCategory).toHaveLength(2);
    expect(categoryOptions).toHaveLength(7);
    expect(textboxes).toHaveLength(3);
    expect(selectPhoto).toBeInTheDocument();
  });
});
