import { render, screen } from '@testing-library/react';
import Card from './Card.js';
import userEvent from '@testing-library/user-event';

describe('Card', () => {
  it('renders card with activity and friend as well as button', () => {
    render(<Card activity="Frau Möller" friend="Clara" />);

    const activity = screen.getByText('Frau Möller');
    const friend = screen.getByText('Clara');
    const button = screen.getByRole('button');

    expect(activity).toBeInTheDocument();
    expect(friend).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('when clicking the bin, the DeleteModal is renderd with the delete button', () => {
    render(<Card />);

    const binButton = screen.getByRole('button', { name: /delete/i });

    userEvent.click(binButton);
    expect(binButton).toBeInTheDocument();
  });

  it('when clicking delete within the DeleteModal, the delete function will be called', () => {
    const deleteCallback = jest.fn();
    render(<Card onDeleteActivity={deleteCallback} />);

    const binButton = screen.getByRole('button', { name: /delete/i });
    userEvent.click(binButton);

    const deleteButton = screen.getByRole('button', {
      name: 'please delete',
    });
    userEvent.click(deleteButton);

    expect(deleteCallback).toBeCalled();
  });

  it('when clicking the keep activity button, the delete button cannot be found as DeleteModal is closing', () => {
    render(<Card />);

    const binButton = screen.getByRole('button', { name: /delete/i });
    userEvent.click(binButton);

    const keepButton = screen.getByRole('button', {
      name: 'NO, I wanna keep it',
    });
    userEvent.click(keepButton);

    expect(keepButton).not.toBeInTheDocument();
  });
});
