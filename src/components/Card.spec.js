import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Card from './Card.js';
import userEvent from '@testing-library/user-event';

describe('Card', () => {
  it('renders card with activity and delete button', () => {
    render(
      <MemoryRouter>
        <Card activity="Frau Möller" />
      </MemoryRouter>
    );

    const activity = screen.getByText('Frau Möller');

    const button = screen.getByRole('button');

    expect(activity).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('when clicking the bin, the DeleteModal is renderd with the delete button', () => {
    render(
      <MemoryRouter>
        <Card />
      </MemoryRouter>
    );

    const binButton = screen.getByRole('button', { name: /delete/i });

    userEvent.click(binButton);
    expect(binButton).toBeInTheDocument();
  });

  it('when clicking delete within the DeleteModal, the delete function will be called', () => {
    const deleteCallback = jest.fn();
    render(
      <MemoryRouter>
        <Card onDeleteActivity={deleteCallback} />
      </MemoryRouter>
    );

    const binButton = screen.getByRole('button', { name: /delete/i });
    userEvent.click(binButton);

    const deleteButton = screen.getByRole('button', {
      name: 'please delete',
    });
    userEvent.click(deleteButton);

    expect(deleteCallback).toBeCalled();
  });

  it('when clicking the keep activity button, the delete button cannot be found as DeleteModal is closing', () => {
    render(
      <MemoryRouter>
        <Card />
      </MemoryRouter>
    );

    const binButton = screen.getByRole('button', { name: /delete/i });
    userEvent.click(binButton);

    const keepButton = screen.getByRole('button', {
      name: 'NO, I wanna keep it',
    });
    userEvent.click(keepButton);

    expect(keepButton).not.toBeInTheDocument();
  });
});
