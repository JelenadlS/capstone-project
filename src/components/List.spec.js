import { render, screen } from '@testing-library/react';
import List from './List.js';

describe('List', () => {
  it('renders the list', () => {
    render(<List />);

    const list = screen.getByRole('list');

    expect(list).toBeInTheDocument();
  });

  it('renders all ten list items', () => {
    render(<List />);

    const listItems = screen.getAllByRole('listitem');

    expect(listItems).toHaveLength(10);
  });
});
