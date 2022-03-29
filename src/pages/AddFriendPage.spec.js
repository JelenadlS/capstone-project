import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import AddFriendPage from './AddFriendPage.js';

describe('AddFriendPage', () => {
  it('renders a header, a go back and save button, as well as a textbox', () => {
    const addedFriend = [
      { id: '1', newFriend: 'Clara' },
      { id: '2', newFriend: 'Lasse' },
    ];
    render(
      <MemoryRouter>
        <AddFriendPage addedFriend={addedFriend} />
      </MemoryRouter>
    );
    const header = screen.getByRole('heading', { name: /Add a friend/i });
    const saveButton = screen.getByRole('button', { name: /save/i });
    const goBackButton = screen.getByRole('button', { name: /go back/i });
    const textbox = screen.getByRole('textbox', {
      name: /Who is your friend?/i,
    });
    const list = screen.getByRole('list', { name: /list of added friends/i });

    expect(header).toBeInTheDocument();
    expect(saveButton).toBeInTheDocument();
    expect(goBackButton).toBeInTheDocument();
    expect(textbox).toBeInTheDocument();
    expect(list).toBeInTheDocument();
  });

  it('renders no list when no friend is entered yet', () => {
    const addedFriend = [];
    render(
      <MemoryRouter>
        <AddFriendPage addedFriend={addedFriend} />
      </MemoryRouter>
    );

    const list = screen.queryByRole('list', { name: /list of added friends/i });
    expect(list).not.toBeInTheDocument();
  });
});
