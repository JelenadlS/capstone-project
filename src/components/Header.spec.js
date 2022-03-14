import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header.js';

describe('Header', () => {
  it('renders header with title and arrowbutton when link===y', () => {
    render(
      <MemoryRouter>
        <Header title="my activities" link={true} />
      </MemoryRouter>
    );

    const title = screen.getByText('my activities');
    const button = screen.getByRole('button');

    expect(title).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('renders header only with title when link!==y', () => {
    render(
      <MemoryRouter>
        <Header title="my activities" link={false} />
      </MemoryRouter>
    );

    const title = screen.getByText('my activities');
    const button = screen.queryByRole('button');

    expect(title).toBeInTheDocument();
    expect(button).not.toBeInTheDocument();
  });
});
