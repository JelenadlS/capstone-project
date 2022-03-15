import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import EditActivityPage from './EditActivityPage.js';
import { renderWithRouterMatch } from '@testing-library/jest-dom/extend-expect';

describe('EditActivityPage', () => {
  it('renders EditActivityPage with the back button and edit link and the form', () => {
    renderWithRouterMatch(
      <MemoryRouter>
        <EditActivityPage />
      </MemoryRouter>
    );

    const button = screen.getByRole('button');
    const link = screen.getAllByRole('link');
    const form = screen.getAllByRole('from');
    const param = screen.getByText({
      route: '/project/ABC123',
      path: '/project/:id',
    });

    expect(button).toBeInTheDocument();
    expect(link).toHaveLength(1);
    expect(form).toBeInTheDocument();
    expect(param).toBeInTheDocument('Match id: ABC123');
  });
});
