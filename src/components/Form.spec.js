import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import Form from './Form.js';

describe('Form', () => {
  const addedFriend = [
    { id: '1', newFriend: 'Clara' },
    { id: '2', newFriend: 'Lasse' },
  ];
  it('renders a form with three textboxes, the two select boxes with once 5 options for category and 2 for friends, the date, select photo and a button', () => {
    render(
      <MemoryRouter>
        <Form addedFriend={addedFriend} />
      </MemoryRouter>
    );

    const textBoxes = screen.getAllByRole('textbox');
    const selectBox = screen.getAllByRole('combobox');
    const categoryOptions = screen.getAllByRole('option');
    const selectPhoto = screen.getByRole('img', { name: 'selectPhoto' });
    const date = screen.getByTestId('date');
    const submitButton = screen.getByRole('button');

    expect(textBoxes).toHaveLength(3);
    expect(selectBox).toHaveLength(2);
    expect(categoryOptions).toHaveLength(7);
    expect(selectPhoto).toBeInTheDocument();
    expect(date).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
});
