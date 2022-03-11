import { render, screen } from '@testing-library/react';
import DeleteModal from './DeleteModal.js';

describe('DeleteModal', () => {
  it('renders a p element with text and two buttons', () => {
    render(<DeleteModal />);

    const text = screen.getByText('Are you sure you want to delete?');
    const keepButton = screen.getByRole('button', {
      name: /no, i wanna keep it/i,
    });
    const deleteButton = screen.getByRole('button', {
      name: /please delete/i,
    });
    expect(text).toBeInTheDocument();
    expect(keepButton).toBeInTheDocument();
    expect(deleteButton).toBeInTheDocument();
  });

  // test both bottom clicks are called
});
