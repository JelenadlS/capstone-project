import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import Form from './Form.js';

describe('Form', () => {
  const addedFriend = [
    { id: '1', newFriend: 'Clara' },
    { id: '2', newFriend: 'Lasse' },
  ];
  const addedGroup = [
    { id: '1', enteredGroup: 'Segelclub' },
    { id: '2', enteredGroup: 'Girlsgroup' },
  ];
  it('renders a form with three textboxes, a select boxes with once 5 options for category, the date, select photo and a button', () => {
    render(
      <MemoryRouter>
        <Form addedFriend={addedFriend} addedGroup={addedGroup} />
      </MemoryRouter>
    );

    const textBoxes = screen.getAllByRole('textbox');
    const selectBox = screen.getByRole('combobox');
    const categoryOptions = screen.getAllByRole('option');
    const selectPhoto = screen.getByRole('img', { name: 'selectPhoto' });
    const date = screen.getByTestId('date');
    const submitAndFriendsButton = screen.getAllByRole('button');

    expect(textBoxes).toHaveLength(3);
    expect(selectBox).toHaveLength(5);
    expect(categoryOptions).toHaveLength(5);
    expect(selectPhoto).toBeInTheDocument();
    expect(date).toBeInTheDocument();
    expect(submitAndFriendsButton).toHaveLength(4);
  });
});
