import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import EditActivityPage from './EditActivityPage.js';

describe('EditActivityPage', () => {
  it('renders page with header, a back and save button and the four textboxes, category selction with five options and the preview of the form', () => {
    const activities = [{ id: '1' }, { id: '2' }];
    render(
      <MemoryRouter>
        <EditActivityPage activities={activities} />
      </MemoryRouter>
    );
    const header = screen.getByRole('heading', { name: /edit activity/i });
    const buttons = screen.getAllByRole('button');
    const selectCategory = screen.getByRole('combobox');
    const categoryOptions = screen.getAllByRole('option');
    const textboxes = screen.getAllByRole('textbox');
    const previewImage = screen.getByRole('img', { name: 'preview' });

    expect(header).toBeInTheDocument();
    expect(buttons).toHaveLength(2);
    expect(selectCategory).toBeInTheDocument();
    expect(categoryOptions).toHaveLength(5);
    expect(textboxes).toHaveLength(4);
    expect(previewImage).toBeInTheDocument();
  });
});
