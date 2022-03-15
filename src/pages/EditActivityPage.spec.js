import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import EditActivityPage from './EditActivityPage.js';

describe('EditActivityPage', () => {
  it('renders EditActivityPage with the back button and edit link and the form', () => {
    render(
      <MemoryRouter>
        <EditActivityPage />
      </MemoryRouter>
    );

    const button = screen.getByRole('button');
    const link = screen.getAllByRole('link');
    const form = screen.getAllByRole('from');

    expect(button).toBeInTheDocument();
    expect(link).toHaveLength(1);
    expect(form).toBeInTheDocument();
  });
});
