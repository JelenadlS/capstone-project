import { render, screen } from '@testing-library/react';
import NewActivityPage from './NewActivityPage.js';
import { MemoryRouter } from 'react-router-dom';

describe('NewActivityPage', () => {
  it('renders NewActivityPage with the backButton with the link and the form elements (textboxes and button)', () => {
    render(
      <MemoryRouter>
        <NewActivityPage />
      </MemoryRouter>
    );

    const arrowButton = screen.getByRole('button', { name: 'go back' });
    const link = screen.getByRole('link', { name: 'go back' });
    const textboxes = screen.getAllByRole('textbox');
    const addButton = screen.getByRole('button', { name: 'Add' });

    expect(arrowButton).toBeInTheDocument();
    expect(link).toBeInTheDocument();
    expect(textboxes).toHaveLength(2);
    expect(addButton).toBeInTheDocument();
  });
});
