import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import NewActivityPage from './NewActivityPage.js';

describe('NewActivityPage', () => {
  const addedFriend = [
    { id: '1', newFriend: 'Clara' },
    { id: '2', newFriend: 'Lasse' },
  ];
  it('renders page with its heading, a go back and save button as well as a form with three textboxes, a combobox with five options for categories, another for friends with two options and the select photo option)', () => {
    render(
      <MemoryRouter>
        <NewActivityPage addedFriend={addedFriend} />
      </MemoryRouter>
    );

    const header = screen.getByRole('heading', { name: /new activity/i });
    const button = screen.getAllByRole('button');
    const textboxes = screen.getAllByRole('textbox');
    const selectCategory = screen.getAllByRole('combobox');
    const categoryOptions = screen.getAllByRole('option');
    const selectImage = screen.getByRole('img', { name: /selectPhoto/i });

    expect(header).toBeInTheDocument();
    expect(button).toHaveLength(2);
    expect(textboxes).toHaveLength(3);
    expect(selectCategory).toHaveLength(2);
    expect(categoryOptions).toHaveLength(7);
    expect(selectImage).toBeInTheDocument();
  });
});
