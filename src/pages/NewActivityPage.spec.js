import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import NewActivityPage from './NewActivityPage.js';

describe('NewActivityPage', () => {
  it('renders page with its heading, a go back and save button as well as a form with four textboxes, a combobox with five options and the select photo option)', () => {
    render(
      <MemoryRouter>
        <NewActivityPage />
      </MemoryRouter>
    );

    const header = screen.getByRole('heading', { name: /new activity/i });
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
