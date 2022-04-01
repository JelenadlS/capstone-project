import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import Navigation from './Navigation.js';

describe('Navigation', () => {
  it('renders the navigation with four navigation links and the button', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    const link = screen.getAllByRole('link');
    expect(link).toHaveLength(4);

    const button = screen.getByRole('button', {
      name: /create a new activity/i,
    });
    expect(button).toBeInTheDocument();
  });
});
