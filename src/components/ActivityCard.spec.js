import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ActivityCard from './ActivityCard.js';

describe('Card', () => {
  it('renders card with activity including picture, link and delete button', () => {
    render(
      <MemoryRouter>
        <ActivityCard activity="Frau Möller" />
      </MemoryRouter>
    );

    const picture = screen.getByRole('img', { name: /placeholder picture/i });
    const activity = screen.getByText('Frau Möller');
    const link = screen.getByRole('link');
    const button = screen.getByRole('button');

    expect(picture).toBeInTheDocument();
    expect(activity).toBeInTheDocument();
    expect(link).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('when clicking the bin, the DeleteModal is renderd with the delete button', () => {
    const showCallback = jest.fn();
    render(
      <MemoryRouter>
        <ActivityCard onClick={showCallback} />
      </MemoryRouter>
    );

    const binButton = screen.getByRole('button', { name: /delete/i });

    userEvent.click(binButton);
    expect(showCallback).toBeTruthy();
  });

  it('when clicking delete within the DeleteModal, the delete function will be called', () => {
    const deleteCallback = jest.fn();
    render(
      <MemoryRouter>
        <ActivityCard onDeleteActivity={deleteCallback} />
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
        <ActivityCard />
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
