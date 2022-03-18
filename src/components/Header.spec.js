import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header.js';

describe('Header', () => {
  it('renders header', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const heading = screen.getByRole('heading');

    expect(heading).toBeInTheDocument();
  });
});
