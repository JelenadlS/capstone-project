import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import DeleteModal from './DeleteModal.js';

describe('DeleteModal', () => {
  it('renders a p element with text and two buttons', () => {
    render(<DeleteModal show={true} />);
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

  it('when clicking please delete, the current card will be deleted', () => {
    const deleteFunctionality = jest.fn();
    render(<DeleteModal show={true} onDelete={deleteFunctionality} />);

    const deleteButton = screen.getByRole('button', {
      name: /please delete/i,
    });

    userEvent.click(deleteButton);
    expect(deleteFunctionality).toHaveBeenCalled();
  });

  it('when clicking NO, the current card will be kept', () => {
    const keepFunctionality = jest.fn();
    render(<DeleteModal show={true} onClose={keepFunctionality} />);

    const keepButton = screen.getByRole('button', {
      name: /no, i wanna keep it/i,
    });

    userEvent.click(keepButton);
    expect(keepFunctionality).toHaveBeenCalled();
  });
});
