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

    const friendIcon = screen.getByRole('link', { name: /friendIcon/i });
    expect(friendIcon).toBeInTheDocument();
    const addAFriendIcon = screen.getByRole('link', {
      name: /addAFriendIcon/i,
    });
    expect(addAFriendIcon).toBeInTheDocument();
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    const allActivitiesIcon = screen.getByRole('link', {
      name: /allActivitiesIcon/i,
    });
    expect(allActivitiesIcon).toBeInTheDocument();
    const inspireNavigation = screen.getByRole('link', { name: /inspire/i });
    expect(inspireNavigation).toBeInTheDocument();
  });
});
