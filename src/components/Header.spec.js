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

    expect(heading).toBeInTheDocument();
  });
});
