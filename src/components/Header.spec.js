import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header.js';

describe('Header', () => {
  it('renders header with title and arrowlink when link===y', () => {
    render(
      <MemoryRouter>
        <Header title="my activities" link={true} />
      </MemoryRouter>
    );

    const title = screen.getByText('my activities');
    const link = screen.getByRole('link');

    expect(title).toBeInTheDocument();
    expect(link).toBeInTheDocument();
  });

  it('renders header only with title when link!==y', () => {
    render(
      <MemoryRouter>
        <Header title="my activities" link={false} />
      </MemoryRouter>
    );

    const title = screen.getByText('my activities');
    const link = screen.queryByRole('link');

    expect(title).toBeInTheDocument();
    expect(link).not.toBeInTheDocument();
  });
});
