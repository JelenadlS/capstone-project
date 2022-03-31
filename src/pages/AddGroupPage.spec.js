import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import AddGroupPage from './AddGroupPage.js';

describe('AddGroupPage', () => {
  it('renders a header, a go back and save button, as well as a textbox', () => {
    const addedGroup = [
      { id: '1', enteredGroup: 'Segelclub' },
      { id: '2', enteredGroup: 'Girlsgroup' },
    ];
    render(
      <MemoryRouter>
        <AddGroupPage addedGroup={addedGroup} />
      </MemoryRouter>
    );
    const header = screen.getByRole('heading', { name: /Add a group/i });
    const saveButton = screen.getByRole('button', { name: /save/i });
    const goBackButton = screen.getByRole('button', { name: /go back/i });
    const textbox = screen.getByRole('textbox', {
      name: /What is the name of your group?/i,
    });
    const list = screen.getByRole('list', { name: /list of added groups/i });

    expect(header).toBeInTheDocument();
    expect(saveButton).toBeInTheDocument();
    expect(goBackButton).toBeInTheDocument();
    expect(textbox).toBeInTheDocument();
    expect(list).toBeInTheDocument();
  });

  it('renders no list when no group is entered yet', () => {
    const addedGroup = [];
    render(
      <MemoryRouter>
        <AddGroupPage addedGroup={addedGroup} />
      </MemoryRouter>
    );

    const list = screen.queryByRole('list', { name: /list of added groups/i });
    expect(list).not.toBeInTheDocument();
  });
});
