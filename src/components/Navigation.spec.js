import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import Navigation from './Navigation.js';

describe('Navigation', () => {
  it('renders the navigation with two navigation links and the button', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    const homeNavigation = screen.getByRole('link', { name: /home/i });
    expect(homeNavigation).toBeInTheDocument();
    const searchNavigation = screen.getByRole('link', { name: /search/i });
    expect(searchNavigation).toBeInTheDocument();
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
});
