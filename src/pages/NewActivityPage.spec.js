import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NewActivityPage from './NewActivityPage.js';

describe('NewActivityPage', () => {
  it('renders NewActivityPage with the backbutton and the form elements (4 textboxes and button)', () => {
    render(
      <MemoryRouter>
        <NewActivityPage />
      </MemoryRouter>
    );

    const button = screen.getByRole('button', { name: 'go back' });
    const textboxes = screen.getAllByRole('textbox');
    const addButton = screen.getByRole('button', { name: 'Add' });

    expect(button).toBeInTheDocument();
    expect(textboxes).toHaveLength(4);
    expect(addButton).toBeInTheDocument();
  });
});
