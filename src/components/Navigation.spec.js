import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import Navigation from './Navigation.js';

describe('Navigation', () => {
  it('renders the navigation with the five navigation links', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    const linkfriend = screen.getByRole('link', {
      name: 'all non friend and friend related activities',
    });
    const linkgroup = screen.getByRole('link', {
      name: 'all group related activities',
    });
    const linknew = screen.getByRole('link', { name: 'add an activity' });
    const linkall = screen.getByRole('link', { name: 'all activities' });
    const linkinspire = screen.getByRole('link', {
      name: 'all activities you already did',
    });

    expect(linkfriend).toBeInTheDocument();
    expect(linkgroup).toBeInTheDocument();
    expect(linknew).toBeInTheDocument();
    expect(linkall).toBeInTheDocument();
    expect(linkinspire).toBeInTheDocument();
  });

  it('renders the navigation without add link when it is hidden', () => {
    render(
      <MemoryRouter>
        <Navigation hidden={true} />
      </MemoryRouter>
    );

    const linknew = screen.queryByRole('link', { name: 'add an activity' });

    expect(linknew).not.toBeInTheDocument();
  });
});
