import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import NewActivityPage from './NewActivityPage.js';

describe('NewActivityPage', () => {
  it('renders page with a go back and save button as well as a form with four textboxes and a button)', () => {
    render(
      <MemoryRouter>
        <NewActivityPage />
      </MemoryRouter>
    );

    const button = screen.getAllByRole('button');
    const textboxes = screen.getAllByRole('textbox');

    expect(button).toHaveLength(3);
    expect(textboxes).toHaveLength(4);
  });
});
