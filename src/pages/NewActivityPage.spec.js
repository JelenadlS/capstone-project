import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import NewActivityPage from './NewActivityPage.js';

describe('NewActivityPage', () => {
  it('renders page with a button to go back as well as a form with four textboxes and a button)', () => {
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
