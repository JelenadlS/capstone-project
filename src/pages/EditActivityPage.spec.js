import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import EditActivityPage from './EditActivityPage.js';

describe('EditActivityPage', () => {
  it('renders page with a back and twice a save button and the four textboxes of the form', () => {
    const activities = [{ id: '1' }, { id: '2' }];
    render(
      <MemoryRouter>
        <EditActivityPage activities={activities} />
      </MemoryRouter>
    );

    const buttons = screen.getAllByRole('button');
    const title = screen.getByText('Edit activity');
    const textboxes = screen.getAllByRole('textbox');

    expect(buttons).toHaveLength(3);
    expect(title).toBeInTheDocument();
    expect(textboxes).toHaveLength(4);
  });
});
