import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import Header from './Header.js';

describe('Header', () => {
  it('renders header with friends page navigation image', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const heading = screen.getByRole('heading');
    const image = screen.getByRole('img', { name: 'friendsHomeIcon' });

    expect(heading).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });
});
